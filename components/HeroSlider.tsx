'use client';

import HeroCanvas from '@/components/HeroCanvas';

export default function HeroSlider() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '50vh',
        minHeight: '360px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        textAlign: 'center',
        backgroundColor: '#0B1F4A',
        overflow: 'hidden',
      }}
    >
      <HeroCanvas />

      {/* 래디얼 그라데이션 오버레이 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, rgba(11, 31, 74, 0.4) 100%)',
          zIndex: 1,
        }}
      />

      {/* 콘텐츠 */}
      <div style={{ position: 'relative', zIndex: 2, padding: '0 20px' }}>
        {/* 배지 */}
        <div
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '30px',
            fontSize: '0.75rem',
            marginBottom: '24px',
            animation: 'hero2FadeIn 0.8s ease forwards',
          }}
        >
          사단법인 한국정보과학진흥협회
        </div>

        {/* 메인 타이틀 */}
        <h1
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '10px',
            animation: 'hero2FadeUp 0.8s 0.2s ease both',
            fontFamily: "'Noto Sans KR', sans-serif",
          }}
        >
          사람중심 가치,{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #00E5FF, #2A7DE1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            모두를 위한 따뜻한 SW·AI
          </span>
        </h1>

        {/* 서브 타이틀 */}
        <p
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.7rem)',
            opacity: 0.9,
            marginBottom: '40px',
            animation: 'hero2FadeUp 0.8s 0.4s ease both',
          }}
        >
          함께 성장하는 디지털 혁신
        </p>

      </div>

      {/* 스크롤 안내 */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.75rem',
          letterSpacing: '2px',
          opacity: 0.6,
          zIndex: 2,
          color: '#FFFFFF',
        }}
      >
        SCROLL ↓
      </div>

      <style>{`
        @keyframes hero2FadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero2FadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .hero2-chip:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-5px) !important;
          border-color: #00E5FF !important;
        }
      `}</style>
    </section>
  );
}

