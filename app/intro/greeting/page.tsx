'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ExternalLink, Newspaper, Plus, Pencil, Trash2 } from 'lucide-react';

interface ContributionItem {
  id: number;
  title: string;
  media: string;
  date: string;
  url: string;
}

export default function GreetingPage() {
  const router = useRouter();
  const [items, setItems] = useState<ContributionItem[]>([]);

  useEffect(() => {
    fetch('/api/contributions')
      .then((r) => r.json())
      .then(setItems);
  }, []);

  function handleDelete(id: number) {
    const pw = prompt('관리자 비밀번호를 입력하세요');
    if (!pw) return;
    fetch(`/api/contributions/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': pw },
    }).then((r) => {
      if (r.ok) setItems((prev) => prev.filter((p) => p.id !== id));
      else alert('비밀번호가 틀렸습니다.');
    });
  }

  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">인사말</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-5">
        <p>
          안녕하십니까. 사단법인 한국정보과학진흥협회 이사장 박승진입니다.
        </p>
        <p>
          디지털과 인공지능 기술이 사회 전반을 변화시키는 시대에 기술의 발전은 모두에게 기회가 되어야 합니다.
        </p>
        <p>
          한국정보과학진흥협회는 <strong>사람중심 가치, 모두를 위한 AI, 함께 성장하는 디지털 혁신</strong>이라는 비전을 바탕으로 미래 인재 양성, ICT 산업 생태계 확산, 그리고 디지털 포용사회 실현을 위해 다양한 교육·공익 사업을 추진하고 있습니다.
        </p>
        <p>
          청소년 과학기술 인재 발굴, AI·디지털 역량 교육, 산업과 교육을 연결하는 혁신 플랫폼 구축, 그리고 디지털 소외계층 지원을 통해 누구나 기술의 혜택을 누리는 사회를 만들어가겠습니다.
        </p>
        <p>
          여러분과 함께 미래의 디지털 가치를 만들어 가겠습니다. 감사합니다.
        </p>
        <p className="font-semibold text-gray-900">
          사단법인 한국정보과학진흥협회 이사장 박승진
        </p>
      </div>

      {/* 이사장 기고문 */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 rounded" style={{ backgroundColor: '#FF6600' }} />
            <h3 className="text-base font-bold text-gray-900">이사장 기고문</h3>
          </div>
          <button
            onClick={() => router.push('/intro/greeting/write')}
            className="flex items-center gap-1 px-3 py-1.5 rounded text-white text-sm font-medium"
            style={{ backgroundColor: '#003087' }}
          >
            <Plus size={14} />
            글 등록
          </button>
        </div>

        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="group flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
              {/* 아이콘 */}
              <div
                className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#eef3ff' }}
              >
                <Newspaper size={20} style={{ color: '#003087' }} />
              </div>

              {/* 내용 */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-0"
              >
                <div className="flex items-center gap-2 mb-1">
                  {item.media && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded text-white" style={{ backgroundColor: '#003087' }}>
                      {item.media}
                    </span>
                  )}
                  <span className="text-xs text-gray-400">{item.date.replace(/-/g, '.')}</span>
                </div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">
                  {item.title}
                </p>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                  {new URL(item.url).hostname} <ExternalLink size={11} />
                </p>
              </a>

              {/* 수정/삭제 버튼 */}
              <div className="shrink-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => router.push(`/intro/greeting/write?id=${item.id}`)}
                  className="w-7 h-7 rounded flex items-center justify-center text-gray-400 hover:text-[#003087] hover:bg-blue-50 transition-colors"
                  title="수정"
                >
                  <Pencil size={13} />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-7 h-7 rounded flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                  title="삭제"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          ))}

          {items.length === 0 && (
            <div className="py-10 text-center text-sm text-gray-400">
              등록된 기고문이 없습니다.
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
