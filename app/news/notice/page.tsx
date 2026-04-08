'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Pin, Plus, Trash2 } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  content: string;
  category: string;
  isPinned: boolean;
  date: string;
}

const categoryColors: Record<string, string> = {
  모집공고: '#FF6600',
  선정결과: '#0066cc',
  결과발표: '#0066cc',
  결과보고: '#555',
  공지: '#003087',
  안내: '#555',
};

const PER_PAGE = 10;

export default function NoticePage() {
  const router = useRouter();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('/api/notices')
      .then((r) => r.json())
      .then(setNotices);
  }, []);

  const totalPages = Math.max(1, Math.ceil(notices.length / PER_PAGE));
  const paged = notices.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleDelete(e: React.MouseEvent, id: number) {
    e.preventDefault();
    e.stopPropagation();
    const pw = prompt('관리자 비밀번호를 입력하세요');
    if (!pw) return;
    fetch(`/api/notices/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': pw },
    }).then((r) => {
      if (r.ok) setNotices((prev) => prev.filter((n) => n.id !== id));
      else alert('비밀번호가 틀렸습니다.');
    });
  }

  return (
    <article>
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold text-gray-900">공지사항</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">총 {notices.length}건</span>
          <button
            onClick={() => router.push('/news/notice/write')}
            className="flex items-center gap-1 px-3 py-1.5 rounded text-white text-sm font-medium"
            style={{ backgroundColor: '#003087' }}
          >
            <Plus size={14} />
            글쓰기
          </button>
        </div>
      </div>
      <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: '#FF6600' }} />

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div
          className="grid grid-cols-12 px-4 py-3 text-xs font-semibold text-white hidden md:grid"
          style={{ backgroundColor: '#003087' }}
        >
          <span className="col-span-1 text-center">번호</span>
          <span className="col-span-2 text-center">분류</span>
          <span className="col-span-6">제목</span>
          <span className="col-span-2 text-center">작성일</span>
          <span className="col-span-1 text-center">관리</span>
        </div>

        <ul className="divide-y divide-gray-100">
          {paged.map((notice) => (
            <li key={notice.id}>
              <div
                className={`grid md:grid-cols-12 gap-2 md:gap-0 px-4 py-4 hover:bg-blue-50 transition-colors cursor-pointer ${notice.isPinned ? 'bg-blue-50/50' : ''}`}
                onClick={() => router.push(`/news/notice/${notice.id}`)}
              >
                <span className="hidden md:flex col-span-1 items-center justify-center text-sm text-gray-400">
                  {notice.isPinned ? (
                    <Pin size={14} style={{ color: '#FF6600' }} />
                  ) : (
                    notice.id
                  )}
                </span>
                <span className="hidden md:flex col-span-2 items-center justify-center">
                  <span
                    className="px-2 py-0.5 rounded text-white text-xs font-medium"
                    style={{ backgroundColor: categoryColors[notice.category] || '#555' }}
                  >
                    {notice.category}
                  </span>
                </span>
                <span className="col-span-6 flex items-center gap-2">
                  <span className="text-sm text-gray-800 hover:text-[#003087]">
                    {notice.title}
                  </span>
                </span>
                <span className="col-span-2 flex items-center justify-center gap-1 text-xs text-gray-400">
                  <Calendar size={12} />
                  {notice.date}
                </span>
                <span className="hidden md:flex col-span-1 items-center justify-center">
                  <button
                    onClick={(e) => handleDelete(e, notice.id)}
                    className="p-1 text-gray-300 hover:text-red-500 transition-colors"
                    title="삭제"
                  >
                    <Trash2 size={14} />
                  </button>
                </span>
              </div>
            </li>
          ))}
          {paged.length === 0 && (
            <li className="px-4 py-10 text-center text-sm text-gray-400">등록된 글이 없습니다.</li>
          )}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`w-8 h-8 rounded text-sm transition-colors ${
              p === page
                ? 'text-white font-bold'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-[#003087]'
            }`}
            style={p === page ? { backgroundColor: '#003087' } : {}}
          >
            {p}
          </button>
        ))}
      </div>
    </article>
  );
}
