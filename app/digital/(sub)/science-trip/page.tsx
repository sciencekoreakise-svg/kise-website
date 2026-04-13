import type { Metadata } from 'next';
import { Trophy, Users, GraduationCap, Award, Network, Search, TrendingUp, BadgeCheck, Brain, Factory, Lightbulb, CalendarDays, MapPin } from 'lucide-react';

export const metadata: Metadata = { title: 'Si-Tech Innovation Award' };

const ACCENT = '#D4892B';

const highlights = [
  { value: '2', unit: '개 영역', desc: '학생부·기업부 두 개의 주요 참가 영역으로 운영' },
  { value: '3', unit: '개 분야', desc: '과학기술 혁신 역량을 포괄하는 3개 핵심 분야 운영' },
  { value: '6', unit: '개 부문', desc: '세분화된 6개 공모 부문으로 다양한 성과 발굴' },
];

const features = [
  {
    icon: Trophy,
    title: '정부·기관상 시상',
    desc: '과학기술정보통신부 장관상을 포함한 다수의 권위 있는 정부 및 기관 표창이 수여되어 수상자의 기술 역량을 공식적으로 인정합니다.',
  },
  {
    icon: Network,
    title: '산학연 협력 네트워크',
    desc: '성균관대학교, 전자신문 등 국내 주요 대학 및 미디어 기관과의 긴밀한 협력을 통해 행사의 공신력과 확산력을 높이고 있습니다.',
  },
  {
    icon: GraduationCap,
    title: '미래 인재 참여',
    desc: '고등학생·대학생 등 차세대 과학기술 인재가 직접 참여하여 연구 성과와 아이디어를 겨루며 역량을 발휘할 기회를 제공합니다.',
  },
];

const goals = [
  {
    icon: Search,
    title: '우수 기술 발굴',
    desc: '대한민국 과학기술 산업을 선도할 혁신 기술과 기업을 공정한 심사를 통해 발굴합니다.',
  },
  {
    icon: TrendingUp,
    title: '산업 생태계 확산',
    desc: '수상 기업·개인의 기술 경쟁력 강화를 지원하고 혁신 성과가 산업 전반에 확산되도록 촉진합니다.',
  },
  {
    icon: BadgeCheck,
    title: '공식 혁신 인증 연계',
    desc: '협회의 과학기술혁신기업 인증 제도와 연계하여 기업의 기술 혁신 역량을 국가 차원에서 공식 인증합니다.',
  },
];

const operationFeatures = [
  {
    title: 'AI·과학문화 기반',
    desc: '인공지능 및 과학문화 확산이라는 시대적 흐름을 반영한 선도적 어워드',
  },
  {
    title: '산학연 협력 플랫폼',
    desc: '대학·기업·언론·정부가 함께하는 개방형 협력 행사 운영 모델',
  },
  {
    title: '전국 규모 공모',
    desc: '전국 어디서나 참여 가능한 개방형 공모 체계로 다양한 성과 발굴',
  },
];

const fields = [
  {
    icon: Brain,
    title: 'AI 기술혁신 분야',
    desc: '초거대·경량 AI, 클라우드, 반도체, 네트워크 등 핵심 AI 기술과 스마트 제조, 디지털 헬스케어, 공공·사회 혁신 등 AI 기반 산업 전반의 성과를 발굴합니다.',
    items: [],
  },
  {
    icon: Factory,
    title: '스마트 팩토리 & AI 머신비전 분야',
    desc: '제조 현장의 효율성과 생산성을 극대화하는 AI 머신비전 기술과 솔루션을 평가합니다.',
    items: ['AI 스마트 팩토리 머신비전 하드웨어 부문', 'AI 스마트 팩토리 머신비전 소프트웨어 부문'],
  },
  {
    icon: Lightbulb,
    title: 'AI 창의과학 학생부',
    desc: '고등학생 및 대학생을 대상으로 사회문제 해결을 위한 AI 아이디어 기획부터 현장 방문, 해결 방안 설계까지 전 과정을 경험하는 챌린지입니다.',
    items: ['Datathon Challenge', 'Ideathon Challenge'],
  },
];

export default function ScienceTripPage() {
  return (
    <article className="space-y-12">
      {/* 타이틀 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Si-Tech Innovation Award</h2>
        <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: '#FF6600' }} />
        <div
          className="rounded-xl p-6 text-white"
          style={{ background: `linear-gradient(135deg, #A0522D, ${ACCENT})` }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-1">
            Science & Technology Innovation
          </p>
          <h3 className="text-xl font-bold mb-2">과학기술혁신대상</h3>
          <p className="text-sm opacity-80 leading-relaxed mb-4">
            대한민국 과학기술 혁신 성과를 발굴하고 미래 인재와 혁신기업을 지원하는 대표적인 과학기술 어워드 행사
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold">
              <CalendarDays size={13} />
              2005년 ~ 현재
            </div>
            <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold">
              <MapPin size={13} />
              연례 7월 개최
            </div>
          </div>
        </div>
      </div>

      {/* 사업 실적 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">사업 실적</h3>
        <p className="text-sm text-gray-500 mb-5">
          2022년 출범 이후 매년 전국 규모로 개최되어 온 과학기술혁신대상은 고등학생·대학생부터 과학기술 혁신기업까지 폭넓은 참가자를 아우르며, 대한민국 과학기술 생태계의 핵심 어워드로 자리매김하였습니다. 2025년 대회는 성균관대학교 자연과학캠퍼스 및 경기도 AI미디어센터에서 성황리에 개최되었습니다.
        </p>

        {/* 핵심 수치 */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {highlights.map((h) => (
            <div
              key={h.unit}
              className="rounded-xl border border-amber-100 bg-amber-50/50 p-5 text-center"
            >
              <p className="text-3xl font-extrabold" style={{ color: ACCENT }}>
                {h.value}
              </p>
              <p className="text-sm font-bold text-gray-700 mb-1">{h.unit}</p>
              <p className="text-xs text-gray-500 leading-snug">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* 주요 특징 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-xl border border-gray-200 p-5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white mb-3"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Icon size={18} />
                </div>
                <p className="font-bold text-gray-800 mb-1.5">{f.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 사업 내용 및 목표 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">사업 내용 및 목표</h3>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          과학기술혁신대상(Si-Tech Innovation Award)은 <strong className="text-gray-700">과학문화와 인공지능(AI) 확산</strong>을 기반으로 혁신 성과와 성장 역량을 갖춘 기업과 미래 인재를 발굴·지원하기 위해 개최되는 과학기술 분야 어워드 및 경진대회입니다. 공정하고 투명한 경쟁의 장을 마련하여 대한민국 과학기술 산업의 미래를 주도할 우수 기술과 혁신기업을 발굴하고 산업 생태계의 지속적 확산을 도모합니다.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 핵심 목표 */}
          <div>
            <p className="text-sm font-bold text-gray-700 mb-3">핵심 목표</p>
            <div className="space-y-3">
              {goals.map((g) => {
                const Icon = g.icon;
                return (
                  <div key={g.title} className="flex gap-3">
                    <div
                      className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white mt-0.5"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{g.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{g.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 운영 특징 */}
          <div>
            <p className="text-sm font-bold text-gray-700 mb-3">운영 특징</p>
            <div className="space-y-3">
              {operationFeatures.map((o) => (
                <div
                  key={o.title}
                  className="rounded-lg border border-gray-200 p-4 bg-amber-50/30"
                >
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{o.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 강조 문구 */}
        <div className="mt-5 rounded-lg border-l-4 bg-amber-50 p-4" style={{ borderColor: ACCENT }}>
          <p className="text-sm text-gray-700 leading-relaxed">
            과학기술혁신대상은 단순한 시상식을 넘어,{' '}
            <strong className="text-gray-900">대한민국 과학기술 혁신 생태계를 연결하고 강화하는 국가 대표 과학기술 플랫폼</strong>으로서의 역할을 수행합니다.
          </p>
        </div>
      </section>

      {/* 3개 핵심 공모 분야 */}
      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-1">3개 핵심 공모 분야</h3>
        <p className="text-sm text-gray-500 mb-5">
          과학기술혁신대상은 대한민국 과학기술의 다양한 스펙트럼을 포괄하는 세 가지 핵심 분야에서 혁신적인 아이디어와 기술 성과를 발굴합니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {fields.map((field) => {
            const Icon = field.icon;
            return (
              <div
                key={field.title}
                className="rounded-xl border border-gray-200 p-5 hover:border-amber-300 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white mb-3"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Icon size={20} />
                </div>
                <p className="font-bold text-gray-800 mb-2 text-sm leading-snug">{field.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{field.desc}</p>
                {field.items.length > 0 && (
                  <ul className="space-y-1">
                    {field.items.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 참가 문의 */}
      <div className="rounded-xl border-2 p-6" style={{ borderColor: ACCENT }}>
        <div className="flex items-center gap-2 mb-2">
          <Award size={18} style={{ color: ACCENT }} />
          <h3 className="font-bold text-gray-800">참가 신청 안내</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          과학기술혁신대상은 매년 7월 개최됩니다. 고등학생·대학생(학생부)과 과학기술 혁신기업(기업부)이 참가 가능하며, 전국 어디서나 온라인으로 공모 신청이 가능합니다.
        </p>
        <a
          href="mailto:sitech@kise.or.kr"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          style={{ backgroundColor: ACCENT }}
        >
          참가 문의하기
        </a>
      </div>
    </article>
  );
}
