import type { Metadata } from 'next';
import { Users, BookOpen, Monitor, Heart } from 'lucide-react';

export const metadata: Metadata = { title: '디지털디바이드' };

const targets = [
  { icon: Users, label: '어르신', desc: '65세 이상 고령층 디지털 기기 활용 교육' },
  { icon: Heart, label: '장애인', desc: '접근성 기술 및 보조기기 활용 지원' },
  { icon: BookOpen, label: '저소득층', desc: '정보 접근 기회 확대 및 PC 보급 지원' },
  { icon: Monitor, label: '다문화 가정', desc: '언어 지원 포함 디지털 교육 제공' },
];

export default function DividePage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">디지털디바이드 해소</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      {/* 사업 소개 */}
      <div
        className="rounded-xl p-6 mb-8 text-white"
        style={{ background: 'linear-gradient(135deg, #003087, #0066cc)' }}
      >
        <p className="text-sm font-semibold opacity-70 mb-1 uppercase tracking-wider">
          Digital Divide Solution
        </p>
        <h3 className="text-xl font-bold mb-3">모두가 함께하는 디지털 세상</h3>
        <p className="opacity-80 leading-relaxed text-sm">
          정보 소외계층의 디지털 역량 강화와 정보 접근성 향상을 위해 체계적인 교육 및 지원
          사업을 추진합니다. 누구도 디지털 전환의 흐름에서 소외되지 않도록, KISE가 함께합니다.
        </p>
      </div>

      {/* 지원 대상 */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">지원 대상</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {targets.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.label}
              className="p-5 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white mx-auto mb-3"
                style={{ backgroundColor: '#003087' }}
              >
                <Icon size={22} />
              </div>
              <p className="font-bold text-gray-800 mb-1">{t.label}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
            </div>
          );
        })}
      </div>

      {/* 주요 사업 내용 */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">주요 사업 내용</h3>
      <div className="space-y-3">
        {[
          {
            title: '찾아가는 디지털 교육',
            desc: '복지관, 경로당, 주민센터 등 생활 밀착형 공간에서 실시하는 맞춤형 디지털 교육',
          },
          {
            title: '디지털 역량 강화 교육',
            desc: '스마트폰, 태블릿, 키오스크 등 일상 디지털 기기 활용 능력 향상 프로그램',
          },
          {
            title: 'AI·빅데이터 기초 소양 교육',
            desc: '일반 국민 대상 인공지능 이해와 활용을 위한 기초 교육 과정',
          },
          {
            title: '디지털 안전 교육',
            desc: '개인정보 보호, 보이스피싱 예방 등 온라인 피해 예방 교육',
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
            <div
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
              style={{ backgroundColor: '#FF6600' }}
            >
              {i + 1}
            </div>
            <div>
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
