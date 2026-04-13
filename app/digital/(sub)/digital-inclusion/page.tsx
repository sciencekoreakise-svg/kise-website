import type { Metadata } from 'next';
import {
  Smartphone, Monitor, CreditCard, ShieldCheck,
  Target, Users, Leaf, CalendarDays,
  UserCheck, BookOpen, ClipboardCheck, MapPin,
  TrendingUp, Home, Globe, CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = { title: '디지털포용 사업' };

const ACCENT = '#B5451B';

const stats = [
  { value: '8,519', label: '시니어 디지털 교육 이수', desc: '전국 취약계층 대상 맞춤형 디지털 교육 수료자 수' },
  { value: '112', label: '디지털 문해교육사 양성', desc: '지역사회 디지털 교육을 이끌 전문 강사 인력 배출' },
  { value: '2+', label: '년간 사업 운영', desc: '2024년부터 2026년까지 지속 확대 운영 중' },
];

const purposes = [
  {
    icon: Target,
    title: '디지털 격차 해소',
    desc: '정보소외 계층의 디지털 접근성을 높여 평등한 정보 환경 조성',
  },
  {
    icon: Users,
    title: '사회 참여 확대',
    desc: '디지털 역량 강화를 통한 자립적 일상생활 및 사회 참여 지원',
  },
  {
    icon: Leaf,
    title: '지역 교육 생태계 구축',
    desc: '지역 기반 전문 강사 양성으로 지속 가능한 교육 환경 마련',
  },
];

const programs = [
  {
    icon: Smartphone,
    title: '스마트폰 활용 교육',
    desc: '기본 조작부터 앱 활용, 영상통화까지 시니어 눈높이에 맞는 단계별 스마트폰 교육',
  },
  {
    icon: Monitor,
    title: '키오스크 사용 교육',
    desc: '음식점·병원·관공서 등 생활 속 키오스크를 자신 있게 이용할 수 있도록 실습 중심 교육',
  },
  {
    icon: CreditCard,
    title: '모바일 금융 및 생활 서비스',
    desc: '인터넷뱅킹, 공공서비스 앱 등 모바일을 통한 생활 편의 서비스 활용 교육',
  },
  {
    icon: ShieldCheck,
    title: '디지털 생활 안전 교육',
    desc: '보이스피싱, 개인정보 보호 등 디지털 환경의 위험 요소를 인식하고 대처하는 방법 습득',
  },
];

const trainingSteps = [
  { icon: UserCheck, step: '01', title: '선발 및 오리엔테이션', desc: '참여자 모집과 기본 교육' },
  { icon: BookOpen, step: '02', title: '교육 방법론 학습', desc: '맞춤형 교수법과 자료 학습' },
  { icon: ClipboardCheck, step: '03', title: '교수법 실습 및 피드백', desc: '현장 모의수업과 피드백' },
  { icon: MapPin, step: '04', title: '지역 강사 배치 및 활동', desc: '복지관·경로당 배치 운영' },
];

const ecosystemItems = [
  '지역 복지관 및 경로당 연계 교육 운영',
  '주민센터 기반 디지털 교육 거점 확대',
  '교육사 간 네트워크 및 역량 강화 지원',
  '교육 콘텐츠 지속 업데이트 및 교재 개발',
];

const effects = [
  '교육 수혜자의 지속적 확대',
  '지역 맞춤형 교육 실현',
  '시니어의 사회적 역할 강화',
];

const visions = [
  {
    icon: TrendingUp,
    title: '정보 접근성 향상',
    desc: '디지털 취약계층의 정보 격차 해소 및 동등한 정보 접근 환경 조성',
  },
  {
    icon: Home,
    title: '지역 중심 확산',
    desc: '전국 지역사회 기반 교육 인프라 강화를 통한 지속 가능한 포용 모델 정착',
  },
  {
    icon: Globe,
    title: '디지털 자립 지원',
    desc: '교육 수료 후에도 스스로 디지털 환경을 탐색하고 활용할 수 있는 역량 내재화',
  },
];

export default function DigitalInclusionPage() {
  return (
    <article className="space-y-12">
      {/* 타이틀 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">디지털포용 사업</h2>
        <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: '#FF6600' }} />
        <div
          className="rounded-xl p-6 text-white"
          style={{ background: `linear-gradient(135deg, #7B2D12, ${ACCENT})` }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-1">
            Digital Inclusion
          </p>
          <h3 className="text-xl font-bold mb-2">모두가 함께하는 디지털 사회</h3>
          <p className="text-sm opacity-80 leading-relaxed mb-4">
            디지털 소외계층 지원을 통해 모두가 함께하는 디지털 사회를 만들어갑니다.
            2024년부터 전국의 노년층과 정보취약계층을 대상으로 맞춤형 디지털 교육을 제공하며 격차 해소에 앞장서고 있습니다.
          </p>
          <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold w-fit">
            <CalendarDays size={13} />
            2024년 2월 ~ 2026년 진행 중
          </div>
        </div>
      </div>

      {/* 사업 성과 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">사업 성과 한눈에 보기</h3>
        <p className="text-sm text-gray-500 mb-5">
          2024년 사업 착수 이후, 전국 각지에서 꾸준히 성과를 쌓아가고 있습니다. 교육 대상자 수와 전문 인력 양성 모두에서 의미 있는 결과를 달성했습니다.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-red-100 bg-red-50/40 p-5 text-center"
            >
              <p className="text-3xl font-extrabold mb-1" style={{ color: ACCENT }}>{s.value}</p>
              <p className="text-sm font-bold text-gray-700 mb-1">{s.label}</p>
              <p className="text-xs text-gray-500 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 사업 목적 및 방향 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">사업 목적 및 방향</h3>
        <p className="text-sm text-gray-500 mb-2 leading-relaxed">
          디지털포용 사업은 디지털 환경에 취약한 <strong className="text-gray-700">노년층 및 정보소외 계층</strong>을 대상으로 디지털 교육을 제공하여 디지털 격차를 해소하고 사회 참여를 확대하기 위한 공익 교육사업입니다.
        </p>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          단순한 기기 사용법 전달을 넘어, 디지털 기술을 통해 일상의 자립과 사회적 연결을 회복할 수 있도록 지원합니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {purposes.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="rounded-xl border border-gray-200 p-5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white mb-3"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Icon size={18} />
                </div>
                <p className="font-bold text-gray-800 mb-1">{p.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ① 시니어 디지털 교육 프로그램 */}
      <section>
        <div className="flex items-center gap-2 mb-1">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
            style={{ backgroundColor: ACCENT }}
          >
            ①
          </span>
          <h3 className="text-lg font-bold text-gray-800">시니어 디지털 교육 프로그램</h3>
        </div>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          스마트폰부터 키오스크, 모바일 금융까지 — 일상에서 꼭 필요한 디지털 역량을 단계적으로 습득할 수 있도록 설계된 맞춤형 교육 과정입니다. 현장 중심의 실습 위주 교육으로 실제 생활에 바로 적용 가능합니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.title}
                className="flex gap-4 rounded-xl border border-gray-200 p-5 hover:border-red-200 transition-colors"
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

      {/* ② 시니어 디지털 문해교육사 양성 */}
      <section>
        <div className="flex items-center gap-2 mb-1">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
            style={{ backgroundColor: ACCENT }}
          >
            ②
          </span>
          <h3 className="text-lg font-bold text-gray-800">시니어 디지털 문해교육사 양성</h3>
        </div>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          단순히 교육을 받는 데 그치지 않고, <strong className="text-gray-700">직접 지역사회의 디지털 교육을 이끄는 전문 강사</strong>로 성장할 수 있도록 지원합니다. 시니어가 시니어를 가르치는 동료 학습 모델을 통해 더욱 공감 있는 교육이 가능합니다.
        </p>

        {/* 4단계 프로세스 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {trainingSteps.map((step, i) => {
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
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
                {i < trainingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-1.5 w-3 h-0.5 bg-gray-300 -translate-y-1/2 z-10" />
                )}
              </div>
            );
          })}
        </div>
        <p className="text-xs text-gray-500 leading-relaxed bg-gray-50 rounded-lg p-3">
          양성 과정을 수료한 디지털 문해교육사는 지역 복지관, 경로당, 주민센터 등 생활 밀착형 교육 현장에 배치되어 지속적인 디지털 교육 생태계를 구성합니다.
        </p>
      </section>

      {/* 지역사회 디지털 교육 생태계 구축 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">지역사회 디지털 교육 생태계 구축</h3>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          디지털 문해교육사 양성 프로그램은 일회성 교육에 그치지 않습니다. 지역 기반 강사 인력을 지속적으로 배출함으로써, 지역사회 스스로 디지털 교육을 이어나갈 수 있는 자생적 생태계를 구축하는 것이 핵심 목표입니다.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* 지속 가능한 교육 체계 */}
          <div className="rounded-xl border border-gray-200 p-5">
            <p className="font-bold text-gray-800 mb-3">지속 가능한 교육 체계</p>
            <ul className="space-y-2">
              {ecosystemItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: ACCENT }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* 기대 효과 */}
          <div className="rounded-xl p-5 text-white" style={{ background: `linear-gradient(135deg, #7B2D12, ${ACCENT})` }}>
            <p className="font-bold mb-2">기대 효과</p>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              전문 강사 양성을 통해 교육의 질과 지속성을 동시에 확보하며, 지역 내 디지털 격차 해소에 실질적으로 기여합니다.
            </p>
            <ul className="space-y-2">
              {effects.map((e) => (
                <li key={e} className="flex items-center gap-2 text-sm opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 디지털 포용 사회를 향한 여정 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">디지털 포용 사회를 향한 여정</h3>
        <p className="text-sm text-gray-500 mb-3 leading-relaxed">
          본 사업은 2026년까지 지속적으로 확대 운영되며, 더 많은 디지털 취약계층이 정보에 공평하게 접근하고 디지털 사회의 당당한 구성원으로 참여할 수 있도록 지원합니다.
        </p>
        <div
          className="rounded-lg border-l-4 bg-red-50 p-4 mb-5"
          style={{ borderColor: ACCENT }}
        >
          <p className="text-sm text-gray-700 leading-relaxed">
            디지털 기술은 특정 세대의 전유물이 아닙니다. 모든 세대가 디지털 세상에서 자립하고 연결될 수 있도록, 우리는 계속해서 함께 걸어갑니다.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {visions.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-xl border border-gray-200 p-5 bg-red-50/30">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white mb-3"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Icon size={18} />
                </div>
                <p className="font-bold text-gray-800 mb-1">{v.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 사업 문의 */}
      <div className="rounded-xl border-2 p-6" style={{ borderColor: ACCENT }}>
        <h3 className="font-bold text-gray-800 mb-2">사업 문의</h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          디지털포용 사업 참여 및 문의 사항은 아래 이메일로 연락해 주시기 바랍니다.
        </p>
        <a
          href="mailto:digital@kise.or.kr"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: ACCENT }}
        >
          사업 문의하기
        </a>
      </div>
    </article>
  );
}
