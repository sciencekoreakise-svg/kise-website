import type { Metadata } from 'next';
import { Monitor, GraduationCap, MapPin, Target, Users, School, Building2, Globe, Trophy } from 'lucide-react';

export const metadata: Metadata = { title: 'SW미래채움' };

const ACCENT = '#C96B30';

const centerItems = [
  { label: '체험존', desc: 'SW·AI 최신 기술을 직접 체험할 수 있는 공간' },
  { label: '교육장', desc: '단계별 SW 교육을 위한 전용 교육 환경' },
  { label: '교구재', desc: 'AI·드론·IoT 등 실습용 최신 교구재 구비' },
];

const instructorItems = [
  '체계적인 SW교육을 통해 수준별 SW강사 양성 및 10개월 경력개발 지원',
  '지역 내 다양한 교육 수요 대응을 위한 역량강화 교육 및 활동 지원 (자격증 등)',
];

const centerEdu = [
  '최대 170시간 이상의 단계별 SW·AI 교육',
  'AI, 메타버스, IoT, 드론 등 최신 기술 체험',
];

const visitEdu = [
  '지역 내 교육수요를 기반으로 찾아가는 교육 추진',
  '지역 초·중등학교 / 도서벽지 / 특수학교 / 지역아동센터 등',
];

const yearlyData = [
  {
    year: '2019',
    regions: 5,
    regionLabel: '인천, 강원, 경남, 충북, 전남',
    newRegions: '신규 5개 지역',
    instructors: '504명',
    students: '22,322명',
    visitRate: '83.4%',
    visitStudents: '18,617명',
    initiatives: [
      'SW미래채움 5개 센터 구축',
      '제1회 강사 네트워킹 데이 개최',
      'SW강사 수업과정안 공모전 개최',
    ],
  },
  {
    year: '2020',
    regions: 10,
    regionLabel: '경기, 충남, 제주, 경북, 울산 신규 추가',
    newRegions: '신규 5개 추가 (총 10개)',
    instructors: '1,026명',
    students: '39,480명',
    visitRate: '86.4%',
    visitStudents: '34,096명',
    initiatives: [
      'SW미래채움 5개 센터 추가 구축',
      '제2회 강사 네트워킹 데이 개최',
      'SW강사 수업과정안 공모전 개최',
      'SW교육 커리큘럼 가이드라인 개발',
      '고등부 글로벌 AI교육프로그램 운영 (인공지능 자율주행 과정)',
    ],
  },
  {
    year: '2021',
    regions: 10,
    regionLabel: '10개 지역 계속 운영',
    newRegions: '10개 지역 계속',
    instructors: '824명',
    students: '110,991명',
    visitRate: '84.9%',
    visitStudents: '94,191명',
    initiatives: [
      'SW미래채움 10개 센터 운영',
      '제3회 강사 네트워킹 데이 개최',
      'SW강사 수업과정안 공모전 개최',
      '초·중학생 대상 코딩프로젝트 챌린지 개최',
      '고등부 글로벌 AI교육프로그램 운영 (자율주행, 데이터 사이언스 2개 과정)',
    ],
  },
  {
    year: '2022',
    regions: 11,
    regionLabel: '대구 신규 추가',
    newRegions: '신규 1개 추가 (총 11개)',
    instructors: '922명',
    students: '156,207명',
    visitRate: '81.5%',
    visitStudents: '127,246명',
    initiatives: [
      'SW미래채움 1개 센터 추가 운영',
      '제4회 강사 네트워킹 데이 개최',
      'SW강사 수업과정안 공모전 개최',
      '초·중학생 대상 코딩프로젝트 챌린지 개최',
      '고등부 글로벌 AI교육프로그램 운영',
      'SW강사 민간자격증 도입',
    ],
  },
  {
    year: '2023',
    regions: 13,
    regionLabel: '광주, 전북 신규 추가',
    newRegions: '신규 2개 추가 (총 13개)',
    instructors: '1,181명',
    students: '253,742명',
    visitRate: '84.3%',
    visitStudents: '213,847명',
    initiatives: [
      'SW미래채움 2개 센터 추가 운영',
      '제5회 강사 네트워킹 데이 개최',
      'SW강사 수업과정안 공모전 개최',
      '초·중학생 대상 코딩프로젝트 챌린지 개최',
      '고등부 글로벌 코딩챌린지 개최',
      'SW미래채움 역량강화 교육 추진',
      'SW미래채움 늘봄학교 협력',
    ],
  },
];

const keyInitiatives = [
  {
    icon: Building2,
    title: '지역 확대',
    summary: '총 13개 지역 내 SW미래채움 센터 구축·운영을 통한 전 지역 빈틈없는 SW교육 추진',
    items: ['강원', '경남', '인천', '전남', '충북', '경기', '경북', '울산', '충남', '제주', '대구', '광주', '전북'],
    itemType: 'tag' as const,
  },
  {
    icon: Monitor,
    title: 'SW교육 운영',
    summary: '초·중등 및 고등학생을 대상으로 수준별 맞춤 교육 프로그램 운영',
    items: ['(초·중) 코딩프로젝트 챌린지', '(고등) 글로벌 AI·SW교육 프로그램'],
    itemType: 'bullet' as const,
  },
  {
    icon: GraduationCap,
    title: '강사 양성',
    summary: 'SW전문강사의 전문성 향상 및 네트워크 구축 지원',
    items: ['강사 수업과정안 공모전', '강사 네트워킹 데이 개최'],
    itemType: 'bullet' as const,
  },
];

const cumulativeStats = [
  { icon: Building2, label: '운영 센터', value: '13개 지역', sub: '2023년 기준' },
  { icon: GraduationCap, label: 'SW강사 누적 양성', value: '4,457명', sub: '2019~2023 합계' },
  { icon: Users, label: '학생 교육 누적', value: '582,742명', sub: '2019~2023 합계' },
  { icon: School, label: '찾아가는 교육 비율', value: '84% 이상', sub: '매년 평균' },
];

export default function SwFuturePage() {
  return (
    <article className="space-y-12">
      {/* 타이틀 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">SW미래채움</h2>
        <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: ACCENT }} />
        <div
          className="rounded-xl p-6 text-white"
          style={{ background: `linear-gradient(135deg, #A03A1A, ${ACCENT})` }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-1">
            SW Future Fill
          </p>
          <h3 className="text-xl font-bold mb-2">미래를 코딩하다: SW미래채움 사업</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            지역 내 SW교육 접근성을 확보하고, 초·중등교육 단계에서부터의 체계적인 디지털 교육을
            추진하여 디지털 소양을 갖춘 지역 인재 양성 기반을 마련합니다.
          </p>
        </div>
      </div>

      {/* 사업 목적 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-4">사업 목적</h3>
        <div className="rounded-xl border border-orange-200 bg-orange-50/40 p-6 flex gap-4">
          <div
            className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white"
            style={{ backgroundColor: ACCENT }}
          >
            <Target size={20} />
          </div>
          <p className="text-sm text-gray-700 leading-relaxed self-center">
            지역 내 SW교육 접근성을 확보하고, 초·중등교육 단계에서부터의 체계적인 디지털 교육을
            추진하여 디지털 소양을 갖춘 지역 인재 양성 기반 마련
          </p>
        </div>
      </section>

      {/* 주요 추진사항 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">주요 추진사항</h3>
        <p className="text-sm text-gray-500 mb-6">
          센터 구축부터 강사 양성, 학생 교육까지 체계적인 SW 교육 생태계를 운영합니다.
        </p>

        {/* 1. SW미래채움 센터 구축 */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ backgroundColor: ACCENT }}
            >
              1
            </span>
            <h4 className="font-bold text-gray-800">SW미래채움 센터 구축</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-8">
            {centerItems.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-gray-200 p-5 bg-white hover:border-orange-300 transition-colors"
              >
                <p className="font-bold mb-1" style={{ color: ACCENT }}>{item.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. SW전문강사 양성 */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ backgroundColor: ACCENT }}
            >
              2
            </span>
            <h4 className="font-bold text-gray-800">SW전문강사 양성</h4>
          </div>
          <div className="ml-8 space-y-3">
            {instructorItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-xl border border-gray-200 p-4 bg-white">
                <div
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  <GraduationCap size={16} />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed self-center">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 초·중등학생 대상 SW 교육 운영 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ backgroundColor: ACCENT }}
            >
              3
            </span>
            <h4 className="font-bold text-gray-800">초·중등학생 대상 SW 교육 운영</h4>
          </div>
          <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 p-5 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Monitor size={16} />
                </div>
                <p className="font-bold text-gray-800 text-sm">센터 교육</p>
              </div>
              <ul className="space-y-2">
                {centerEdu.map((text) => (
                  <li key={text} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  <MapPin size={16} />
                </div>
                <p className="font-bold text-gray-800 text-sm">찾아가는 교육</p>
              </div>
              <ul className="space-y-2">
                {visitEdu.map((text) => (
                  <li key={text} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 성과 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">SW미래채움 주요 성과</h3>
        <p className="text-sm text-gray-500 mb-6">2019년 출범 이후 매년 지역과 참여 규모를 확대하며 성장하고 있습니다.</p>

        {/* 누적 요약 통계 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {cumulativeStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl p-5 text-center border border-orange-100 bg-orange-50/50"
              >
                <div className="flex justify-center mb-2">
                  <Icon size={20} style={{ color: ACCENT }} />
                </div>
                <p className="text-xl font-extrabold mb-0.5" style={{ color: ACCENT }}>{stat.value}</p>
                <p className="text-xs font-semibold text-gray-700 mb-0.5">{stat.label}</p>
                <p className="text-xs text-gray-400">{stat.sub}</p>
              </div>
            );
          })}
        </div>

        {/* 주요 추진사항 요약 */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-gray-700 mb-3">주요 추진사항</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {keyInitiatives.map((ki) => {
              const Icon = ki.icon;
              return (
                <div key={ki.title} className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Icon size={16} />
                    </div>
                    <p className="font-bold text-gray-800 text-sm">{ki.title}</p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{ki.summary}</p>
                  {ki.itemType === 'tag' ? (
                    <div className="flex flex-wrap gap-1">
                      {ki.items.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full border font-medium"
                          style={{ borderColor: ACCENT, color: ACCENT }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-1">
                      {ki.items.map((text) => (
                        <li key={text} className="flex gap-2 text-xs text-gray-600">
                          <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-orange-300" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 연도별 타임라인 */}
        <div className="space-y-4">
          {yearlyData.map((item, idx) => (
            <div key={item.year} className="relative">
              {/* 연결선 */}
              {idx < yearlyData.length - 1 && (
                <div
                  className="absolute left-[19px] top-[52px] w-0.5 h-[calc(100%+1rem)] bg-orange-100"
                  style={{ zIndex: 0 }}
                />
              )}
              <div className="flex gap-4">
                {/* 연도 뱃지 */}
                <div className="shrink-0 flex flex-col items-center" style={{ zIndex: 1 }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {item.year.slice(2)}
                  </div>
                </div>

                {/* 카드 */}
                <div className="flex-1 rounded-xl border border-gray-200 bg-white p-5 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-base font-extrabold text-gray-900">{item.year}년</span>
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {item.newRegions}
                    </span>
                  </div>

                  {/* 지역 */}
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    운영 지역: {item.regionLabel}
                  </p>

                  {/* 수치 3개 */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="rounded-lg bg-orange-50 p-3 text-center">
                      <p className="text-sm font-extrabold" style={{ color: ACCENT }}>{item.instructors}</p>
                      <p className="text-xs text-gray-500 mt-0.5">강사 양성</p>
                    </div>
                    <div className="rounded-lg bg-orange-50 p-3 text-center">
                      <p className="text-sm font-extrabold" style={{ color: ACCENT }}>{item.students}</p>
                      <p className="text-xs text-gray-500 mt-0.5">학생 교육</p>
                    </div>
                    <div className="rounded-lg bg-orange-50 p-3 text-center">
                      <p className="text-sm font-extrabold" style={{ color: ACCENT }}>{item.visitStudents}</p>
                      <p className="text-xs text-gray-500 mt-0.5">찾아가는 교육 ({item.visitRate})</p>
                    </div>
                  </div>

                  {/* 주요 추진사항 */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2">주요 추진사항</p>
                    <ul className="space-y-1">
                      {item.initiatives.map((init) => (
                        <li key={init} className="flex gap-2 text-xs text-gray-600">
                          <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-orange-300" />
                          {init}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 참여 문의 */}
      <div className="rounded-xl border-2 p-6" style={{ borderColor: ACCENT }}>
        <h3 className="font-bold text-gray-800 mb-2">참여 신청 안내</h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          SW미래채움 사업은 매년 상반기(3월)에 참여 학교를 모집합니다.
          교육 소외 지역(농어촌·도서·벽지) 학교를 우선 선정합니다.
        </p>
        <a
          href="mailto:swfuture@kise.or.kr"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: ACCENT }}
        >
          참여 문의하기
        </a>
      </div>
    </article>
  );
}
