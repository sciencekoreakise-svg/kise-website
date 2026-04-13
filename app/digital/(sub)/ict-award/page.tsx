import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'ICT AWARD KOREA' };

export default function IctAwardPage() {
  return (
    <article className="space-y-16">
      <style>{`
        .ict-section-badge {
          display: inline-block;
          font-size: 0.72rem;
          padding: 0.25rem 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 100px;
          color: #64748b;
          margin-bottom: 0.75rem;
        }
        .ict-section-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1rem;
          line-height: 1.25;
        }
        .ict-section-desc {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.85;
          max-width: 680px;
        }
        .ict-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ict-card:hover {
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        .ict-card-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.4rem;
        }
        .ict-card-desc {
          font-size: 0.84rem;
          color: #64748b;
          line-height: 1.7;
        }
        .ict-stat-num {
          font-size: 3rem;
          font-weight: 900;
          color: #1e293b;
          line-height: 1;
        }
        .ict-stat-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748b;
          margin-top: 0.4rem;
        }
        .ict-stat-sub {
          font-size: 0.75rem;
          color: #94a3b8;
          margin-top: 0.2rem;
        }
        .ict-program-num {
          width: 2rem; height: 2rem;
          border-radius: 50%;
          background: #3b4fd8;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ict-field-card {
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 1.1rem 1.3rem;
          border-left: 4px solid #3b4fd8;
        }
        .ict-field-title { font-size: 0.95rem; font-weight: 700; color: #1e293b; margin-bottom: 0.35rem; }
        .ict-field-desc { font-size: 0.82rem; color: #64748b; line-height: 1.65; }
        .ict-target-icon { font-size: 2rem; margin-bottom: 0.6rem; }
        .ict-target-title { font-size: 0.9rem; font-weight: 700; color: #1e293b; margin-bottom: 0.35rem; }
        .ict-target-desc { font-size: 0.8rem; color: #64748b; line-height: 1.65; }
        .ict-highlight-box {
          background: #3b4fd8;
          border-radius: 12px;
          padding: 1.5rem 1.75rem;
          color: #fff;
        }
        .ict-ref-card {
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
        }
        .ict-ref-title { font-size: 0.9rem; font-weight: 700; color: #1e293b; margin-bottom: 0.4rem; }
        .ict-ref-desc { font-size: 0.82rem; color: #64748b; line-height: 1.65; margin-bottom: 0.5rem; }
        .ict-ref-link { font-size: 0.82rem; color: #3b4fd8; font-weight: 600; text-decoration: underline; }
        .ict-btn-primary {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.65rem 1.4rem;
          background: #3b4fd8; color: #fff;
          border-radius: 8px; font-size: 0.88rem; font-weight: 600;
          text-decoration: none; transition: background 0.2s;
        }
        .ict-btn-primary:hover { background: #2d3fb5; }
        .ict-btn-outline {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.65rem 1.4rem;
          border: 1.5px solid #cbd5e1; color: #475569;
          border-radius: 8px; font-size: 0.88rem; font-weight: 600;
          text-decoration: none; transition: border-color 0.2s, color 0.2s;
        }
        .ict-btn-outline:hover { border-color: #3b4fd8; color: #3b4fd8; }
      `}</style>

      {/* 페이지 헤더 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">ICT AWARD KOREA</h2>
        <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: '#FF6600' }} />
        <div
          className="rounded-xl p-6 text-white"
          style={{ background: 'linear-gradient(135deg, #7f0000, #cc0000)' }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-1">
            ICT INDUSTRY INNOVATION
          </p>
          <h3 className="text-xl font-bold mb-2">ICT AWARD KOREA</h3>
          <p className="text-sm opacity-80 leading-relaxed mb-4">
            대한민국 ICT 산업의 혁신과 디지털 기술 발전을 선도해온 국내 대표 ICT 분야 시상식
          </p>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold">
              📅 2004년 ~ 현재
            </div>
            <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold">
              📍 연례 개최
            </div>
          </div>
        </div>
      </div>

      {/* ── 소개 ── */}
      <section>
        <div className="ict-section-badge">소개</div>
        <h3 className="ict-section-title">대한민국 ICT 혁신을 발굴하고 시상하다</h3>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="ict-section-desc mb-4">
              ICT AWARD KOREA는 <strong>ICT 기술을 활용한 디지털 혁신 서비스, 플랫폼, 콘텐츠 및 기술 개발 성과를 발굴하고 시상하는 국내 대표 ICT 분야 어워드 행사</strong>입니다.
              2004년 첫 개최 이후 매년 연례 행사로 진행되며, 웹·모바일·AI·디지털 콘텐츠 등 다양한 분야에서 혁신을 이끈 기관과 프로젝트를 조명합니다.
            </p>
            <p className="ict-section-desc">
              ICT 기업, 공공기관, 대학, 스타트업 등 산업 전반에 걸친 폭넓은 참여를 기반으로, 국내 디지털 산업의 성과를 확산하고 ICT 기술 트렌드를 선도하는 플랫폼으로 자리매김하고 있습니다.
              우수 사례 발굴과 포상을 통해 정보문화 진흥과 디지털 혁신 생태계 구축에 기여하고 있습니다.
            </p>
          </div>
          <div className="flex gap-8 shrink-0">
            <div className="text-center">
              <div className="ict-stat-num">2004</div>
              <div className="ict-stat-label">최초 개최 연도</div>
              <div className="ict-stat-sub">20년 이상의 역사와 신뢰</div>
            </div>
            <div className="text-center">
              <div className="ict-stat-num">연례</div>
              <div className="ict-stat-label">매년 5월</div>
              <div className="ict-stat-sub">매년 꾸준히 개최되는 정례 행사</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 사업실적 ── */}
      <section>
        <div className="ict-section-badge">사업실적</div>
        <h3 className="ict-section-title">ICT AWARD KOREA 주요 성과</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: '🏆', title: '대표 시상식 개최', desc: 'ICT 분야 최고 권위의 시상식으로 자리매김하며, 매년 업계의 주목을 받는 국내 대표 ICT 어워드를 개최합니다.' },
            { icon: '💡', title: '혁신 프로젝트 시상', desc: '웹·모바일·AI·디지털 콘텐츠 등 각 분야의 혁신적인 ICT 프로젝트를 엄선하여 포상합니다.' },
            { icon: '🤝', title: '다양한 기관 참여', desc: 'ICT 기업, 공공기관, 대학, 스타트업 등 산학연 전 분야의 기관이 매년 참여하여 생태계를 형성합니다.' },
            { icon: '🚀', title: '성과 확산', desc: '우수 ICT 서비스와 기술 성과를 발굴·공유하여 디지털 혁신 사례가 산업 전반으로 확산될 수 있도록 지원합니다.' },
          ].map((item) => (
            <div key={item.title} className="ict-card">
              <div className="text-xl mb-2">{item.icon}</div>
              <div className="ict-card-title">{item.title}</div>
              <div className="ict-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 주요 프로그램 ── */}
      <section>
        <div className="ict-section-badge">주요 프로그램</div>
        <h3 className="ict-section-title">시상 부문 및 핵심 프로그램</h3>
        <p className="ict-section-desc mb-8">
          ICT AWARD KOREA는 세 가지 핵심 프로그램을 중심으로 ICT 산업의 혁신 사례를 발굴하고 산업 발전을 촉진합니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: '①',
              title: 'ICT 혁신 서비스 시상',
              items: ['웹 서비스 및 플랫폼', '모바일 서비스 및 앱', 'AI·데이터 기반 서비스', '디지털 콘텐츠 및 UX 서비스'],
            },
            {
              num: '②',
              title: 'ICT 산업 성과 확산',
              items: ['우수 ICT 기업 및 프로젝트 발굴', '산업계·학계·공공기관 참여 확대', 'ICT 기술 트렌드 공유'],
            },
            {
              num: '③',
              title: '산학연 협력 네트워크 구축',
              items: ['ICT 기업 및 스타트업 참여', '대학 및 연구기관 협력', '디지털 산업 생태계 확산'],
            },
          ].map((prog) => (
            <div key={prog.title} className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-[#3b4fd8]">{prog.num}</span>
                <span className="font-700 text-base font-bold text-gray-900">{prog.title}</span>
              </div>
              <ul className="space-y-1.5">
                {prog.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3b4fd8] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── 시상 분야 ── */}
      <section>
        <div className="ict-section-badge">시상 분야</div>
        <h3 className="ict-section-title">ICT 혁신 서비스 시상 세부 분야</h3>
        <p className="ict-section-desc mb-8">
          ICT AWARD KOREA는 디지털 전환 시대를 이끄는 다양한 기술 분야를 망라하여 시상합니다.
          각 분야별로 혁신성, 기술성, 활용성, 사회적 기여도 등을 종합적으로 평가하여 최우수 사례를 선정합니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: '웹 서비스 및 플랫폼', desc: '사용자 경험을 혁신하는 웹 기반 서비스와 디지털 플랫폼' },
            { title: '모바일 서비스 및 앱', desc: '일상을 변화시키는 모바일 애플리케이션과 서비스' },
            { title: '창의와 코딩 학생부', desc: '초중고등학생을 대상으로 알고리즘 프로그래밍 능력 평가' },
            { title: 'AI·데이터 기반 서비스', desc: '인공지능과 빅데이터를 활용한 지능형 혁신 서비스' },
            { title: '디지털 콘텐츠 및 UX', desc: '창의적인 디지털 콘텐츠와 사용자 중심 경험 설계' },
          ].map((field) => (
            <div key={field.title} className="ict-field-card">
              <div className="ict-field-title">{field.title}</div>
              <div className="ict-field-desc">{field.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 참여 대상 ── */}
      <section>
        <div className="ict-section-badge">참여 대상</div>
        <h3 className="ict-section-title">함께하는 ICT 생태계 주체들</h3>
        <p className="ict-section-desc mb-8">
          ICT AWARD KOREA는 ICT 산업을 구성하는 모든 주체가 참여하는 열린 시상 행사입니다.
          민간 기업부터 공공기관, 대학, 스타트업까지 다양한 기관이 함께하며 대한민국 디지털 혁신의 현주소를 보여줍니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '🏢', title: 'ICT 기업', desc: '대기업부터 중견·중소기업까지 ICT 기술을 기반으로 혁신적인 서비스를 개발하는 모든 기업이 참여 대상입니다.' },
            { icon: '🏛️', title: '공공기관', desc: '디지털 정부 서비스 및 공공 플랫폼을 운영하며 국민 편의 증진에 기여하는 공공기관의 ICT 성과를 조명합니다.' },
            { icon: '🎓', title: '대학·연구기관', desc: 'ICT 기술 연구 및 인재 양성을 선도하는 대학과 연구기관의 혁신적인 ICT 프로젝트가 참여합니다.' },
            { icon: '🚀', title: '스타트업', desc: '혁신적인 아이디어와 기술로 ICT 산업의 새로운 지평을 열어가는 스타트업의 도전과 성과를 발굴합니다.' },
          ].map((t) => (
            <div key={t.title} className="ict-card text-center">
              <div className="ict-target-icon">{t.icon}</div>
              <div className="ict-target-title">{t.title}</div>
              <div className="ict-target-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 행사 의의 ── */}
      <section>
        <div className="ict-section-badge">행사 의의</div>
        <h3 className="ict-section-title">디지털 혁신 사례를 발굴하고 정보문화 진흥에 기여</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="ict-highlight-box">
            <h4 className="text-base font-bold mb-3">ICT AWARD KOREA의 사명</h4>
            <p className="text-sm leading-relaxed opacity-90">
              본 행사는 단순한 시상을 넘어 <strong>ICT 산업의 혁신 사례를 발굴하고 디지털 기술 발전과 정보문화 진흥에 기여하는 대표적인 ICT 시상 행사</strong>로서의 사명을 다하고 있습니다.
              매년 축적되는 우수 사례들은 대한민국 디지털 전환의 귀중한 자산이 됩니다.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <h4 className="text-base font-bold text-gray-900 mb-3">지속적인 영향력</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              2004년 이후 20여 년간 이어온 ICT AWARD KOREA는 수많은 기업과 기관의 혁신 의지를 고취하고,
              ICT 업계 종사자들이 서로의 성과를 공유하며 함께 성장하는 커뮤니티를 형성해왔습니다.
              앞으로도 대한민국 ICT 산업의 미래를 밝히는 등대 역할을 이어갑니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 참고 자료 ── */}
      <section>
        <div className="ict-section-badge">참고 자료</div>
        <h3 className="ict-section-title">더 많은 정보를 확인하세요</h3>
        <p className="ict-section-desc mb-6">
          ICT AWARD KOREA에 대한 자세한 정보는 공식 홈페이지와 전자신문 관련 기사를 통해 확인하실 수 있습니다.
          참가 신청, 시상 부문별 세부 정보, 역대 수상 사례 등 풍부한 콘텐츠를 제공합니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="ict-ref-card">
            <div className="ict-ref-title">🌐 ICT AWARD KOREA 공식 홈페이지</div>
            <div className="ict-ref-desc">시상 부문, 참가 신청, 역대 수상작 등 행사 전반에 대한 상세 정보를 확인하실 수 있습니다.</div>
            <a href="https://ictawardkorea.com" target="_blank" rel="noopener noreferrer" className="ict-ref-link">https://ictawardkorea.com</a>
          </div>
          <div className="ict-ref-card">
            <div className="ict-ref-title">📰 전자신문 ICT AWARD KOREA 관련 기사</div>
            <div className="ict-ref-desc">ICT 전문 미디어 전자신문에서 ICT AWARD KOREA 관련 뉴스와 심층 분석 기사를 확인하세요.</div>
            <a href="https://www.etnews.com" target="_blank" rel="noopener noreferrer" className="ict-ref-link">https://www.etnews.com</a>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="https://ictawardkorea.com" target="_blank" rel="noopener noreferrer" className="ict-btn-primary">
            공식 홈페이지 방문하기
          </a>
          <a href="https://www.etnews.com" target="_blank" rel="noopener noreferrer" className="ict-btn-outline">
            전자신문 기사 보기
          </a>
        </div>
      </section>
    </article>
  );
}
