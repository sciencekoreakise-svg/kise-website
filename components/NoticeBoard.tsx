'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, FileText } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: '2024년 디지털디바이드 해소 지원사업 참여기관 모집 공고',
    date: '2024-12-10',
    isNew: true,
  },
  {
    id: 2,
    title: 'SW미래채움 2025년 교육기관 운영사 선정 결과 안내',
    date: '2024-12-05',
    isNew: true,
  },
  {
    id: 3,
    title: '한국정보과학진흥협회 2025년 정기이사회 개최 안내',
    date: '2024-11-28',
    isNew: false,
  },
  {
    id: 4,
    title: '제15회 ICT AWARD KOREA 수상자 발표',
    date: '2024-11-20',
    isNew: false,
  },
  {
    id: 5,
    title: '2024년 하반기 사이언스트립 프로그램 운영 결과 보고',
    date: '2024-11-15',
    isNew: false,
  },
];

const pressReleases = [
  {
    id: 1,
    title: 'KISE, 전국 1만 명 어르신 디지털 역량 강화 교육 완료',
    date: '2024-12-08',
    media: '디지털데일리',
    isNew: true,
  },
  {
    id: 2,
    title: '과기정통부-KISE, SW미래채움 교육 소외지역 200개교 확대 협약',
    date: '2024-12-03',
    media: '전자신문',
    isNew: true,
  },
  {
    id: 3,
    title: '사이언스트립 참여 청소년 "과학자 꿈 키웠다" 90% 만족',
    date: '2024-11-25',
    media: '연합뉴스',
    isNew: false,
  },
  {
    id: 4,
    title: 'ICT AWARD KOREA 15년, 대한민국 ICT 인재의 등용문',
    date: '2024-11-18',
    media: 'ZDNet Korea',
    isNew: false,
  },
  {
    id: 5,
    title: 'KISE 이사장 "디지털 포용, 사회 통합의 핵심 과제"',
    date: '2024-11-10',
    media: '아이뉴스24',
    isNew: false,
  },
];

type Tab = 'notice' | 'press';

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState<Tab>('notice');

  const items = activeTab === 'notice' ? notices : pressReleases;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* 섹션 제목 */}
          <div className="lg:w-48 shrink-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6600] mb-2">
              알림마당
            </p>
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              새로운
              <br />
              소식을
              <br />
              확인하세요
            </h2>
            <div className="mt-4 w-8 h-1 rounded" style={{ backgroundColor: '#003087' }} />
          </div>

          {/* 탭 + 목록 */}
          <div className="flex-1 w-full">
            {/* 탭 헤더 */}
            <div className="flex items-center justify-between mb-4 border-b border-gray-200">
              <div className="flex gap-0">
                {(
                  [
                    { key: 'notice', label: '공지사항' },
                    { key: 'press', label: '보도자료' },
                  ] as { key: Tab; label: string }[]
                ).map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
                      activeTab === tab.key
                        ? 'border-[#003087] text-[#003087]'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <Link
                href={activeTab === 'notice' ? '/news/notice' : '/news/press'}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#003087] transition-colors"
              >
                더보기 <ChevronRight size={14} />
              </Link>
            </div>

            {/* 목록 */}
            <ul className="divide-y divide-gray-100">
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={activeTab === 'notice' ? `/news/notice` : `/news/press`}
                    className="flex items-center gap-3 py-3 hover:bg-gray-50 px-2 -mx-2 rounded transition-colors group"
                  >
                    <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                      <FileText size={14} className="text-gray-300 group-hover:text-[#0066cc]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-800 truncate group-hover:text-[#003087] transition-colors">
                          {item.title}
                        </span>
                        {item.isNew && (
                          <span
                            className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded text-white"
                            style={{ backgroundColor: '#FF6600' }}
                          >
                            NEW
                          </span>
                        )}
                      </div>
                      {activeTab === 'press' && 'media' in item && (
                        <span className="text-xs text-[#0066cc]">{String(item.media)}</span>
                      )}
                    </div>
                    <div className="shrink-0 flex items-center gap-1 text-xs text-gray-400">
                      <Calendar size={12} />
                      {item.date}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
