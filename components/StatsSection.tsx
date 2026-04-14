'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: 500000,
    suffix: '명+',
    label: '교육 수혜자',
    desc: '디지털 교육 프로그램 누적 수혜자',
    color: '#2A7DE1',
    icon: '🎓',
  },
  {
    value: 120000,
    suffix: '명+',
    label: 'ICT 행사 참가자',
    desc: 'ICT AWARD 등 행사 누적 참가자',
    color: '#00B4D8',
    icon: '🏆',
  },
  {
    value: 350,
    suffix: '개+',
    label: '기업 네트워크',
    desc: '산학연 협력 파트너 기업 및 기관',
    color: '#0077B6',
    icon: '🤝',
  },
  {
    value: 17,
    suffix: '개',
    label: '디지털 교육 지역',
    desc: '전국 광역시·도 교육 거점 운영',
    color: '#023E8A',
    icon: '📍',
  },
];

function useCountUp(target: number, duration = 600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, started }: { stat: typeof stats[0]; started: boolean }) {
  const count = useCountUp(stat.value, 2000, started);

  const display =
    stat.value >= 10000
      ? (count / 10000).toFixed(count >= stat.value ? 1 : 1) + '만'
      : count.toLocaleString();

  return (
    <div
      className="group relative bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 overflow-hidden"
    >
      {/* 배경 글로우 */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl"
        style={{ background: stat.color }}
      />

      {/* 아이콘 */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-4"
        style={{ background: `${stat.color}15` }}
      >
        {stat.icon}
      </div>

      {/* 숫자 */}
      <div
        className="text-3xl md:text-4xl font-black mb-1 tabular-nums"
        style={{ color: stat.color }}
      >
        {display}
        <span className="text-xl md:text-2xl font-bold">{stat.suffix}</span>
      </div>

      {/* 라벨 */}
      <div className="text-base font-bold text-gray-900 mb-2">{stat.label}</div>

      {/* 설명 */}
      <div className="text-xs text-gray-400 leading-relaxed">{stat.desc}</div>

      {/* 하단 컬러 바 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
        style={{ background: stat.color }}
      />
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); io.disconnect(); } },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6600] mb-2">
            Our Impact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">협회 성과</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            설립 이래 꾸준히 쌓아온 한국정보과학진흥협회의 디지털 혁신 성과입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
