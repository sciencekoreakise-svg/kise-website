'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const slides = [
  {
    id: 1,
    category: '디지털 포용',
    title: '디지털 격차 없는\n포용적 사회를 만들어갑니다',
    description:
      '취약계층의 디지털 역량 강화와 정보 접근성 향상을 위해\n지속적인 교육 및 지원 사업을 추진합니다.',
    href: '/digital/divide',
    badge: '디지털디바이드 해소',
    bg: 'linear-gradient(135deg, #003087 0%, #005db8 100%)',
    accent: '#FF6600',
    icon: '🌐',
  },
  {
    id: 2,
    category: 'SW 교육',
    title: 'SW로 미래를 채우다\nSW미래채움',
    description:
      '소프트웨어 교육 소외 지역 학생들에게 양질의 SW 교육 기회를\n제공하여 디지털 인재를 육성합니다.',
    href: '/digital/sw-future',
    badge: 'SW미래채움',
    bg: 'linear-gradient(135deg, #005db8 0%, #0066cc 100%)',
    accent: '#FF6600',
    icon: '💻',
  },
  {
    id: 3,
    category: '과학 문화',
    title: '과학의 꿈을 현실로\n사이언스트립',
    description:
      '과학기술 현장 탐방을 통해 청소년의 과학적 호기심을 자극하고\n미래 과학기술 인재를 발굴합니다.',
    href: '/digital/science-trip',
    badge: '사이언스트립',
    bg: 'linear-gradient(135deg, #004a99 0%, #003087 100%)',
    accent: '#FF6600',
    icon: '🔬',
  },
  {
    id: 4,
    category: 'ICT 인재 발굴',
    title: '대한민국 최고의 ICT 인재\nICT AWARD KOREA',
    description:
      'ICT 분야 우수 인재를 발굴하고 시상하는 국내 최고의\n정보통신기술 경진대회입니다.',
    href: '/digital/ict-award',
    badge: 'ICT AWARD KOREA',
    bg: 'linear-gradient(135deg, #001f5b 0%, #003087 100%)',
    accent: '#FF6600',
    icon: '🏆',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [playing, next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: slide.bg, minHeight: '480px', transition: 'background 0.8s ease' }}
    >
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ backgroundColor: slide.accent }}
        />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-white/30" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-white/20" />
      </div>

      {/* 슬라이드 컨텐츠 */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24 flex items-center min-h-[480px]">
        <div className="max-w-2xl">
          {/* 뱃지 */}
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 text-white"
            style={{ backgroundColor: slide.accent }}
          >
            {slide.badge}
          </span>

          {/* 카테고리 */}
          <p className="text-white/60 text-sm font-medium mb-2 uppercase tracking-widest">
            {slide.category}
          </p>

          {/* 제목 */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
            {slide.title}
          </h2>

          {/* 설명 */}
          <p className="text-white/80 text-base lg:text-lg mb-8 leading-relaxed whitespace-pre-line">
            {slide.description}
          </p>

          {/* CTA */}
          <Link
            href={slide.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ backgroundColor: slide.accent }}
          >
            자세히 보기
            <ChevronRight size={18} />
          </Link>
        </div>

        {/* 아이콘 (대형 배경 텍스트) */}
        <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 text-[140px] lg:text-[200px] opacity-10 select-none hidden md:block">
          {slide.icon}
        </div>
      </div>

      {/* 슬라이드 컨트롤 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {/* 이전 버튼 */}
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft size={18} />
        </button>

        {/* 인디케이터 */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${
                i === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40'
              }`}
              aria-label={`슬라이드 ${i + 1}`}
            />
          ))}
        </div>

        {/* 다음 버튼 */}
        <button
          onClick={next}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          aria-label="다음 슬라이드"
        >
          <ChevronRight size={18} />
        </button>

        {/* 재생/일시정지 */}
        <button
          onClick={() => setPlaying(!playing)}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          aria-label={playing ? '일시정지' : '재생'}
        >
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      {/* 슬라이드 번호 */}
      <div className="absolute top-6 right-6 text-white/50 text-sm font-mono">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </section>
  );
}
