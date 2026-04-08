import HeroSlider from '@/components/HeroSlider';
import NoticeBoard from '@/components/NoticeBoard';
import RelatedLinks from '@/components/RelatedLinks';
import Link from 'next/link';
import { ArrowRight, Users, Laptop, FlaskConical, Trophy } from 'lucide-react';

const businesses = [
  {
    icon: Users,
    title: '디지털디바이드 해소',
    description:
      '어르신, 장애인, 저소득층 등 취약계층의 디지털 접근성 향상을 위한 교육 및 지원 사업',
    href: '/digital/divide',
    color: '#003087',
  },
  {
    icon: Laptop,
    title: 'SW미래채움',
    description:
      'SW교육 소외 지역 학생들에게 찾아가는 소프트웨어 교육으로 미래 디지털 인재 양성',
    href: '/digital/sw-future',
    color: '#0055aa',
  },
  {
    icon: FlaskConical,
    title: '사이언스트립',
    description:
      '과학기술 현장 체험 탐방 프로그램으로 청소년의 과학 흥미와 진로 탐색을 지원',
    href: '/digital/science-trip',
    color: '#0066cc',
  },
  {
    icon: Trophy,
    title: 'ICT AWARD KOREA',
    description:
      '대한민국 최고의 ICT 인재를 발굴·시상하는 정보통신기술 분야 국내 최고 권위의 시상식',
    href: '/digital/ict-award',
    color: '#1177d1',
  },
];

const stats = [
  { value: '30+', label: '설립 연혁', sub: '년' },
  { value: '500,000+', label: '교육 수혜자', sub: '명' },
  { value: '200+', label: 'SW교육 참여', sub: '개교' },
  { value: '15', label: 'ICT AWARD', sub: '회' },
];

export default function HomePage() {
  return (
    <>
      {/* 히어로 슬라이더 */}
      <HeroSlider />

      {/* 통계 바 */}
      <div style={{ backgroundColor: '#003087' }} className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">
                  {stat.value}
                  <span className="text-lg text-white/60 ml-1">{stat.sub}</span>
                </div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 주요 사업 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6600] mb-2">
              Business
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">주요 사업</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              한국정보과학진흥협회는 디지털 포용 사회 실현을 위해 다양한 공익사업을 추진하고
              있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businesses.map((biz) => {
              const Icon = biz.icon;
              return (
                <Link
                  key={biz.title}
                  href={biz.href}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: biz.color }}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#003087] transition-colors">
                    {biz.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{biz.description}</p>
                  <div className="flex items-center gap-1 text-xs font-medium text-[#0066cc] opacity-0 group-hover:opacity-100 transition-opacity">
                    자세히 보기 <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 협회 소개 배너 */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #001f5b 0%, #003087 50%, #0055aa 100%)' }}
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6600] mb-2">
              About KISE
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              디지털 포용 사회 실현을 위한
              <br />
              한국정보과학진흥협회
            </h2>
            <p className="text-white/70 max-w-lg leading-relaxed">
              1990년 설립 이래 ICT 발전과 디지털 격차 해소를 위해 지속적으로 노력해 온
              한국정보과학진흥협회는 과학기술정보통신부 산하 비영리 사단법인으로서 국민의
              디지털 역량 강화와 정보 접근성 향상에 앞장서고 있습니다.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link
              href="/intro/greeting"
              className="px-6 py-3 bg-white text-[#003087] rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              협회소개
            </Link>
            <Link
              href="/intro/history"
              className="px-6 py-3 border-2 border-white/50 text-white rounded-full font-semibold hover:border-white hover:bg-white/10 transition-colors"
            >
              연혁 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 공지사항 + 보도자료 탭 */}
      <NoticeBoard />

      {/* 관련기관 링크 배너 */}
      <RelatedLinks />
    </>
  );
}
