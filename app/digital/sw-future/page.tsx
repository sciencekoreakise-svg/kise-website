import type { Metadata } from 'next';
import { Code2, School, MapPin, Star } from 'lucide-react';

export const metadata: Metadata = { title: 'SW미래채움' };

export default function SwFuturePage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">SW미래채움</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      <div
        className="rounded-xl p-6 mb-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0055aa, #0077dd)' }}
      >
        <p className="text-sm font-semibold opacity-70 mb-1 uppercase tracking-wider">
          SW Future Fill
        </p>
        <h3 className="text-xl font-bold mb-3">SW로 미래를 채우다</h3>
        <p className="opacity-80 leading-relaxed text-sm">
          소프트웨어 교육 소외 지역의 초·중·고 학생들에게 전문 강사가 찾아가는 SW 교육을
          제공합니다. 코딩 교육부터 AI 활용까지, 미래 디지털 인재 양성의 씨앗을 뿌립니다.
        </p>
      </div>

      {/* 핵심 지표 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { icon: School, label: '참여 학교', value: '200+개교' },
          { icon: Code2, label: '교육 학생', value: '5만+명' },
          { icon: MapPin, label: '운영 지역', value: '17개 시도' },
          { icon: Star, label: '만족도', value: '95%' },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="p-4 rounded-xl border border-gray-200 text-center"
            >
              <Icon size={24} className="mx-auto mb-2" style={{ color: '#0055aa' }} />
              <p className="text-xl font-bold" style={{ color: '#003087' }}>
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* 교육 커리큘럼 */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">교육 커리큘럼</h3>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ backgroundColor: '#003087' }} className="text-white">
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">대상</th>
              <th className="px-4 py-3 text-left font-semibold">교육 내용</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">교육 시간</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { target: '초등학교', content: '언플러그드 활동, 스크래치 기초 코딩', hours: '16시간' },
              { target: '중학교', content: '파이썬 기초, 앱 인벤터, AI 기초', hours: '24시간' },
              { target: '고등학교', content: '데이터 분석, 머신러닝 기초, 프로젝트', hours: '32시간' },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 font-medium text-gray-800">{row.target}</td>
                <td className="px-4 py-3 text-gray-600">{row.content}</td>
                <td className="px-4 py-3 text-gray-600">{row.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 신청 안내 */}
      <div className="rounded-xl border-2 p-6" style={{ borderColor: '#0066cc' }}>
        <h3 className="font-bold text-gray-800 mb-3">참여 신청 안내</h3>
        <p className="text-sm text-gray-600 mb-4">
          SW미래채움 사업은 매년 상반기(3월)에 참여 학교를 모집합니다. 교육 소외 지역
          (농어촌·도서·벽지) 학교를 우선 선정합니다.
        </p>
        <a
          href="mailto:swfuture@kise.or.kr"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-colors hover:opacity-90"
          style={{ backgroundColor: '#0066cc' }}
        >
          참여 문의하기
        </a>
      </div>
    </article>
  );
}
