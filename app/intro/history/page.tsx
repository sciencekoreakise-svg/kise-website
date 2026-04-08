import type { Metadata } from 'next';

export const metadata: Metadata = { title: '연혁' };

const historyData = [
  {
    year: '2024',
    items: [
      '제15회 ICT AWARD KOREA 시상식 개최',
      '디지털디바이드 해소 수혜자 누계 50만 명 달성',
      'SW미래채움 교육 참여 학교 200개교 돌파',
    ],
  },
  {
    year: '2022',
    items: [
      '사이언스트립 온·오프라인 하이브리드 프로그램 도입',
      '디지털 취약계층 AI 리터러시 교육 신규 사업 시작',
    ],
  },
  {
    year: '2020',
    items: [
      'SW미래채움 전국 확대 시행 (농어촌·도서벽지 포함)',
      '비대면 디지털 교육 플랫폼 구축',
      '설립 30주년 기념행사 개최',
    ],
  },
  {
    year: '2018',
    items: [
      '과학기술정보통신인증원(kise.re.kr) 설립 지원',
      '디지털디바이드 해소 정부 위탁사업 수행',
    ],
  },
  {
    year: '2015',
    items: [
      '제1회 SW미래채움 사업 시작',
      'ICT AWARD KOREA 국제 부문 신설',
    ],
  },
  {
    year: '2010',
    items: [
      '사이언스트립 프로그램 최초 도입',
      'ICT AWARD KOREA 10회 개최 기념 특별전시',
    ],
  },
  {
    year: '2005',
    items: [
      '자격검정사업단(cad.or.kr) 분리 설립',
      '정보 소외계층 PC 보급 지원사업 시작',
    ],
  },
  {
    year: '2000',
    items: [
      'ICT AWARD KOREA 최초 개최',
      '인터넷 교육 확산 사업 추진',
    ],
  },
  {
    year: '1990',
    items: [
      '사단법인 한국정보과학진흥협회 설립 (과학기술처 산하)',
      '초대 이사장 취임 및 창립총회 개최',
    ],
  },
];

export default function HistoryPage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">연혁</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      <div className="relative">
        {/* 타임라인 선 */}
        <div
          className="absolute left-16 top-0 bottom-0 w-0.5 hidden sm:block"
          style={{ backgroundColor: '#d1dae8' }}
        />

        <div className="space-y-8">
          {historyData.map((entry) => (
            <div key={entry.year} className="flex gap-6 items-start">
              {/* 연도 */}
              <div className="shrink-0 w-14 text-right">
                <span className="text-xl font-bold" style={{ color: '#003087' }}>
                  {entry.year}
                </span>
              </div>

              {/* 점 */}
              <div className="shrink-0 relative hidden sm:flex items-start justify-center w-4 pt-2">
                <div
                  className="w-3 h-3 rounded-full border-2 border-white ring-2 z-10"
                  style={{ backgroundColor: '#003087' }}
                />
              </div>

              {/* 내용 */}
              <div className="flex-1 pb-2">
                {entry.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 py-2 border-b border-gray-100 last:border-0"
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: '#FF6600' }}
                    />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
