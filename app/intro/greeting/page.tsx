import type { Metadata } from 'next';

export const metadata: Metadata = { title: '인사말' };

export default function GreetingPage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">인사말</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-5">
          <p>
            안녕하십니까. 사단법인 한국정보과학진흥협회 이사장 박승진입니다.
          </p>
          <p>
            디지털과 인공지능 기술이 사회 전반을 변화시키는 시대에 기술의 발전은 모두에게 기회가 되어야 합니다.
          </p>
          <p>
            한국정보과학진흥협회는 <strong>사람중심 가치, 모두를 위한 AI, 함께 성장하는 디지털 혁신</strong>이라는 비전을 바탕으로 미래 인재 양성, ICT 산업 생태계 확산, 그리고 디지털 포용사회 실현을 위해 다양한 교육·공익 사업을 추진하고 있습니다.
          </p>
          <p>
            청소년 과학기술 인재 발굴, AI·디지털 역량 교육, 산업과 교육을 연결하는 혁신 플랫폼 구축, 그리고 디지털 소외계층 지원을 통해 누구나 기술의 혜택을 누리는 사회를 만들어가겠습니다.
          </p>
          <p>
            여러분과 함께 미래의 디지털 가치를 만들어 가겠습니다. 감사합니다.
          </p>
          <p className="font-semibold text-gray-900">
            사단법인 한국정보과학진흥협회 이사장 박승진
          </p>
      </div>
    </article>
  );
}
