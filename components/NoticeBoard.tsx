'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, FileText } from 'lucide-react';

interface NoticeItem {
  id: number;
  title: string;
  date: string;
  isNew?: boolean;
}

interface PressItem {
  id: number;
  title: string;
  date: string;
  media: string;
  isNew?: boolean;
}

const NEW_THRESHOLD_DAYS = 7;

function isNew(dateStr: string) {
  const diff = (Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24);
  return diff <= NEW_THRESHOLD_DAYS;
}

type Tab = 'notice' | 'press';

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState<Tab>('notice');
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [pressReleases, setPressReleases] = useState<PressItem[]>([]);

  useEffect(() => {
    fetch('/api/notices')
      .then((r) => r.json())
      .then((data: NoticeItem[]) =>
        setNotices(data.slice(0, 5).map((n) => ({ ...n, isNew: isNew(n.date) })))
      )
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch('/api/press')
      .then((r) => r.json())
      .then((data: PressItem[]) =>
        setPressReleases(data.slice(0, 5).map((p) => ({ ...p, isNew: isNew(p.date) })))
      )
      .catch(() => {});
  }, []);

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
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              <span className="lg:hidden">새로운 소식을 확인하세요</span>
              <span className="hidden lg:block">
                새로운
                <br />
                소식을
                <br />
                확인하세요
              </span>
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
