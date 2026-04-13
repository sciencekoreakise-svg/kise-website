import type { Metadata } from 'next';
import {
  CalendarDays, MapPin, Car, Code2, Laptop, Compass,
  BookOpen, FlaskConical, Presentation, GraduationCap,
  Users, Target, Building2, CheckCircle2, TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = { title: 'AI 모빌리티 캠프' };

const ACCENT = '#3730A3';
const ACCENT_LIGHT = '#4F46E5';

const stats = [
  { value: '16회', label: '캠프 운영 횟수', desc: '2024년 2~3월 집중 운영' },
  { value: '258명', label: '총 교육 참여 학생', desc: '엔트리·파이썬 과정 합산' },
  { value: '114.6%', label: '목표 초과 달성률', desc: '계획 대비 성과 초과' },
  { value: '98점', label: '교육 만족도', desc: '참여 학생 설문 기준' },
];

const inclusionStats = [
  { value: '72%', label: '사회적 배려 대상 학생 참여', desc: '인구소멸지역·교육소외지역·다문화·저소득층 포함' },
  { value: '98%', label: '교육 만족도 달성', desc: '전 과정 참여 학생 대상' },
  { value: '2개', label: '운영 교육 과정', desc: '엔트리 과정 및 파이썬 과정' },
];

const programs = [
  {
    icon: Car,
    title: 'AI 모빌리티 기초 교육',
    desc: '엔트리 기반 자율주행 알고리즘 체험과 모빌리티 센서·제어 시스템 이해, 데이터 기반 이동 기술 학습을 통해 AI 모빌리티의 핵심 개념을 습득합니다.',
  },
  {
    icon: Code2,
    title: 'Python 기반 모빌리티 프로그래밍',
    desc: 'Python을 활용한 자율주행 프로그램 제작 및 모빌리티 데이터 분석, 실습 중심 프로젝트 교육을 통해 실전 개발 역량을 키웁니다.',
  },
  {
    icon: Laptop,
    title: '실습 중심 캠프 운영',
    desc: '1인 1기자재 실습형 교육으로 자율주행 실습 프로젝트를 직접 수행하며, LMS 기반 사전·사후 학습을 통해 체계적인 학습 경험을 제공합니다.',
  },
  {
    icon: Compass,
    title: '미래 모빌리티 진로 교육',
    desc: '모빌리티 산업 전반에 대한 이해와 AI·자율주행 기술 분야의 진로 탐색, 지역 산업 및 대학 연계 교육을 통해 미래 진로 설계를 지원합니다.',
  },
];

const learningSteps = [
  {
    icon: BookOpen,
    step: '01',
    title: '사전 학습 (LMS)',
    desc: '온라인 플랫폼을 통한 기초 개념 및 이론 학습',
  },
  {
    icon: FlaskConical,
    step: '02',
    title: '현장 실습',
    desc: '1인 1기자재 기반 자율주행 프로젝트 직접 수행',
  },
  {
    icon: Presentation,
    step: '03',
    title: '프로젝트 발표',
    desc: '팀별·개인별 결과물 공유 및 피드백',
  },
  {
    icon: GraduationCap,
    step: '04',
    title: '사후 학습 및 심화',
    desc: 'LMS 기반 복습 및 추가 학습 콘텐츠 제공',
  },
];

const ecosystemItems = [
  {
    icon: Target,
    title: '지역 인재 발굴',
    desc: '충남·세종·대전 지역 학생을 대상으로 미래 모빌리티 분야의 잠재적 인재를 조기에 발굴하고 체계적으로 육성합니다.',
  },
  {
    icon: Building2,
    title: '산·학 연계 교육',
    desc: '선문대학교 지능형전장제어시스템사업단과의 협력으로 산업 현장 중심의 실질적 교육 커리큘럼을 운영합니다.',
  },
  {
    icon: TrendingUp,
    title: '기술 교육 인프라 구축',
    desc: '지역 내 지속 가능한 AI·자율주행 교육 생태계를 형성하여 장기적인 지역 산업 발전의 기반을 마련합니다.',
  },
];

const outcomes = [
  {
    title: '목표 초과 달성',
    desc: '계획 대비 114.6% 달성으로 사업의 실행력과 운영 역량을 입증하였습니다.',
  },
  {
    title: '교육 형평성 실현',
    desc: '사회적 배려 대상 학생 72% 참여로 디지털 교육 격차 해소에 실질적으로 기여하였습니다.',
  },
  {
    title: '높은 교육 만족도',
    desc: '98점의 만족도는 프로그램의 콘텐츠 품질과 운영 전문성을 객관적으로 증명합니다.',
  },
  {
    title: '지역 생태계 기여',
    desc: '충남·세종·대전 지역 내 AI 모빌리티 교육 인프라 구축의 초석을 마련하였습니다.',
  },
];

export default function AiMobilityPage() {
  return (
    <article className="space-y-12">
      {/* 타이틀 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">AI 모빌리티 캠프</h2>
        <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: '#FF6600' }} />
        <div
          className="rounded-xl p-6 text-white"
          style={{ background: `linear-gradient(135deg, #1e1b4b, ${ACCENT_LIGHT})` }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-1">
            AI Mobility Camp
          </p>
          <h3 className="text-xl font-bold mb-2">미래 모빌리티 교육의 새로운 기준</h3>
          <p className="text-sm opacity-80 leading-relaxed mb-4">
            DSC 공유대학(선문대학교) 지능형전장제어시스템사업단과 협력하여 운영된 미래 모빌리티 교육
            프로그램 — 자율주행·AI·소프트웨어 기술 기반 인재 양성의 새로운 기준을 제시합니다.
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold">
              <CalendarDays size={13} />
              2024년 2월 ~ 3월
            </div>
            <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold">
              <MapPin size={13} />
              충남·세종·대전
            </div>
          </div>
        </div>
      </div>

      {/* 핵심 성과 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">핵심 성과 한눈에 보기</h3>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          2024년 2월부터 3월까지 운영된 AI 모빌리티 캠프는 당초 목표를 크게 상회하는 성과를
          달성하였습니다. 16회의 캠프 운영을 통해 258명의 학생이 교육에 참여하였으며, 이는 목표
          대비 <strong className="text-gray-700">114.6%</strong>를 초과 달성한 수치입니다. 특히
          교육 프로그램 만족도 98점이라는 높은 수준의 결과는 프로그램 품질의 우수성을 입증합니다.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5 text-center"
            >
              <p className="text-3xl font-extrabold mb-1" style={{ color: ACCENT }}>
                {s.value}
              </p>
              <p className="text-sm font-bold text-gray-700 mb-1">{s.label}</p>
              <p className="text-xs text-gray-500 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 디지털 교육 격차 해소 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">디지털 교육 격차 해소를 위한 노력</h3>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          AI 모빌리티 캠프는 단순한 기술 교육을 넘어,{' '}
          <strong className="text-gray-700">교육 기회의 형평성</strong>을 실현하는 사회적 가치를
          지향합니다. 인구소멸지역, 교육 소외지역, 다문화 가정, 저소득층 등 사회적 배려 대상
          학생의 참여 비율을 전체의 72%까지 확대함으로써, 디지털 교육 격차 해소에 실질적으로
          기여하였습니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {inclusionStats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-indigo-200 p-5 text-center"
            >
              <p className="text-4xl font-extrabold mb-2" style={{ color: ACCENT }}>
                {s.value}
              </p>
              <p className="text-sm font-bold text-gray-800 mb-1">{s.label}</p>
              <p className="text-xs text-gray-500 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 주요 교육 프로그램 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">주요 교육 프로그램 구성</h3>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          AI 모빌리티 캠프는 학생의 수준과 학습 목표에 맞춘{' '}
          <strong className="text-gray-700">4개의 핵심 프로그램</strong>으로 체계적으로 구성되어
          있습니다. 기초 개념부터 실전 프로젝트까지, 단계별 교육 커리큘럼을 통해 미래 모빌리티
          분야의 역량을 종합적으로 함양합니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.title}
                className="flex gap-4 rounded-xl border border-gray-200 p-5 hover:border-indigo-200 transition-colors"
              >
                <div
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">{prog.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{prog.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 교육 운영 방식 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">교육 운영 방식 — 어떻게 배우는가</h3>
        <p className="text-sm text-gray-500 mb-2 leading-relaxed">
          AI 모빌리티 캠프는 단순 강의 전달 방식을 탈피하여,{' '}
          <strong className="text-gray-700">학습자 주도의 실습 중심 교육 모델</strong>을 채택하고
          있습니다. 사전 학습(LMS)을 통해 기본 개념을 습득한 후, 현장에서 1인 1기자재 실습을
          통해 직접 자율주행 프로젝트를 수행하며, 사후 학습으로 내용을 심화·정리하는 3단계
          구조로 운영됩니다.
        </p>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          엔트리 과정은 코딩 입문자를 위한 블록 기반 자율주행 알고리즘 체험으로 구성되며,
          파이썬 과정은 텍스트 코딩 기반의 실전형 모빌리티 프로그래밍으로 구성되어 수준별
          맞춤 교육이 가능합니다.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {learningSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative">
                <div className="rounded-xl border border-gray-200 p-4 text-center h-full">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-2"
                    style={{ backgroundColor: ACCENT }}
                  >
                    {step.step}
                  </div>
                  <Icon size={18} className="mx-auto mb-2 text-gray-400" />
                  <p className="font-bold text-gray-800 text-sm mb-1">{step.title}</p>
                  <p className="text-xs text-gray-500 leading-snug">{step.desc}</p>
                </div>
                {i < learningSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-1.5 w-3 h-0.5 bg-gray-300 -translate-y-1/2 z-10" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 지역 생태계 구축 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          충남·세종·대전 지역 미래 모빌리티 생태계 구축
        </h3>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          AI 모빌리티 캠프는 단기 교육 성과에 그치지 않고,{' '}
          <strong className="text-gray-700">
            충남·세종·대전 지역의 미래 모빌리티 인재 발굴과 기술 교육 기반 구축
          </strong>
          이라는 장기적 목표를 지향합니다. DSC 공유대학(선문대학교) 지능형전장제어시스템사업단과의
          긴밀한 협력을 통해, 대학의 연구 역량과 산업 현장의 수요를 교육 과정에 직접 반영하고
          있습니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {ecosystemItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border-l-4 border border-indigo-200 p-5"
                style={{ borderLeftColor: ACCENT }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white mb-3"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Icon size={18} />
                </div>
                <p className="font-bold text-gray-800 mb-2">{item.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 성과 요약 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">성과 요약 및 기대 효과</h3>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          AI 모빌리티 캠프는 교육 목표의 양적 달성을 넘어, 교육 품질과 사회적 포용이라는 질적
          가치를 동시에 실현한 프로그램입니다. 98점의 높은 만족도와 72%에 달하는 사회적 배려
          대상 학생 참여 비율은 이 캠프의 성과가 숫자 이상의 사회적 임팩트를 지닌다는 것을
          보여줍니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="rounded-xl border border-gray-200 p-5 hover:border-indigo-200 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={17} style={{ color: ACCENT }} className="shrink-0" />
                <p className="font-bold text-gray-800">{o.title}</p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
        <div
          className="rounded-lg p-4 text-sm leading-relaxed"
          style={{ backgroundColor: '#EEF2FF', borderLeft: `4px solid ${ACCENT}` }}
        >
          <Users size={15} className="inline mr-1.5 align-middle" style={{ color: ACCENT }} />
          <span className="text-gray-700">
            본 사업은 향후 <strong>교육 소외지역 확대 운영</strong> 및{' '}
            <strong>프로그램 고도화</strong>를 통해 더 많은 학생들에게 미래 모빌리티 교육 기회를
            제공할 계획입니다.
          </span>
        </div>
      </section>
    </article>
  );
}
