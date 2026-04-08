'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Suspense } from 'react';

const CATEGORIES = ['공지', '모집공고', '선정결과', '결과발표', '결과보고', '안내'];

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
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isEdit && authed) {
      fetch(`/api/notices/${editId}`)
        .then((r) => r.json())
        .then((data) => {
          setTitle(data.title);
          setContent(data.content);
          setCategory(data.category);
          setIsPinned(data.isPinned);
        });
    }
  }, [isEdit, editId, authed]);

  function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    fetch('/api/notices', { headers: { 'x-admin-password': password } }).then((r) => {
      // 실제 인증은 서버에서 하므로 POST 시 검증됨. 간단히 비번 저장 후 진행
      setAuthed(true);
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return alert('제목과 내용을 입력하세요.');
    setSubmitting(true);

    const body = { title, content, category, isPinned };
    const url = isEdit ? `/api/notices/${editId}` : '/api/notices';
    const method = isEdit ? 'PUT' : 'POST';

    const r = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify(body),
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
