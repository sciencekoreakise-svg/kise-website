'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Download, Calendar, Plus, Trash2 } from 'lucide-react';

interface ArchiveItem {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
  fileName: string | null;
  fileSize: string | null;
  fileUrl: string | null;
}

const categoryColors: Record<string, string> = {
  보고서: '#003087',
  행사자료: '#0066cc',
  사업계획: '#FF6600',
  규정: '#555',
};

const PER_PAGE = 10;

export default function ArchivePage() {
  const router = useRouter();
  const [items, setItems] = useState<ArchiveItem[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('/api/archive')
      .then((r) => r.json())
      .then(setItems);
  }, []);

  const totalPages = Math.max(1, Math.ceil(items.length / PER_PAGE));
  const paged = items.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleDelete(e: React.MouseEvent, id: number) {
    e.stopPropagation();
    const pw = prompt('관리자 비밀번호를 입력하세요');
    if (!pw) return;
    fetch(`/api/archive/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': pw },
    }).then((r) => {
      if (r.ok) setItems((prev) => prev.filter((a) => a.id !== id));
      else alert('비밀번호가 틀렸습니다.');
    });
  }

  return (
    <article>
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold text-gray-900">자료실</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">총 {items.length}건</span>
          <button
            onClick={() => router.push('/news/archive/write')}
            className="flex items-center gap-1 px-3 py-1.5 rounded text-white text-sm font-medium"
            style={{ backgroundColor: '#003087' }}
          >
            <Plus size={14} />
            글쓰기
          </button>
        </div>
      </div>
      <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: '#FF6600' }} />

      <div className="space-y-3">
        {paged.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/news/archive/${item.id}`)}
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:shadow-md hover:border-[#0066cc] transition-all group cursor-pointer"
          >
            <div
              className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: categoryColors[item.category] || '#555' }}
            >
              <FileText size={18} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 group-hover:text-[#003087] transition-colors truncate">
                {item.title}
              </p>
              <div className="flex items-center gap-3 mt-1">
                <span
                  className="text-[11px] px-2 py-0.5 rounded text-white font-medium"
                  style={{ backgroundColor: categoryColors[item.category] || '#555' }}
                >
                  {item.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar size={11} />
                  {item.date}
                </span>
                {item.fileSize && (
                  <span className="text-xs text-gray-400">{item.fileSize}</span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {item.fileUrl && (
                <a
                  href={item.fileUrl}
                  download={item.fileName || true}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white transition-colors"
                  style={{ backgroundColor: '#003087' }}
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">다운로드</span>
                </a>
              )}
              <button
                onClick={(e) => handleDelete(e, item.id)}
                className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                title="삭제"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
        {paged.length === 0 && (
          <div className="py-20 text-center text-sm text-gray-400">등록된 자료가 없습니다.</div>
        )}
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
