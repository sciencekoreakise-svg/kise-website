'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, ArrowLeft, Pencil, Trash2 } from 'lucide-react';

interface PressItem {
  id: number;
  title: string;
  content: string;
  media: string;
  date: string;
}

export default function PressDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [item, setItem] = useState<PressItem | null>(null);

  useEffect(() => {
    fetch(`/api/press/${id}`)
      .then((r) => (r.ok ? r.json() : null))
      .then(setItem);
  }, [id]);

  function handleDelete() {
    const pw = prompt('관리자 비밀번호를 입력하세요');
    if (!pw) return;
    fetch(`/api/press/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': pw },
    }).then((r) => {
      if (r.ok) router.push('/news/press');
      else alert('비밀번호가 틀렸습니다.');
    });
  }

  if (!item) {
    return <div className="py-20 text-center text-gray-400">불러오는 중...</div>;
  }

  return (
    <article>
      <button
        onClick={() => router.push('/news/press')}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#003087] mb-6 transition-colors"
      >
        <ArrowLeft size={14} />
        목록으로
      </button>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100" style={{ backgroundColor: '#f8f9fb' }}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <span
                className="inline-block px-2 py-0.5 rounded text-white text-xs font-medium mb-2"
                style={{ backgroundColor: '#0066cc' }}
              >
                {item.media}
              </span>
              <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
              <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                <Calendar size={12} />
                {item.date}
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => router.push(`/news/press/write?id=${id}`)}
                className="flex items-center gap-1 px-3 py-1.5 rounded border border-gray-300 text-gray-600 text-sm hover:border-[#003087] hover:text-[#003087] transition-colors"
              >
                <Pencil size={13} />
                수정
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center gap-1 px-3 py-1.5 rounded border border-red-200 text-red-500 text-sm hover:bg-red-50 transition-colors"
              >
                <Trash2 size={13} />
                삭제
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 py-6 min-h-40 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
          {item.content}
        </div>
      </div>
    </article>
  );
}
