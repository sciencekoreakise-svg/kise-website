'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type EventType = 'highlight' | 'award';

interface HistoryEvent {
  month: string;
  text: string;
  type?: EventType;
}

interface YearEntry {
  year: number;
  events: HistoryEvent[];
}

const data: YearEntry[] = [
  { year: 2003, events: [
    { month: '05', text: '한국정보과학진흥협회 창립총회', type: 'highlight' },
    { month: '06', text: '제1회 안양시사이버축제 경진대회·스타크래프트 대회 부문 운영' },
  ]},
  { year: 2004, events: [
    { month: '06', text: '제2회 안양시사이버축제 경진대회 부문 운영' },
    { month: '06', text: '제1회 전국정보과학올림피아드 개최' },
  ]},
  { year: 2005, events: [
    { month: '05', text: '제3회 안양시사이버축제 경진대회 부문 운영' },
    { month: '06', text: '제2회 전국정보과학올림피아드 개최' },
  ]},
  { year: 2006, events: [
    { month: '05', text: '제4회 안양시사이버축제 경진대회 부문 운영' },
    { month: '05', text: '과학기술부 장관으로부터 법인설립허가 및 법인설립', type: 'highlight' },
    { month: '06', text: '제3회 전국정보과학올림피아드 개최' },
    { month: '12', text: '청소년 기초과학캠프 운영' },
  ]},
  { year: 2007, events: [
    { month: '05', text: '제5회 안양시사이버축제 경진대회 부문 운영' },
    { month: '06', text: '제4회 전국정보과학올림피아드 개최' },
    { month: '12', text: '청소년 기초과학캠프 운영' },
  ]},
  { year: 2008, events: [
    { month: '05', text: '제6회 안양시사이버축제 경진대회 부문 운영' },
    { month: '06', text: '제5회 전국정보과학올림피아드 개최' },
    { month: '07', text: '제1회 전국청소년과학경시대회 개최' },
    { month: '12', text: '청소년 기초과학캠프 운영' },
  ]},
  { year: 2009, events: [
    { month: '05', text: '제7회 안양시사이버축제 경진대회 부문 운영' },
    { month: '06', text: '제6회 전국정보과학올림피아드 개최' },
    { month: '07', text: '제2회 전국청소년과학경시대회 개최' },
    { month: '12', text: '청소년 기초과학캠프 운영' },
  ]},
  { year: 2010, events: [
    { month: '05', text: '제8회 안양시사이버축제 경진대회 부문 운영' },
    { month: '06', text: '제7회 전국정보과학올림피아드 개최' },
    { month: '07', text: '제3회 전국청소년과학경시대회 개최' },
    { month: '12', text: '청소년 기초과학캠프 운영' },
  ]},
  { year: 2011, events: [
    { month: '05', text: '제9회 안양시사이버축제 경진대회 부문 운영' },
    { month: '06', text: '제8회 전국정보과학올림피아드 개최' },
    { month: '07', text: '제4회 전국청소년과학경시대회 개최' },
    { month: '12', text: '청소년 기초과학캠프 운영' },
  ]},
  { year: 2012, events: [
    { month: '03', text: '여성가족부 경력단절여성 IT 직업훈련 실시' },
    { month: '05', text: '제10회 안양시사이버축제 경진대회 부문 운영' },
    { month: '06', text: '제9회 전국정보과학올림피아드 개최' },
    { month: '07', text: '제5회 전국청소년과학경시대회 개최' },
    { month: '08', text: '수도권 서남부 대학 업무협약 체결' },
    { month: '12', text: '생활과학능력평가원 설립 (CADTC, SGQ 검정)', type: 'highlight' },
  ]},
  { year: 2013, events: [
    { month: '01', text: 'KISE CEO 포럼 운영 (회원사 148개사)' },
    { month: '02', text: '고용노동부 청년취업아카데미 운영 (5개대학 8개과정)' },
    { month: '03', text: '경기도 결혼이민자 정보화 교육 운영' },
    { month: '06', text: '제10회 전국정보과학올림피아드 개최' },
    { month: '07', text: '제6회 전국청소년과학경시대회 개최' },
    { month: '12', text: 'KISE 포럼 및 디지털디바이드 운동 (정보소외계층 디지털기기 보급)' },
  ]},
  { year: 2014, events: [
    { month: '01', text: '전국 24개 대학 업무협약 체결', type: 'highlight' },
    { month: '02', text: '고용노동부 청년취업아카데미 운영 (6개대학 9개과정)' },
    { month: '03', text: '경기도 결혼이민자 정보화 교육 운영' },
    { month: '04', text: '여성가족부 경력단절여성 IT 직업훈련 실시' },
    { month: '06', text: '제11회 전국정보과학올림피아드 개최' },
    { month: '07', text: '제7회 전국청소년과학경시대회 개최' },
    { month: '08', text: '안양시 SW 전문인력양성사업 교육 운영' },
    { month: '12', text: 'KISE 포럼 및 디지털디바이드 운동 (정보소외계층 디지털기기 보급)' },
  ]},
  { year: 2015, events: [
    { month: '01', text: '빅데이터, 3D프린팅 자문단 구성 및 자격검정' },
    { month: '02', text: '고용노동부 청년취업아카데미 운영 (6개대학 11개과정)' },
    { month: '03', text: '경기도 결혼이민자 정보화 교육 운영' },
    { month: '05', text: '한국클라우드산업협회 전문인력양성 업무협약' },
    { month: '06', text: '제12회 전국정보과학올림피아드 개최' },
    { month: '06', text: '제28회 정보문화의 달 국무총리 기관 표창', type: 'award' },
    { month: '07', text: '제8회 전국청소년과학경시대회 개최' },
    { month: '08', text: '안양창조융합아카데미 교육 운영' },
    { month: '12', text: 'KISE 포럼 및 디지털디바이드 운동 (정보소외계층 디지털기기 보급)' },
  ]},
  { year: 2016, events: [
    { month: '02', text: '고용노동부 청년취업아카데미 운영 (6개대학 10개과정)' },
    { month: '06', text: '제13회 전국정보과학올림피아드 개최' },
    { month: '07', text: '제9회 전국청소년과학경시대회 개최' },
    { month: '12', text: 'KISE 포럼 및 디지털디바이드 운동 (정보소외계층 디지털기기 보급)' },
  ]},
  { year: 2017, events: [
    { month: '02', text: '고용노동부 청년취업아카데미 운영 (7개대학 9개과정)' },
    { month: '03', text: '평생교육시설 KISE인재개발원 설립', type: 'highlight' },
    { month: '06', text: '제30회 정보문화의 달 대통령 표창 수상', type: 'award' },
    { month: '06', text: '제14회 ICT어워드코리아(ICT Award KOREA) 개최', type: 'award' },
    { month: '07', text: '제10회 전국청소년과학경시대회 개최' },
    { month: '09', text: '과학기술정보통신부 이공계 전문기술 연수 운영' },
    { month: '11', text: '중소기업기술보진흥원 스마트제조혁신단 클라우드기반 솔루션개발사업 DWG-365 구축' },
    { month: '12', text: 'ICT Convergence 정보기술융합대상 (정보소외계층 디지털기기 보급)' },
  ]},
  { year: 2018, events: [
    { month: '02', text: '고용노동부 청년취업아카데미 운영 (7개대학 10개과정)' },
    { month: '05', text: 'VR 콘텐츠 전문인력 양성교육 운영' },
    { month: '06', text: '제15회 ICT어워드코리아(ICT Award KOREA) 개최', type: 'award' },
    { month: '10', text: '제11회 Si-Tech Innovation Award 개최', type: 'award' },
    { month: '12', text: 'ICT Convergence 정보기술융합대상 (정보소외계층 디지털기기 보급)' },
  ]},
  { year: 2019, events: [
    { month: '02', text: '고용노동부 청년취업아카데미 운영 (5개대학 9개과정)' },
    { month: '03', text: '과학기술정보통신부 이공계 전문기술 연수 운영기관 선정', type: 'highlight' },
    { month: '06', text: '제16회 ICT어워드코리아(ICT Award KOREA) 개최', type: 'award' },
    { month: '10', text: '제12회 Si-Tech Innovation Award 개최', type: 'award' },
    { month: '12', text: 'ICT Convergence 정보기술융합대상 (정보소외계층 디지털기기 보급)' },
  ]},
  { year: 2020, events: [
    { month: '02', text: '고용노동부 청년취업아카데미 운영 (6개대학 10개과정)' },
    { month: '03', text: '고양 맞춤형 일자리학교 운영기관 선정' },
    { month: '06', text: '2020 ICT어워드코리아(ICT Award KOREA) 개최', type: 'award' },
    { month: '10', text: '2020 Si-Tech Innovation Award 개최', type: 'award' },
    { month: '12', text: 'ICT Convergence 정보기술융합대상 (정보소외계층 디지털기기 보급)' },
  ]},
  { year: 2021, events: [
    { month: '02', text: 'ISO국제인증 교육센터 및 인증원 설립', type: 'highlight' },
    { month: '05', text: '안양시 AI 기반 빅데이터, 머신비전 ICT융합 전문인력양성 운영' },
    { month: '06', text: '2021 ICT어워드코리아(ICT Award KOREA) 개최', type: 'award' },
    { month: '08', text: '중소벤처기업부지원 비대면 화상회의실(중규모) 구축' },
    { month: '10', text: '2021 Si-Tech Innovation Award 개최', type: 'award' },
    { month: '12', text: 'ICT Convergence 정보기술융합대상 (정보소외계층 디지털기기 보급)' },
  ]},
  { year: 2022, events: [
    { month: '05', text: '디지털뉴딜 전문인력양성 운영' },
    { month: '06', text: '2022 ICT어워드코리아(ICT Award KOREA) 개최', type: 'award' },
    { month: '07', text: '경기도교육청 창의융합체험학습 운영기관 선정', type: 'highlight' },
    { month: '08', text: '산학협력 디지털콘텐츠 제작 사업 운영' },
    { month: '09', text: '2022 Si-Tech Innovation Award 개최', type: 'award' },
    { month: '10', text: '소공인 스마트 마케팅 교육 사업 운영' },
    { month: '12', text: 'ICT Convergence 정보기술융합대상 (정보소외계층 디지털기기 보급)' },
  ]},
  { year: 2023, events: [
    { month: '01', text: '교육부 디지털새싹 운영기관 선정 운영 (경기, 강원, 충북, 충남)', type: 'highlight' },
    { month: '06', text: '2023 ICT어워드코리아(ICT Award KOREA) 개최', type: 'award' },
    { month: '08', text: '안양시 인재육성재단 드림챌린저 운영' },
    { month: '10', text: '2023 Si-Tech Innovation Award 개최', type: 'award' },
    { month: '10', text: 'DSC모빌리티 창의과학 신기술 경진대회 운영' },
    { month: '11', text: '금융산업공익재단 디지털소외계층 디지털교육 운영기관 선정', type: 'highlight' },
    { month: '12', text: 'ICT Convergence 정보기술융합대상 (정보소외계층 디지털기기 보급)' },
  ]},
  { year: 2024, events: [
    { month: '02', text: 'DSC 수요기반 찾아가는 모빌리티 캠프 운영' },
    { month: '03', text: '학교밖 청소년 센터 "꿈드림" 지원 업무협약 체결' },
    { month: '04', text: '경기도평생교육진흥원 찾아가는 배움교실 플랫폼 운영' },
    { month: '06', text: '4차년도 모빌리티 창의과학 신기술 경진대회 운영' },
    { month: '06', text: '2024 ICT어워드코리아(ICT Award KOREA) 개최', type: 'award' },
    { month: '07', text: '평택시 고등학교 데이터 활용 아이디어톤 대회 운영' },
    { month: '08', text: '안양시 인재육성재단 창의융합인재양성 AI 교육 운영' },
    { month: '09', text: '2024 Si-Tech Innovation Award 개최', type: 'award' },
    { month: '12', text: '초록우산 어린이재단 디지털리터러시 교육 지원 운영' },
    { month: '12', text: 'ICT Convergence 정보기술융합대상 (정보소외계층 디지털기기 보급)' },
  ]},
  { year: 2025, events: [
    { month: '01', text: '과학기술정보통신부 경기SW미래채움 참여기관 선정', type: 'highlight' },
    { month: '02', text: '금융산업공익재단 디지털소외계층 디지털교육 운영기관' },
    { month: '05', text: '세이브더칠드런 꿈을키우는디지털세상 교육 운영' },
    { month: '06', text: '2025 ICT어워드코리아(ICT Award KOREA) 개최', type: 'award' },
    { month: '07', text: '평택시 고등학교 데이터 활용 아이디어톤 대회 운영' },
    { month: '08', text: '초록우산 어린이재단 AI&디지털리터러시 교육 지원 운영' },
    { month: '09', text: '2025 Si-Tech Innovation Award 개최', type: 'award' },
    { month: '11', text: 'RISE와 함께하는 모빌리티 로봇 교육캠프 운영' },
  ]},
  { year: 2026, events: [
    { month: '01', text: '금융산업공익재단 디지털소외계층 디지털교육 운영기관' },
    { month: '01', text: '과학기술정보통신부 경기SW미래채움 참여기관', type: 'highlight' },
    { month: '02', text: '2026년 화성 다가치 학교맞춤형 찾아가는 AI교실 운영기관' },
  ]},
];

// 이벤트 행 컴포넌트
function EventRow({ month, text, type }: HistoryEvent) {
  const isHighlight = type === 'highlight';
  const isAward = type === 'award';
  const monthBg = isHighlight ? '#003087' : isAward ? '#FF6600' : '#eef3ff';
  const monthColor = isHighlight || isAward ? 'white' : '#0066CC';
  const textColor = isHighlight ? '#003087' : isAward ? '#c45200' : '#374151';
  const textWeight: React.CSSProperties['fontWeight'] = isHighlight ? 600 : 400;

  return (
    <div className="flex items-start gap-2 py-2 px-2 rounded-lg border-l-2 border-transparent">
      <span
        className="shrink-0 text-xs font-bold rounded px-1.5 py-0.5 min-w-[40px] text-center"
        style={{ background: monthBg, color: monthColor }}
      >
        {month}월
      </span>
      <span className="text-sm leading-relaxed" style={{ color: textColor, fontWeight: textWeight }}>
        {text}
      </span>
    </div>
  );
}

export default function HistoryTimeline() {
  const sorted = [...data].reverse();
  // 최근 3개 연도는 기본 펼침
  const recentYears = new Set(sorted.slice(0, 3).map((d) => d.year));
  const [openYears, setOpenYears] = useState<Set<number>>(recentYears);

  const toggle = (year: number) => {
    setOpenYears((prev) => {
      const next = new Set(prev);
      next.has(year) ? next.delete(year) : next.add(year);
      return next;
    });
  };

  return (
    <>
      {/* ── 모바일: 아코디언 레이아웃 ── */}
      <div className="md:hidden space-y-1">
        {sorted.map(({ year, events }) => {
          const isOpen = openYears.has(year);
          const highlightCount = events.filter((e) => e.type === 'highlight' || e.type === 'award').length;

          return (
            <div key={year} className="border border-gray-200 rounded-xl overflow-hidden">
              {/* 연도 헤더 (탭) */}
              <button
                onClick={() => toggle(year)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
                style={{ backgroundColor: isOpen ? '#003087' : '#f8fafc' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-base font-bold"
                    style={{ color: isOpen ? 'white' : '#003087' }}
                  >
                    {year}
                  </span>
                  {/* 주요 이벤트 미리보기 도트 */}
                  {!isOpen && highlightCount > 0 && (
                    <span className="flex gap-1">
                      {Array.from({ length: Math.min(highlightCount, 3) }).map((_, i) => (
                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
                      ))}
                    </span>
                  )}
                  {!isOpen && (
                    <span className="text-xs text-gray-400">{events.length}개 항목</span>
                  )}
                </div>
                <ChevronDown
                  size={16}
                  className="shrink-0 transition-transform duration-200"
                  style={{
                    color: isOpen ? 'white' : '#003087',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              {/* 이벤트 목록 */}
              {isOpen && (
                <div className="divide-y divide-gray-50 px-2 py-1">
                  {events.map((ev, i) => (
                    <EventRow key={i} {...ev} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── 데스크탑: 기존 타임라인 ── */}
      <div className="hidden md:block" style={{ maxWidth: 900, paddingBottom: '5rem' }}>
        {sorted.map(({ year, events }, groupIdx) => (
          <div
            key={year}
            className="year-group"
            style={{ display: 'flex', gap: 0, marginBottom: 0, position: 'relative' }}
            onMouseEnter={(e) => {
              const badge = e.currentTarget.querySelector<HTMLElement>('.year-badge');
              const dot = e.currentTarget.querySelector<HTMLElement>('.line-dot');
              if (badge) { badge.style.background = '#FF6600'; badge.style.transform = 'scale(1.05)'; }
              if (dot) { dot.style.background = '#FF6600'; dot.style.borderColor = '#FF6600'; dot.style.transform = 'scale(1.3)'; }
            }}
            onMouseLeave={(e) => {
              const badge = e.currentTarget.querySelector<HTMLElement>('.year-badge');
              const dot = e.currentTarget.querySelector<HTMLElement>('.line-dot');
              if (badge) { badge.style.background = '#003087'; badge.style.transform = ''; }
              if (dot) { dot.style.background = 'white'; dot.style.borderColor = '#003087'; dot.style.transform = ''; }
            }}
          >
            {/* 연도 컬럼 */}
            <div style={{ width: 110, flexShrink: 0, paddingTop: '1.6rem' }}>
              <div
                className="year-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 88,
                  height: 36,
                  background: '#003087',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  borderRadius: 8,
                  letterSpacing: '0.05em',
                  position: 'relative',
                  zIndex: 2,
                  transition: 'background 0.2s, transform 0.2s',
                }}
              >
                {year}
              </div>
            </div>

            {/* 세로선 컬럼 */}
            <div style={{ width: 32, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1.6rem' }}>
              <div
                className="line-dot"
                style={{
                  width: 14, height: 14,
                  borderRadius: '50%',
                  background: 'white',
                  border: '3px solid #003087',
                  flexShrink: 0,
                  marginTop: 11,
                  zIndex: 2,
                  transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
                }}
              />
              {groupIdx < sorted.length - 1 && (
                <div style={{ width: 2, flex: 1, background: '#d1dae8', marginTop: 4, minHeight: 20 }} />
              )}
            </div>

            {/* 이벤트 컬럼 */}
            <div style={{ flex: 1, padding: '1.4rem 0 0.5rem 1.2rem' }}>
              {events.map(({ month, text, type }, i) => {
                const isHighlight = type === 'highlight';
                const isAward = type === 'award';
                const monthBg = isHighlight ? '#003087' : isAward ? '#FF6600' : '#eef3ff';
                const monthColor = isHighlight || isAward ? 'white' : '#0066CC';
                const textColor = isHighlight ? '#003087' : isAward ? '#c45200' : '#374151';
                const textWeight: React.CSSProperties['fontWeight'] = isHighlight ? 600 : 400;

                return (
                  <div
                    key={i}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.8rem',
                      padding: '0.55rem 1rem', borderRadius: 8, marginBottom: '0.3rem',
                      cursor: 'default',
                      transition: 'background 0.2s, transform 0.2s, border-left-color 0.2s, box-shadow 0.2s',
                      borderLeft: '3px solid transparent',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.background = 'white';
                      el.style.borderLeftColor = '#003087';
                      el.style.transform = 'translateX(4px)';
                      el.style.boxShadow = '0 2px 12px rgba(0,48,135,0.08)';
                      const mEl = el.querySelector<HTMLElement>('.ev-month');
                      const tEl = el.querySelector<HTMLElement>('.ev-text');
                      if (mEl) { mEl.style.background = '#003087'; mEl.style.color = 'white'; }
                      if (tEl) { tEl.style.color = '#003087'; tEl.style.fontWeight = '500'; }
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = '';
                      el.style.borderLeftColor = 'transparent';
                      el.style.transform = '';
                      el.style.boxShadow = '';
                      const mEl = el.querySelector<HTMLElement>('.ev-month');
                      const tEl = el.querySelector<HTMLElement>('.ev-text');
                      if (mEl) { mEl.style.background = monthBg; mEl.style.color = monthColor; }
                      if (tEl) { tEl.style.color = textColor; tEl.style.fontWeight = String(textWeight); }
                    }}
                  >
                    <span
                      className="ev-month"
                      style={{
                        fontSize: '0.72rem', fontWeight: 700, color: monthColor,
                        background: monthBg, padding: '0.2rem 0.5rem', borderRadius: 4,
                        flexShrink: 0, minWidth: 46, textAlign: 'center',
                        transition: 'background 0.2s, color 0.2s',
                      }}
                    >
                      {month}월
                    </span>
                    <span
                      className="ev-text"
                      style={{
                        fontSize: '0.9rem', color: textColor,
                        lineHeight: 1.5, fontWeight: textWeight,
                        transition: 'color 0.2s',
                      }}
                    >
                      {text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
