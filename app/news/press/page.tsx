'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Newspaper, Plus, Trash2 } from 'lucide-react';

interface PressItem {
  id: number;
  title: string;
  content: string;
  media: string;
  date: string;
}

const PER_PAGE = 10;

export default function PressPage() {
  const router = useRouter();
  const [items, setItems] = useState<PressItem[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('/api/press')
      .then((r) => r.json())
      .then(setItems);
  }, []);

  const totalPages = Math.max(1, Math.ceil(items.length / PER_PAGE));
  const paged = items.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleDelete(e: React.MouseEvent, id: number) {
    e.stopPropagation();
    const pw = prompt('관리자 비밀번호를 입력하세요');
    if (!pw) return;
    fetch(`/api/press/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': pw },
    }).then((r) => {
      if (r.ok) setItems((prev) => prev.filter((p) => p.id !== id));
      else alert('비밀번호가 틀렸습니다.');
    });
  }

  return (
    <article>
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold text-gray-900">보도자료</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">총 {items.length}건</span>
          <button
            onClick={() => router.push('/news/press/write')}
            className="flex items-center gap-1 px-3 py-1.5 rounded text-white text-sm font-medium"
            style={{ backgroundColor: '#003087' }}
          >
            <Plus size={14} />
            글쓰기
          </button>
        </div>
      </div>
      <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: '#FF6600' }} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {paged.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/news/press/${item.id}`)}
            className="group relative p-5 rounded-xl border border-gray-200 hover:shadow-md hover:border-[#0066cc] transition-all cursor-pointer"
          >
            <button
              onClick={(e) => handleDelete(e, item.id)}
              className="absolute top-3 right-3 p-1 text-gray-300 hover:text-red-500 transition-colors"
              title="삭제"
            >
              <Trash2 size={14} />
            </button>
            <div className="flex items-start gap-2 mb-3 pr-6">
              <span
                className="shrink-0 px-2 py-0.5 rounded text-white text-xs font-medium"
                style={{ backgroundColor: '#0066cc' }}
              >
                {item.media || '매체'}
              </span>
            </div>
            <div className="flex items-start gap-2 mb-3">
              <Newspaper
                size={16}
                className="shrink-0 mt-0.5 text-gray-300 group-hover:text-[#0066cc] transition-colors"
              />
              <p className="text-sm font-medium text-gray-800 group-hover:text-[#003087] transition-colors leading-relaxed">
                {item.title}
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar size={12} />
              {item.date}
            </div>
          </div>
        ))}
        {paged.length === 0 && (
          <div className="col-span-2 py-20 text-center text-sm text-gray-400">
            등록된 글이 없습니다.
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
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
