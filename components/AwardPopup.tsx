'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';

const STORAGE_KEY = 'award_popup_hidden_date';

export default function AwardPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hiddenDate = localStorage.getItem(STORAGE_KEY);
    const today = new Date().toISOString().slice(0, 10);
    if (hiddenDate !== today) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVisible(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible]);

  const close = () => setVisible(false);

  const hideToday = () => {
    const today = new Date().toISOString().slice(0, 10);
    localStorage.setItem(STORAGE_KEY, today);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={close}
    >
      <div
        className="relative bg-white rounded-[14px] overflow-hidden w-[90vw] max-w-[420px] md:w-[420px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 상단 골드 라인 */}
        <div
          className="h-1"
          style={{ background: 'linear-gradient(to right, #8B6508, #DAA520)' }}
        />

        {/* 수상 사진 */}
        <div className="relative h-[120px] md:h-[150px]">
          <Image
            src="/images/award-2026.jpg"
            alt="대통령 단체표창 수상"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <button
            onClick={close}
            className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            aria-label="닫기"
          >
            <X size={16} />
          </button>
        </div>

        {/* 텍스트 영역 */}
        <div className="px-6 pt-5 pb-4 text-center">
          {/* 뱃지 */}
          <div className="flex justify-center gap-2 mb-3">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full border"
              style={{ color: '#B8860B', borderColor: '#B8860B', backgroundColor: '#FFF9E6' }}
            >
              대통령 단체표창
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full border border-gray-300 text-gray-500 bg-gray-50">
              제39회 정보문화의 달
            </span>
          </div>

          {/* 제목 */}
          <h2 className="text-lg font-bold text-gray-900 mb-2">대통령 단체표창 수상</h2>

          {/* 설명 */}
          <p className="text-sm text-gray-500 leading-relaxed">
            디지털 포용·정보문화 확산 공로
            <br />
            창립 20주년 · 2026.06.17
          </p>
        </div>

        {/* 골드 버튼 */}
        <div className="px-6 pb-3">
          <Link
            href="/news/press/12"
            className="block w-full py-3 text-center font-semibold text-white rounded-lg text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#B8860B' }}
            onClick={close}
          >
            수상 내용 보기 →
          </Link>
        </div>

        {/* 오늘 하루 보지 않기 */}
        <div className="pb-4 text-center">
          <button
            onClick={hideToday}
            className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
          >
            오늘 하루 보지 않기
          </button>
        </div>
      </div>
    </div>
  );
}
