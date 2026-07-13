'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, ArrowLeft, Pencil, Trash2, Download, FileText } from 'lucide-react';
import { renderContentWithLinks } from '@/lib/renderContent';

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

export default function ArchiveDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [item, setItem] = useState<ArchiveItem | null>(null);

  useEffect(() => {
    fetch(`/api/archive/${id}`)
      .then((r) => (r.ok ? r.json() : null))
      .then(setItem);
  }, [id]);

  function handleDelete() {
    const pw = prompt('관리자 비밀번호를 입력하세요');
    if (!pw) return;
    fetch(`/api/archive/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': pw },
    }).then((r) => {
      if (r.ok) router.push('/news/archive');
      else alert('비밀번호가 틀렸습니다.');
    });
  }

  if (!item) {
    return <div className="py-20 text-center text-gray-400">불러오는 중...</div>;
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

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100" style={{ backgroundColor: '#f8f9fb' }}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <span
                className="inline-block px-2 py-0.5 rounded text-white text-xs font-medium mb-2"
                style={{ backgroundColor: categoryColors[item.category] || '#555' }}
              >
                {item.category}
              </span>
              <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
              <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                <Calendar size={12} />
                {item.date}
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => router.push(`/news/archive/write?id=${id}`)}
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
          {renderContentWithLinks(item.content)}
        </div>

        {item.fileUrl && (
          <div className="px-6 pb-6">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div
                className="w-9 h-9 rounded flex items-center justify-center text-white shrink-0"
                style={{ backgroundColor: categoryColors[item.category] || '#555' }}
              >
                <FileText size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">{item.fileName}</p>
                {item.fileSize && (
                  <p className="text-xs text-gray-400">{item.fileSize}</p>
                )}
              </div>
              <a
                href={item.fileUrl}
                download={item.fileName || true}
                className="flex items-center gap-1.5 px-4 py-2 rounded text-white text-sm font-medium"
                style={{ backgroundColor: '#003087' }}
              >
                <Download size={14} />
                다운로드
              </a>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
