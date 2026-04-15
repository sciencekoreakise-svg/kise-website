'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

function ContributionWriteForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('id');
  const isEdit = !!editId;

  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [title, setTitle] = useState('');
  const [media, setMedia] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [url, setUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isEdit && authed) {
      fetch(`/api/contributions`)
        .then((r) => r.json())
        .then((items) => {
          const item = items.find((p: { id: number }) => p.id === Number(editId));
          if (item) {
            setTitle(item.title);
            setMedia(item.media);
            setDate(item.date);
            setUrl(item.url);
          }
        });
    }
  }, [isEdit, editId, authed]);

  function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setAuthed(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !url.trim()) return alert('제목과 링크를 입력하세요.');
    setSubmitting(true);

    const apiUrl = isEdit ? `/api/contributions/${editId}` : '/api/contributions';
    const method = isEdit ? 'PUT' : 'POST';

    const r = await fetch(apiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-admin-password': password,
      },
      body: JSON.stringify({ title, media, date, url }),
    });

    setSubmitting(false);
    if (r.ok) router.push('/intro/greeting');
    else alert('비밀번호가 틀렸거나 오류가 발생했습니다.');
  }

  return (
    <article>
      <button
        onClick={() => router.push('/intro/greeting')}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#003087] mb-6 transition-colors"
      >
        <ArrowLeft size={14} />
        인사말로 돌아가기
      </button>

      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold text-gray-900">{isEdit ? '기고문 수정' : '기고문 등록'}</h2>
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
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              제목 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="기고문 제목을 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#003087]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">게재일</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#003087]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              기사 링크 <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://..."
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#003087]"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => router.push('/intro/greeting')}
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

export default function ContributionWritePage() {
  return (
    <Suspense>
      <ContributionWriteForm />
    </Suspense>
  );
}
