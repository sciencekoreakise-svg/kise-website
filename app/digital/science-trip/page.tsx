import type { Metadata } from 'next';
import { FlaskConical, Telescope, Microscope, Rocket } from 'lucide-react';

export const metadata: Metadata = { title: '사이언스트립' };

const programs = [
  {
    icon: FlaskConical,
    title: '연구소 탐방',
    desc: '국가 연구소 및 기업 R&D 센터 현장 방문',
  },
  {
    icon: Telescope,
    title: '천문대 체험',
    desc: '국립 천문대에서의 별자리·우주 탐구 체험',
  },
  {
    icon: Microscope,
    title: '바이오 실험',
    desc: '생명과학 연구 현장에서의 실험 체험',
  },
  {
    icon: Rocket,
    title: '항공우주 체험',
    desc: '항공우주연구원 방문 및 로켓 원리 학습',
  },
];

export default function ScienceTripPage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">사이언스트립</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      <div
        className="rounded-xl p-6 mb-8 text-white"
        style={{ background: 'linear-gradient(135deg, #004a99, #003087)' }}
      >
        <p className="text-sm font-semibold opacity-70 mb-1 uppercase tracking-wider">
          Science Trip
        </p>
        <h3 className="text-xl font-bold mb-3">과학의 꿈을 현실로</h3>
        <p className="opacity-80 leading-relaxed text-sm">
          청소년들이 국내 최고의 과학기술 연구 현장을 직접 탐방하며 과학적 흥미와 진로를
          탐색할 수 있도록 지원하는 체험 프로그램입니다.
        </p>
      </div>

      {/* 프로그램 */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">프로그램 소개</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {programs.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white"
                style={{ backgroundColor: '#003087' }}
              >
                <Icon size={22} />
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{p.title}</p>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 운영 일정 */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">연간 운영 일정</h3>
      <div className="space-y-2 mb-8">
        {[
          { period: '상반기 (4~6월)', content: '봄 사이언스트립 (연구소·대학 탐방 중심)' },
          { period: '여름방학 (7~8월)', content: '집중 과학 캠프 (2박3일 숙박형 프로그램)' },
          { period: '하반기 (9~11월)', content: '가을 사이언스트립 (산업체·연구원 탐방)' },
        ].map((s, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 rounded-lg bg-gray-50"
          >
            <span
              className="shrink-0 px-3 py-1 rounded-full text-white text-xs font-semibold"
              style={{ backgroundColor: '#003087' }}
            >
              {s.period}
            </span>
            <span className="text-sm text-gray-700">{s.content}</span>
          </div>
        ))}
      </div>

      {/* 참가 안내 */}
      <div className="rounded-xl p-5 bg-orange-50 border border-orange-200">
        <p className="font-semibold text-orange-800 mb-2">참가 신청 안내</p>
        <p className="text-sm text-orange-700">
          사이언스트립은 초·중·고 재학생이면 누구나 신청 가능합니다. 각 프로그램별 모집 공고는
          공지사항을 통해 안내됩니다.
        </p>
      </div>
    </article>
  );
}
