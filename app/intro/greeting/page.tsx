import type { Metadata } from 'next';

export const metadata: Metadata = { title: '인사말' };

export default function GreetingPage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">인사말</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* 이사장 사진 영역 */}
        <div className="shrink-0 text-center">
          <div
            className="w-48 h-60 rounded-xl flex items-center justify-center text-white text-5xl mx-auto lg:mx-0"
            style={{ backgroundColor: '#003087' }}
          >
            👤
          </div>
          <p className="mt-3 font-bold text-gray-800">홍길동</p>
          <p className="text-sm text-gray-500">사단법인 한국정보과학진흥협회 이사장</p>
        </div>

        {/* 인사말 본문 */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-5">
          <p>
            안녕하십니까, 사단법인 한국정보과학진흥협회(KISE) 홈페이지를 방문해 주신 여러분을
            진심으로 환영합니다.
          </p>
          <p>
            우리 사회는 지금 전례 없는 디지털 대전환의 시대를 맞이하고 있습니다. 인공지능,
            빅데이터, 클라우드 등 첨단 기술이 산업과 일상의 모든 영역을 바꾸어 가고 있는
            가운데, 이러한 변화의 혜택이 사회 구성원 모두에게 고루 돌아갈 수 있도록 하는 것이
            우리 시대의 가장 중요한 과제 중 하나입니다.
          </p>
          <p>
            한국정보과학진흥협회는 1990년 설립 이래 <strong>디지털 포용 사회 실현</strong>을
            핵심 가치로 삼아, 정보 소외계층의 디지털 역량 강화, 소프트웨어 교육 확산,
            과학문화 진흥, ICT 우수 인재 발굴 등 다양한 공익사업을 성실히 수행해 왔습니다.
          </p>
          <p>
            앞으로도 과학기술정보통신부의 정책 방향에 발맞추어, 모든 국민이 디지털 기술의
            혜택을 누릴 수 있는 포용적 디지털 사회 구현을 위해 더욱 최선을 다할 것을
            약속드립니다.
          </p>
          <p>
            협회의 다양한 사업과 활동에 많은 관심과 지원을 부탁드리며, 여러분의 가정과
            사업장에 항상 평화와 번영이 함께하기를 기원합니다.
          </p>
          <p className="font-semibold text-gray-900">
            사단법인 한국정보과학진흥협회 이사장 홍길동 드림
          </p>
        </div>
      </div>
    </article>
  );
}
