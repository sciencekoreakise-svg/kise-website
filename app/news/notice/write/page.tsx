'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Paperclip, X } from 'lucide-react';
import { Suspense } from 'react';

const CATEGORIES = ['공지', '모집공고', '선정결과', '결과발표', '결과보고', '안내'];

interface Attachment {
  fileName: string;
  fileSize: string;
  fileUrl: string;
}

function NoticeWriteForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('id');
  const isEdit = !!editId;

  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('공지');
  const [isPinned, setIsPinned] = useState(false);
  const [existingAttachments, setExistingAttachments] = useState<Attachment[]>([]);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit && authed) {
      fetch(`/api/notices/${editId}`)
        .then((r) => r.json())
        .then((data) => {
          setTitle(data.title);
          setContent(data.content);
          setCategory(data.category);
          setIsPinned(data.isPinned);
          setExistingAttachments(data.attachments ?? []);
        });
    }
  }, [isEdit, editId, authed]);

  function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setAuthed(true);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);
    setNewFiles((prev) => [...prev, ...selected]);
    e.target.value = '';
  }

  function removeExisting(index: number) {
    setExistingAttachments((prev) => prev.filter((_, i) => i !== index));
  }

  function removeNew(index: number) {
    setNewFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return alert('제목과 내용을 입력하세요.');
    setSubmitting(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    formData.append('isPinned', String(isPinned));

    if (isEdit) {
      formData.append('keepAttachments', JSON.stringify(existingAttachments));
    }

    for (const file of newFiles) {
      formData.append('files', file);
    }

    const url = isEdit ? `/api/notices/${editId}` : '/api/notices';
    const method = isEdit ? 'PUT' : 'POST';

    const r = await fetch(url, {
      method,
      headers: { 'x-admin-password': password },
      body: formData,
    });

    setSubmitting(false);
    if (r.ok) {
      router.push('/news/notice');
    } else {
      alert('비밀번호가 틀렸거나 오류가 발생했습니다.');
    }
  }

  return (
    <article>
      <button
        onClick={() => router.push('/news/notice')}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#003087] mb-6 transition-colors"
      >
        <ArrowLeft size={14} />
        목록으로
      </button>

      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? '공지사항 수정' : '공지사항 작성'}</h2>
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
          <div className="flex gap-4">
            <div className="flex-1">
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
            <div className="flex items-end pb-2">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isPinned}
                  onChange={(e) => setIsPinned(e.target.checked)}
                  className="w-4 h-4"
                />
                상단고정
              </label>
            </div>
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
              rows={12}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#003087] resize-y"
            />
          </div>

          {/* 첨부파일 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">첨부파일</label>

            {/* 기존 첨부파일 (수정 시) */}
            {existingAttachments.length > 0 && (
              <ul className="mb-2 space-y-1">
                {existingAttachments.map((att, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded px-3 py-1.5">
                    <Paperclip size={13} className="text-gray-400 shrink-0" />
                    <span className="flex-1 truncate">{att.fileName}</span>
                    <span className="text-gray-400 text-xs shrink-0">{att.fileSize}</span>
                    <button type="button" onClick={() => removeExisting(i)} className="text-gray-300 hover:text-red-500 transition-colors">
                      <X size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* 새로 추가할 파일 */}
            {newFiles.length > 0 && (
              <ul className="mb-2 space-y-1">
                {newFiles.map((file, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 rounded px-3 py-1.5">
                    <Paperclip size={13} className="text-blue-400 shrink-0" />
                    <span className="flex-1 truncate">{file.name}</span>
                    <span className="text-gray-400 text-xs shrink-0">{(file.size / 1024).toFixed(1)} KB</span>
                    <button type="button" onClick={() => removeNew(i)} className="text-gray-300 hover:text-red-500 transition-colors">
                      <X size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-2 border border-dashed border-gray-300 rounded text-sm text-gray-500 hover:border-[#003087] hover:text-[#003087] transition-colors"
            >
              <Paperclip size={14} />
              파일 첨부
            </button>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => router.push('/news/notice')}
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

export default function NoticeWritePage() {
  return (
    <Suspense>
      <NoticeWriteForm />
    </Suspense>
  );
}
