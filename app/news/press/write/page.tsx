'use client';

import { useEffect, useRef, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, ImagePlus, X } from 'lucide-react';

function PressWriteForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('id');
  const isEdit = !!editId;

  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [existingImage, setExistingImage] = useState<string | null>(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit && authed) {
      fetch(`/api/press/${editId}`)
        .then((r) => r.json())
        .then((data) => {
          setTitle(data.title);
          setContent(data.content);
          setMedia(data.media);
          if (data.imageUrl) setExistingImage(data.imageUrl);
        });
    }
  }, [isEdit, editId, authed]);

  // 이미지 선택 시 미리보기 생성
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setImage(file);
    setRemoveImage(false);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      setPreview(null);
    }
  }

  function handleRemoveImage() {
    setImage(null);
    setPreview(null);
    setRemoveImage(true);
    setExistingImage(null);
    if (fileRef.current) fileRef.current.value = '';
  }

  function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setAuthed(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return alert('제목과 내용을 입력하세요.');
    setSubmitting(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('media', media);
    if (image) formData.append('image', image);
    if (removeImage) formData.append('removeImage', 'true');

    const url = isEdit ? `/api/press/${editId}` : '/api/press';
    const method = isEdit ? 'PUT' : 'POST';

    const r = await fetch(url, {
      method,
      headers: { 'x-admin-password': password },
      body: formData,
    });

    setSubmitting(false);
    if (r.ok) {
      router.push('/news/press');
    } else {
      const data = await r.json().catch(() => ({}));
      alert(`오류 (${r.status}): ${data.error || '알 수 없는 오류'}`);
    }
  }

  const displayImage = preview || (removeImage ? null : existingImage);

  return (
    <article>
      <button
        onClick={() => router.push('/news/press')}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#003087] mb-6 transition-colors"
      >
        <ArrowLeft size={14} />
        목록으로
      </button>

      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? '보도자료 수정' : '보도자료 작성'}</h2>
      </div>
      <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: '#FF6600' }} />

      {!authed ? (
        <form onSubmit={handleAuth} className="max-w-sm">
          <p className="text-sm text-gray-600 mb-3">관리자 비밀번호를 입력하세요.</p>
          <div className="flex gap-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#003087]"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded text-white text-sm font-medium"
              style={{ backgroundColor: '#003087' }}
            >
              확인
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">매체명</label>
            <input
              type="text"
              value={media}
              onChange={(e) => setMedia(e.target.value)}
              placeholder="예: 전자신문, 연합뉴스"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#003087]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#003087]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              rows={10}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#003087] resize-y"
            />
          </div>

          {/* 이미지 첨부 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">대표 이미지</label>

            {displayImage ? (
              /* 미리보기 */
              <div className="relative inline-block">
                <img
                  src={displayImage}
                  alt="미리보기"
                  className="max-h-64 max-w-full rounded-lg border border-gray-200 object-contain bg-gray-50"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                >
                  <X size={14} />
                </button>
                <p className="mt-1.5 text-xs text-gray-400">
                  {image ? image.name : '현재 이미지'}
                </p>
              </div>
            ) : (
              /* 업로드 버튼 */
              <label className="flex flex-col items-center justify-center gap-2 w-full h-36 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#003087] hover:bg-blue-50/30 transition-colors">
                <ImagePlus size={28} className="text-gray-300" />
                <span className="text-sm text-gray-400">클릭하여 이미지 선택</span>
                <span className="text-xs text-gray-300">JPG, PNG, GIF, WEBP</span>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => router.push('/news/press')}
              className="px-5 py-2 rounded border border-gray-300 text-gray-600 text-sm hover:border-[#003087] transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-2 rounded text-white text-sm font-medium disabled:opacity-50"
              style={{ backgroundColor: '#003087' }}
            >
              {submitting ? '저장 중...' : isEdit ? '수정 완료' : '등록'}
            </button>
          </div>
        </form>
      )}
    </article>
  );
}

export default function PressWritePage() {
  return (
    <Suspense>
      <PressWriteForm />
    </Suspense>
  );
}
