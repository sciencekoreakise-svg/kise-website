import type { Metadata } from 'next';
import { Code2, Users, Trophy, Network, CalendarDays, Target, Building2, ArrowRight, TrendingUp, Lightbulb, Leaf } from 'lucide-react';

export const metadata: Metadata = { title: 'SW미래채움' };

const stats = [
  { value: '207', label: '캠프 운영', desc: 'SW·AI 교육 캠프 총 207회 성공적으로 운영' },
  { value: '2,852', label: '학생 참여', desc: '초·중·고 학생 2,852명 프로그램 참여' },
  { value: '2,731', label: '교육 이수', desc: '참여 학생 중 2,731명이 전 과정 이수 완료' },
  { value: '1,800+', label: 'AI 페스티벌', desc: 'SW·AI 체험 행사에 학생·학부모 1,800명 이상 참여' },
];

const programs = [
  {
    icon: Code2,
    title: 'SW·AI 교육 프로그램',
    desc: '초·중·고 학생 대상 코딩, Python, AI 교육 및 로봇·피지컬 컴퓨팅 프로젝트 기반 학습 운영',
  },
  {
    icon: Users,
    title: 'SW·AI 캠프 및 체험',
    desc: '방학 집중 캠프, AI 로봇·스마트시티 체험, 데이터 분석 및 알고리즘 프로그램 운영',
  },
  {
    icon: Trophy,
    title: '페스티벌 및 경진대회',
    desc: 'SW 발명 경진대회, 데이터 아이디어톤, 학생 작품 전시 및 발표 행사 개최',
  },
  {
    icon: Network,
    title: 'SW 교육 생태계 구축',
    desc: '지역 강사 양성, 교육기관·대학 협력 운영, SW 교육 거점센터 구축 및 확산',
  },
];

const satisfactions = [
  { label: '학생 만족도', value: 90.8, desc: '교육에 참여한 초·중·고 학생들의 만족도' },
  { label: '교사 만족도', value: 98.9, desc: '함께한 교사들이 평가한 프로그램 만족도' },
  { label: '학부모 만족도', value: 99.2, desc: '자녀 교육을 경험한 학부모들의 만족도' },
];

const impacts = [
  {
    icon: TrendingUp,
    title: '교육 격차 해소',
    desc: '도심과 지역 간 SW 교육 불균형을 해소하는 거점 역할 수행',
  },
  {
    icon: Lightbulb,
    title: '인재 발굴 및 육성',
    desc: '경진대회·페스티벌을 통한 창의 인재 조기 발굴 및 지속 성장 지원',
  },
  {
    icon: Leaf,
    title: '지속 가능한 생태계',
    desc: '지역 강사 양성과 대학 협력으로 자립적 SW 교육 생태계 완성',
  },
];

const news = [
  {
    title: '경기도, 2026 청소년 AI교육 강화 위한 미래채움 성과교류회 개최...SW미래채움 우수사례 공유',
    summary:
      '경기도는 경기도경제과학진흥원, 한국정보과학진흥협회와 함께 고양 SW미래채움 센터에서 \'2025 경기 SW미래채움 강사 성과교류회\'를 열었다.',
    source: '이코노뉴스',
    date: '2025.12.17',
  },
  {
    title: '\'경기SW미래채움 북부센터\' 고양시 이전 개소, AI 페스티벌 700여 명 AI 체험',
    summary:
      '경기SW미래채움 북부센터가 의정부시에서 고양시로 이전해 새롭게 문을 열었다. 경기 SW미래채움 북부센터는 고양시 창조혁신캠퍼스 16층에 자리 잡았다.',
    source: '위클리오늘',
    date: '2025.10.27',
  },
];

const ACCENT = '#C96B30';

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
            과학기술정보통신부와 지방자치단체가 함께 만들어가는 지역 기반 SW·AI 교육의 새로운 이야기.
            2025년부터 지역 기반의 SW 교육 생태계를 구축하고 미래 디지털 인재를 체계적으로 양성하고 있습니다.
          </p>
        </div>
      </div>

      {/* 사업 개요 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-4">사업 개요</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: CalendarDays, title: '사업 기간', value: '2025년 ~ 현재', sub: '지속적인 확대 운영 중' },
            { icon: Target, title: '주요 목표', value: '지역 기반 SW 교육 생태계 구축', sub: '미래 디지털 인재 양성' },
            { icon: Building2, title: '추진 주체', value: '과학기술정보통신부', sub: '지방자치단체 공동 추진' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-xl border border-gray-200 p-5 bg-orange-50/40">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={18} style={{ color: ACCENT }} />
                  <span className="text-sm font-semibold text-gray-600">{item.title}</span>
                </div>
                <p className="font-bold text-gray-900 text-sm">{item.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 주요 프로그램 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-4">주요 프로그램</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div key={prog.title} className="flex gap-4 rounded-xl border border-gray-200 p-5 hover:border-orange-300 transition-colors">
                <div
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">{prog.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{prog.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 성과 수치 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">숫자로 증명하는 성과</h3>
        <p className="text-sm text-gray-500 mb-4">
          207회의 캠프 운영, 2,852명의 참여 학생, 그리고 압도적인 만족도로 지역 SW 교육의 새로운 기준을 세우고 있습니다.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-5 text-center border border-orange-100 bg-orange-50/50"
            >
              <p className="text-2xl font-extrabold mb-1" style={{ color: ACCENT }}>
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</p>
              <p className="text-xs text-gray-500 leading-snug">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 참여자 만족도 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">참여자 만족도</h3>
        <p className="text-sm text-gray-500 mb-5">
          학생·교사·학부모 모두에게 높은 만족도를 기록하며 프로그램의 우수성을 입증하였습니다.
        </p>
        <div className="space-y-4">
          {satisfactions.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                <span className="text-sm font-bold" style={{ color: ACCENT }}>{item.value}%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${item.value}%`, background: `linear-gradient(to right, #A03A1A, ${ACCENT})` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SW미래채움이 만드는 변화 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-4">SW미래채움이 만드는 변화</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {impacts.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-xl p-5 border border-gray-200 bg-white">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white mb-3"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Icon size={18} />
                </div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 최신 보도 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-4">최신 보도</h3>
        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 p-5 hover:border-orange-300 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  보도자료
                </span>
                <span className="text-xs text-gray-400">{item.source} · {item.date}</span>
              </div>
              <p className="font-bold text-gray-800 text-sm mb-1 leading-snug">{item.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{item.summary}</p>
              <div className="flex items-center gap-1 mt-3 text-xs font-semibold" style={{ color: ACCENT }}>
                자세히 보기 <ArrowRight size={12} />
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
