'use client';

import { ChevronRight } from 'lucide-react';
import HeroCanvas from '@/components/HeroCanvas';

type Props = {
  title: string;
  breadcrumb: string[];
};

export default function PageBanner({ title, breadcrumb }: Props) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '40vh',
        minHeight: '240px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0B1F4A',
        overflow: 'hidden',
        color: '#FFFFFF',
        textAlign: 'center',
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
            padding: '5px 14px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '30px',
            fontSize: '0.8rem',
            marginBottom: '16px',
            animation: 'pb-fadeIn 0.8s ease forwards',
          }}
        >
          사단법인 한국정보과학진흥협회
        </div>

        {/* 페이지 타이틀 */}
        <h1
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '12px',
            animation: 'pb-fadeUp 0.8s 0.2s ease both',
            fontFamily: "'Noto Sans KR', sans-serif",
          }}
        >
          <span
            style={{
              background: 'linear-gradient(90deg, #00E5FF, #2A7DE1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </span>
        </h1>


        {/* 브레드크럼 */}
        {breadcrumb.length > 0 && (
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.6)',
              animation: 'pb-fadeUp 0.8s 0.35s ease both',
            }}
          >
            {breadcrumb.map((crumb, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {i > 0 && <ChevronRight size={14} />}
                <span style={i === breadcrumb.length - 1 ? { color: '#fff', fontWeight: 600 } : {}}>
                  {crumb}
                </span>
              </span>
            ))}
          </nav>
        )}
      </div>

      <style>{`
        @keyframes pb-fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pb-fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
