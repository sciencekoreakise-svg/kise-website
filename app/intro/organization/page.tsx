import type { Metadata } from 'next';

export const metadata: Metadata = { title: '조직도' };

const departments = [
  {
    name: '기획조정실',
    teams: ['기획팀', '재무팀', '인사팀'],
  },
  {
    name: '디지털확산본부',
    teams: ['디지털포용팀', 'SW교육팀', '사이언스문화팀'],
  },
  {
    name: '사업운영본부',
    teams: ['ICT어워드팀', '대외협력팀', '홍보팀'],
  },
  {
    name: '경영지원실',
    teams: ['총무팀', 'IT운영팀'],
  },
];

export default function OrganizationPage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">조직도</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      {/* 최상위 */}
      <div className="flex flex-col items-center">
        <div
          className="px-10 py-4 rounded-xl text-white font-bold text-center shadow-lg"
          style={{ backgroundColor: '#003087' }}
        >
          <div className="text-xs font-normal opacity-70 mb-0.5">Board of Directors</div>
          이사회
        </div>

        <div className="w-0.5 h-8" style={{ backgroundColor: '#003087' }} />

        <div
          className="px-10 py-4 rounded-xl text-white font-bold text-center shadow-lg"
          style={{ backgroundColor: '#0055aa' }}
        >
          <div className="text-xs font-normal opacity-70 mb-0.5">Chairman</div>
          이사장
        </div>

        <div className="w-0.5 h-8" style={{ backgroundColor: '#003087' }} />

        <div className="px-8 py-3 rounded-lg text-white font-semibold text-center text-sm"
          style={{ backgroundColor: '#0066cc' }}>
          <div className="text-xs font-normal opacity-70 mb-0.5">Secretary General</div>
          사무총장
        </div>

        {/* 수평 연결선 */}
        <div className="w-full max-w-3xl mt-8">
          <div className="relative">
            <div className="h-0.5 w-full" style={{ backgroundColor: '#d1dae8' }} />
            <div className="flex justify-around -mt-0.5">
              {departments.map((dept) => (
                <div key={dept.name} className="flex flex-col items-center">
                  <div className="w-0.5 h-6" style={{ backgroundColor: '#d1dae8' }} />
                  <div
                    className="px-4 py-3 rounded-lg text-white text-sm font-semibold text-center whitespace-nowrap shadow"
                    style={{ backgroundColor: '#003087' }}
                  >
                    {dept.name}
                  </div>
                  <div className="w-0.5 h-4" style={{ backgroundColor: '#d1dae8' }} />
                  <div className="flex flex-col gap-2">
                    {dept.teams.map((team) => (
                      <div
                        key={team}
                        className="px-3 py-2 rounded border text-xs text-center"
                        style={{
                          borderColor: '#d1dae8',
                          color: '#003087',
                          backgroundColor: '#f0f4f9',
                        }}
                      >
                        {team}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 산하기관 */}
      <div className="mt-14 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">산하 기관</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {[
            {
              name: '과학기술정보통신인증원',
              url: 'https://kise.re.kr',
              desc: 'kise.re.kr',
            },
            {
              name: '자격검정사업단',
              url: 'https://cad.or.kr',
              desc: 'cad.or.kr',
            },
          ].map((org) => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-5 rounded-xl border-2 hover:shadow-md transition-all hover:-translate-y-0.5 text-center group"
              style={{ borderColor: '#0066cc' }}
            >
              <span className="font-bold text-sm group-hover:text-[#003087] transition-colors">
                {org.name}
              </span>
              <span className="text-xs text-gray-400 mt-1">{org.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
