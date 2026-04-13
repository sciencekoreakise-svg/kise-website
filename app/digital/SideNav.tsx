'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 's1', label: 'ICT AWARD KOREA' },
  { id: 's2', label: '과학기술혁신대상' },
  { id: 's3', label: 'SW미래채움' },
  { id: 's4', label: '디지털포용사업' },
  { id: 's5', label: '찾아가는 배움교실' },
  { id: 's6', label: 'AI 모빌리티 캠프' },
  { id: 's7', label: '모빌리티 경진대회' },
  { id: 's8', label: '디지털새싹 캠프' },
  { id: 's9', label: '청년취업아카데미' },
];

export default function SideNav() {
  const [active, setActive] = useState('s1');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.3 },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-[0.6rem] z-[100] hidden lg:flex"
      aria-label="섹션 네비게이션"
    >
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          aria-label={label}
          data-label={label}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative flex items-center justify-center w-7 h-7 bg-transparent border-none cursor-pointer p-0"
        >
          <span
            className="block rounded-full border transition-all duration-300"
            style={
              active === id
                ? { width: 8, height: 8, background: '#4f8ef7', borderColor: '#4f8ef7', boxShadow: '0 0 10px #4f8ef7' }
                : { width: 8, height: 8, background: 'transparent', borderColor: 'rgba(255,255,255,0.3)' }
            }
          />
          <span className="absolute right-[22px] top-1/2 -translate-y-1/2 whitespace-nowrap text-[0.72rem] bg-[#16161f] text-[#e5e5f0] px-3 py-1.5 rounded border border-white/10 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}
