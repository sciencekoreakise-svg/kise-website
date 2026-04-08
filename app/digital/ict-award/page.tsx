import type { Metadata } from 'next';
import { Trophy, Medal, Star, Calendar } from 'lucide-react';

export const metadata: Metadata = { title: 'ICT AWARD KOREA' };

const categories = [
  { name: '정보통신기술 부문', desc: '네트워크, 보안, 클라우드 등 ICT 기술 혁신 성과' },
  { name: '소프트웨어 부문', desc: '국내외에서 우수성을 인정받은 SW 솔루션 및 서비스' },
  { name: '디지털 콘텐츠 부문', desc: '창의적·혁신적 디지털 콘텐츠 개발 성과' },
  { name: '디지털 포용 부문', desc: '정보 취약계층 지원 및 디지털 격차 해소 공로' },
  { name: '국제 협력 부문', desc: 'ICT 분야 국제 협력 및 해외 진출 우수 사례' },
];

export default function IctAwardPage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">ICT AWARD KOREA</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      <div
        className="rounded-xl p-6 mb-8 text-white"
        style={{ background: 'linear-gradient(135deg, #001f5b, #003087)' }}
      >
        <div className="flex items-center gap-3 mb-3">
          <Trophy size={32} className="text-yellow-400" />
          <div>
            <p className="text-sm font-semibold opacity-70 uppercase tracking-wider">
              ICT AWARD KOREA
            </p>
            <h3 className="text-xl font-bold">대한민국 최고의 ICT 인재를 발굴합니다</h3>
          </div>
        </div>
        <p className="opacity-80 leading-relaxed text-sm">
          2000년부터 매년 개최되는 ICT AWARD KOREA는 정보통신기술 분야의 우수한 성과와 인재를
          발굴·표창함으로써 국내 ICT 산업 발전에 기여하는 명실상부 국내 최고 권위의 시상식입니다.
        </p>
      </div>

      {/* 시상 부문 */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">시상 부문</h3>
      <div className="space-y-3 mb-10">
        {categories.map((cat, i) => (
          <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#003087] transition-colors">
            <div
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: i === 0 ? '#FFB800' : '#003087' }}
            >
              {i === 0 ? <Star size={16} /> : i + 1}
            </div>
            <div>
              <p className="font-semibold text-gray-800">{cat.name}</p>
              <p className="text-sm text-gray-500 mt-0.5">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 역대 주요 수상자 */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">주요 연혁</h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ backgroundColor: '#003087' }} className="text-white">
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">회차</th>
              <th className="px-4 py-3 text-left font-semibold">개최연도</th>
              <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">비고</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { n: '제15회', year: '2024년', note: '최다 참가 기록 경신' },
              { n: '제10회', year: '2019년', note: '10주년 특별 시상' },
              { n: '제5회', year: '2014년', note: '국제 부문 신설' },
              { n: '제1회', year: '2000년', note: '창설' },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 font-medium text-gray-800">{row.n}</td>
                <td className="px-4 py-3 text-gray-600">{row.year}</td>
                <td className="px-4 py-3 text-gray-600">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 일정 안내 */}
      <div className="rounded-xl p-5 border-2" style={{ borderColor: '#FFB800' }}>
        <div className="flex items-center gap-2 mb-2">
          <Calendar size={18} style={{ color: '#FFB800' }} />
          <p className="font-semibold text-gray-800">제16회 ICT AWARD KOREA 일정 (예정)</p>
        </div>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 접수 기간: 2025년 7월 ~ 9월</li>
          <li>• 심사 기간: 2025년 10월</li>
          <li>• 시상식: 2025년 11월 예정</li>
        </ul>
      </div>
    </article>
  );
}
