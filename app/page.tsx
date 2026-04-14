import HeroSlider from '@/components/HeroSlider';
import NoticeBoard from '@/components/NoticeBoard';
import RelatedLinks from '@/components/RelatedLinks';
import StatsSection from '@/components/StatsSection';
import Link from 'next/link';
import { ArrowRight, Users, Laptop, FlaskConical, Trophy } from 'lucide-react';

const businesses = [
  {
    icon: Users,
    title: '디지털포용 사업',
    description:
      '어르신, 장애인, 저소득층 등 취약계층의 디지털 접근성 향상을 위한 교육 및 지원 사업',
    href: '/digital/digital-inclusion',
    color: '#B5451B',
    image: '/images/business/digital-inclusion-2.jpg',
  },
  {
    icon: Laptop,
    title: 'SW미래채움',
    description:
      'SW교육 소외 지역 학생들에게 찾아가는 소프트웨어 교육으로 미래 디지털 인재 양성',
    href: '/digital/sw-future',
    color: '#C96B30',
    image: '/images/business/sw-future-2.jpg',
  },
  {
    icon: FlaskConical,
    title: 'Si-Tech Innovation Award',
    description:
      '과학기술 현장 체험 탐방 프로그램으로 청소년의 과학 흥미와 진로 탐색을 지원',
    href: '/digital/science-trip',
    color: '#D4892B',
    image: '/images/business/sitech-2.jpg',
  },
  {
    icon: Trophy,
    title: 'ICT AWARD KOREA',
    description:
      '대한민국 최고의 ICT 인재를 발굴·시상하는 정보통신기술 분야 국내 최고 권위의 시상식',
    href: '/digital/ict-award',
    color: '#A03A1B',
    image: '/images/business/ict-award-3.jpg',
  },
];

export default function HomePage() {
  return (
    <>
      {/* 히어로 슬라이더 */}
      <HeroSlider />

      {/* 협회 성과 */}
      <StatsSection />

      {/* 주요 사업 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6600] mb-2">
              Business
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">주요 사업</h2>
            <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto">
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
                  className="group relative rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 min-h-[240px] md:min-h-[280px]"
                >
                  {/* 배경 이미지 */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${biz.image})` }}
                  />
                  {/* 그라데이션 오버레이 */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to bottom, ${biz.color}99 0%, ${biz.color}ee 100%)`,
                    }}
                  />
                  {/* 콘텐츠 */}
                  <div className="relative z-10 p-6 flex flex-col h-full min-h-[240px] md:min-h-[280px]">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="font-bold text-white text-base mb-2 leading-snug">
                      {biz.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4 flex-1">{biz.description}</p>
                    <div className="flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:gap-2 transition-all">
                      자세히 보기 <ArrowRight size={13} />
                    </div>
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
        <div className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6600] mb-2">
              About KISE
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              디지털 포용 사회 실현을 위한 한국정보과학진흥협회
            </h2>
            <p className="text-sm md:text-base text-white/70 max-w-lg leading-relaxed">
              디지털 신산업 분야 육성 및 SW AI 인재 양성과 디지털 소외계층에 대한 교육확대를 위해
              과학기술정보통신부 소관의 비영리 공익법인으로서 디지털 역량 강화와
              정보 접근성 향상에 앞장서고 있습니다.
            </p>
          </div>
          <div className="flex flex-row sm:flex-row flex-wrap gap-3 shrink-0">
            <Link
              href="/intro/greeting"
              className="px-6 py-3 bg-white text-[#003087] rounded-full font-semibold hover:bg-blue-50 transition-colors text-sm text-center"
            >
              협회소개
            </Link>
            <Link
              href="/digital"
              className="px-6 py-3 border-2 border-white/50 text-white rounded-full font-semibold hover:border-white hover:bg-white/10 transition-colors text-sm text-center"
            >
              주요사업
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
