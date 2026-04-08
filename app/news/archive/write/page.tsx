'use client';

import { useEffect, useState, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Paperclip, X } from 'lucide-react';

const CATEGORIES = ['보고서', '행사자료', '사업계획', '규정', '자료'];

function ArchiveWriteForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('id');
  const isEdit = !!editId;

  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('보고서');
  const [file, setFile] = useState<File | null>(null);
  const [existingFile, setExistingFile] = useState<{ name: string; url: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit && authed) {
      fetch(`/api/archive/${editId}`)
        .then((r) => r.json())
        .then((data) => {
          setTitle(data.title);
          setContent(data.content);
          setCategory(data.category);
          if (data.fileUrl) setExistingFile({ name: data.fileName, url: data.fileUrl });
        });
    }
  }, [isEdit, editId, authed]);

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
    formData.append('category', category);
    if (file) formData.append('file', file);

    const url = isEdit ? `/api/archive/${editId}` : '/api/archive';
    const method = isEdit ? 'PUT' : 'POST';

    const r = await fetch(url, {
      method,
      headers: { 'x-admin-password': password },
      body: formData,
    });

    setSubmitting(false);
    if (r.ok) router.push('/news/archive');
    else alert('비밀번호가 틀렸거나 오류가 발생했습니다.');
  }

  return (
    <article>
      <button
        onClick={() => router.push('/news/archive')}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#003087] mb-6 transition-colors"
      >
        <ArrowLeft size={14} />
        목록으로
      </button>

      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? '자료 수정' : '자료 등록'}</h2>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">분류</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#003087]"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
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

          {/* 파일 첨부 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">파일 첨부</label>
            {existingFile && !file && (
              <div className="flex items-center gap-2 mb-2 p-2 bg-gray-50 rounded border border-gray-200 text-sm">
                <Paperclip size={13} className="text-gray-400" />
                <span className="flex-1 text-gray-700 truncate">{existingFile.name}</span>
                <button
                  type="button"
                  onClick={() => setExistingFile(null)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X size={13} />
                </button>
              </div>
            )}
            {file && (
              <div className="flex items-center gap-2 mb-2 p-2 bg-blue-50 rounded border border-blue-200 text-sm">
                <Paperclip size={13} className="text-blue-400" />
                <span className="flex-1 text-gray-700 truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => { setFile(null); if (fileRef.current) fileRef.current.value = ''; }}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X size={13} />
                </button>
              </div>
            )}
            <label
              className="flex items-center gap-2 cursor-pointer px-4 py-2 border border-dashed border-gray-300 rounded text-sm text-gray-500 hover:border-[#003087] hover:text-[#003087] transition-colors w-fit"
            >
              <Paperclip size={14} />
              파일 선택
              <input
                ref={fileRef}
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => router.push('/news/archive')}
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

export default function ArchiveWritePage() {
  return (
    <Suspense>
      <ArchiveWriteForm />
    </Suspense>
  );
}
