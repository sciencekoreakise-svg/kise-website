'use client';

import { useEffect } from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.dg-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('dg-visible'); io.unobserve(e.target); }
        });
      },
      { threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── 갤러리 ── */
type Fit = 'cover' | 'contain';
function PhotoGallery({ alts, srcs, fits }: { alts: [string, string, string]; srcs?: [string, string, string]; fits?: [Fit, Fit, Fit] }) {
  const imgs = srcs ?? [null, null, null];
  const f: [Fit, Fit, Fit] = fits ?? ['cover', 'cover', 'cover'];
  return (
    <div className="dg-gallery dg-reveal">
      <div className="dg-gal-main">
        {imgs[0]
          ? <img src={imgs[0]} alt={alts[0]} style={{ width: '100%', height: '100%', objectFit: f[0], display: 'block', background: '#f1f5f9' }} />
          : <div className="dg-img-ph">{alts[0]}</div>}
      </div>
      <div className="dg-gal-sub">
        {imgs[1]
          ? <img src={imgs[1]} alt={alts[1]} style={{ width: '100%', height: '100%', objectFit: f[1], display: 'block', background: '#f1f5f9' }} />
          : <div className="dg-img-ph">{alts[1]}</div>}
      </div>
      <div className="dg-gal-sub">
        {imgs[2]
          ? <img src={imgs[2]} alt={alts[2]} style={{ width: '100%', height: '100%', objectFit: f[2], display: 'block', background: '#f1f5f9' }} />
          : <div className="dg-img-ph">{alts[2]}</div>}
      </div>
    </div>
  );
}

/* ── 섹션 구분선 ── */
function Divider() {
  return <div className="dg-divider" />;
}

export default function DigitalPage() {
  useReveal();

  return (
    <article>
      <style>{`
        /* ── 공통 변수 ── */
        .dg-wrap { --card: #16161f; --border: rgba(255,255,255,0.07); --muted: #8888a0; }

        /* ── reveal ── */
        .dg-reveal { opacity:0; transform:translateY(20px); transition:opacity .6s ease, transform .6s ease; }
        .dg-reveal.dg-visible { opacity:1; transform:none; }
        .dg-d1 { transition-delay:.1s; }
        .dg-d2 { transition-delay:.2s; }
        .dg-d3 { transition-delay:.3s; }
        .dg-d4 { transition-delay:.4s; }

        /* ── 구분선 ── */
        .dg-divider { height:1px; background:linear-gradient(to right,transparent,#e2e8f0,transparent); margin:2rem 0; }

        /* ── 섹션 ── */
        .dg-section { padding:2.5rem 0; position:relative; }
        .dg-num {
          font-family:'Bebas Neue',sans-serif;
          font-size:5rem;
          line-height:1;
          position:absolute;
          top:1rem; left:-0.5rem;
          user-select:none; pointer-events:none;
          color:color-mix(in srgb, var(--c) 10%, transparent);
        }

        /* ── 태그 ── */
        .dg-tag {
          display:inline-flex; align-items:center; gap:.4rem;
          font-size:.68rem; letter-spacing:.12em; text-transform:uppercase;
          padding:.28rem .75rem; border-radius:100px; border:1px solid;
          margin-bottom:1rem;
          color:var(--c);
          border-color:color-mix(in srgb, var(--c) 40%, transparent);
          background:color-mix(in srgb, var(--c) 8%, transparent);
        }

        /* ── 제목 ── */
        .dg-title {
          font-size:clamp(1.4rem,3vw,2rem);
          font-weight:700; line-height:1.25;
          margin-bottom:1rem; color:#1a1a2e;
        }
        .dg-title small { font-size:.5em; font-weight:400; color:#8888a0; }

        /* ── 설명 ── */
        .dg-desc { font-size:.95rem; line-height:1.85; color:#555; max-width:680px; margin-bottom:1.2rem; }
        .dg-desc strong { color:#1a1a2e; font-weight:600; }

        /* ── 갤러리 ── */
        .dg-gallery {
          display:grid;
          grid-template-columns:2fr 1fr 1fr;
          grid-template-rows:220px;
          gap:6px; border-radius:10px; overflow:hidden;
          margin:1.2rem 0 1.5rem;
        }
        .dg-gal-main,.dg-gal-sub { overflow:hidden; }
        .dg-img-ph {
          width:100%; height:100%;
          background:#f1f5f9;
          display:flex; align-items:center; justify-content:center;
          font-size:.75rem; color:#94a3b8;
        }

        /* ── 정보 뱃지 ── */
        .dg-info { display:flex; flex-wrap:wrap; gap:.5rem; margin-bottom:1.2rem; }
        .dg-badge {
          font-size:.72rem; padding:.3rem .85rem; border-radius:100px;
          background:#f8fafc; border:1px solid #e2e8f0; color:#64748b;
        }
        .dg-badge span { color:#1a1a2e; font-weight:600; }

        /* ── 통계 그리드 ── */
        .dg-stats {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(120px,1fr));
          gap:1px; background:#e2e8f0;
          border:1px solid #e2e8f0; border-radius:10px; overflow:hidden;
          margin-bottom:1.5rem;
        }
        .dg-stat { background:var(--card); padding:1.2rem 1rem; text-align:center; }
        .dg-stat-num {
          font-family:'Bebas Neue',sans-serif;
          font-size:2rem; line-height:1; margin-bottom:.25rem; color:var(--c);
        }
        .dg-stat-label { font-size:.68rem; color:var(--muted); font-weight:500; letter-spacing:.04em; margin-bottom:.2rem; }
        .dg-stat-sub { font-size:.62rem; color:rgba(255,255,255,.3); }

        /* ── 기능 카드 그리드 ── */
        .dg-features { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:.85rem; margin-bottom:1.2rem; }
        .dg-card {
          background:var(--card); border:1px solid var(--border);
          border-radius:10px; padding:1.2rem;
          transition:border-color .25s, transform .25s;
        }
        .dg-card:hover { transform:translateY(-2px); border-color:color-mix(in srgb, var(--c) 40%, transparent); }
        .dg-card-icon { font-size:1.4rem; margin-bottom:.6rem; }
        .dg-card-title { font-size:.85rem; font-weight:700; margin-bottom:.4rem; color:#e5e5f0; }
        .dg-card-desc { font-size:.76rem; color:var(--muted); line-height:1.65; }

        /* ── 하이라이트 박스 ── */
        .dg-highlight {
          border-radius:10px; padding:1.2rem 1.5rem; margin-bottom:1.2rem;
          border-left:3px solid var(--c);
          background:color-mix(in srgb, var(--c) 5%, var(--card));
        }
        .dg-highlight h3 { font-size:.9rem; font-weight:700; margin-bottom:.4rem; color:#e5e5f0; }
        .dg-highlight p { font-size:.82rem; color:var(--muted); line-height:1.75; }

        /* ── 만족도 바 ── */
        .dg-sat { display:flex; flex-direction:column; gap:.8rem; margin-bottom:1.2rem; }
        .dg-sat-row { display:flex; align-items:center; gap:.8rem; }
        .dg-sat-label { font-size:.75rem; color:var(--muted); width:76px; flex-shrink:0; }
        .dg-sat-bg { flex:1; height:5px; background:rgba(255,255,255,.08); border-radius:100px; overflow:hidden; }
        .dg-sat-fill { height:100%; border-radius:100px; background:var(--c); transform-origin:left; animation:dgBarGrow 1.2s ease-out forwards; }
        @keyframes dgBarGrow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        .dg-sat-pct { font-size:.75rem; font-weight:700; width:42px; text-align:right; color:var(--c); }

        /* ── 컬러 테마 ── */
        .dg-s1{--c:#e05c5c} .dg-s2{--c:#f08c3a} .dg-s3{--c:#f0c83a}
        .dg-s4{--c:#5cb87a} .dg-s5{--c:#4f8ef7} .dg-s6{--c:#7c5cbf}
        .dg-s7{--c:#5cbfc0} .dg-s8{--c:#c05c8c} .dg-s9{--c:#8cbf5c}

        /* ── 반응형 ── */
        @media(max-width:640px) {
          .dg-gallery { grid-template-columns:1fr; grid-template-rows:180px 100px 100px; }
          .dg-features { grid-template-columns:1fr; }
          .dg-stats { grid-template-columns:repeat(2,1fr); }
          .dg-num { font-size:3.5rem; }
        }
      `}</style>

      <h2 className="text-2xl font-bold text-gray-900 mb-1">디지털확산 사업</h2>
      <div className="w-10 h-1 rounded mb-6" style={{ backgroundColor: '#FF6600' }} />

      <div className="dg-wrap">

        {/* ── S1: ICT AWARD KOREA ── */}
        <div className="dg-section dg-s1">
          <div className="dg-num">01</div>
          <div className="dg-tag dg-reveal">🏆 어워드 / 2004 ~ 현재</div>
          <h3 className="dg-title dg-reveal dg-d1">ICT AWARD KOREA</h3>
          <p className="dg-desc dg-reveal dg-d2">
            2004년부터 현재까지, <strong>대한민국 ICT 산업의 혁신과 디지털 기술 발전</strong>을 선도해온 국내 대표 ICT 분야 시상식입니다.
            매년 연례 행사로 진행되며, 웹·모바일·AI·디지털 콘텐츠 등 다양한 분야에서 혁신을 이끈 기관과 프로젝트를 조명합니다.
          </p>
          <PhotoGallery
            alts={['ICT AWARD KOREA 시상식', 'ICT 어워드 행사', 'ICT 어워드 수상']}
            srcs={[
              '/images/business/ict-award-1.jpg',
              '/images/business/ict-award-2.jpg',
              '/images/business/ict-award-3.jpg',
            ]}
          />
          <div className="dg-info dg-reveal dg-d3">
            <div className="dg-badge"><span>최초 개최</span> 2004년</div>
            <div className="dg-badge"><span>개최 주기</span> 매년 5월</div>
            <div className="dg-badge"><span>주최</span> 한국정보과학진흥협회 · 전자신문</div>
          </div>
          <div className="dg-features dg-reveal dg-d3">
            <div className="dg-card"><div className="dg-card-icon">🌐</div><div className="dg-card-title">ICT 혁신 서비스 시상</div><div className="dg-card-desc">웹 서비스 및 플랫폼, 모바일 서비스 및 앱, AI·데이터 기반 서비스, 디지털 콘텐츠 및 UX 서비스 부문</div></div>
            <div className="dg-card"><div className="dg-card-icon">📣</div><div className="dg-card-title">ICT 산업 성과 확산</div><div className="dg-card-desc">우수 ICT 기업 및 프로젝트 발굴, 산업계·학계·공공기관 참여 확대, ICT 기술 트렌드 공유</div></div>
            <div className="dg-card"><div className="dg-card-icon">🤝</div><div className="dg-card-title">산학연 협력 네트워크</div><div className="dg-card-desc">ICT 기업 및 스타트업 참여, 대학 및 연구기관 협력, 디지털 산업 생태계 확산</div></div>
            <div className="dg-card"><div className="dg-card-icon">🎓</div><div className="dg-card-title">창의와 코딩 학생부</div><div className="dg-card-desc">초중고등학생을 대상으로 알고리즘 프로그래밍 능력 평가</div></div>
          </div>
          <div className="dg-highlight dg-reveal dg-d4">
            <h3>행사 의의</h3>
            <p>단순한 시상을 넘어 ICT 산업의 혁신 사례를 발굴하고 디지털 기술 발전과 정보문화 진흥에 기여하는 국내 대표 ICT 시상 행사. 20여 년간 이어온 신뢰와 전통.</p>
          </div>
        </div>

        <Divider />

        {/* ── S2: 과학기술혁신대상 ── */}
        <div className="dg-section dg-s2">
          <div className="dg-num">02</div>
          <div className="dg-tag dg-reveal">🔬 어워드 / 2005 ~ 현재</div>
          <h3 className="dg-title dg-reveal dg-d1">과학기술혁신대상 <small>Si-Tech Innovation Award</small></h3>
          <p className="dg-desc dg-reveal dg-d2">
            대한민국 과학기술 혁신 성과를 발굴하고 미래 인재와 혁신기업을 지원하는 대표적인 과학기술 어워드 행사.{' '}
            <strong>2005년부터 매년 7월</strong> 개최되며, AI·스마트팩토리·창의과학 등 3개 핵심 분야를 아우릅니다.
          </p>
          <PhotoGallery
            alts={['과학기술혁신대상', '혁신대상 행사', '혁신대상 시상']}
            srcs={[
              '/images/business/sitech-2.jpg',
              '/images/business/sitech-1.jpg',
              '/images/business/sitech-3.jpg',
            ]}
            fits={['cover', 'cover', 'cover']}
          />
          <div className="dg-info dg-reveal dg-d3">
            <div className="dg-badge"><span>개최</span> 매년 7월</div>
            <div className="dg-badge"><span>참가 영역</span> 학생부 · 기업부</div>
            <div className="dg-badge"><span>협력</span> 성균관대학교 · 전자신문</div>
          </div>
          <div className="dg-stats dg-reveal dg-d3">
            <div className="dg-stat"><div className="dg-stat-num">2</div><div className="dg-stat-label">참가 영역</div><div className="dg-stat-sub">학생부 · 기업부</div></div>
            <div className="dg-stat"><div className="dg-stat-num">3</div><div className="dg-stat-label">핵심 분야</div><div className="dg-stat-sub">AI·스마트팩토리·창의과학</div></div>
            <div className="dg-stat"><div className="dg-stat-num">6</div><div className="dg-stat-label">공모 부문</div><div className="dg-stat-sub">세분화된 성과 발굴</div></div>
          </div>
          <div className="dg-features dg-reveal dg-d4">
            <div className="dg-card"><div className="dg-card-icon">🤖</div><div className="dg-card-title">AI 기술혁신 분야</div><div className="dg-card-desc">초거대·경량 AI, 클라우드, 반도체, 네트워크 등 핵심 AI 기술과 스마트 제조·디지털 헬스케어 성과 발굴</div></div>
            <div className="dg-card"><div className="dg-card-icon">🏭</div><div className="dg-card-title">스마트 팩토리 & AI 머신비전</div><div className="dg-card-desc">AI 스마트 팩토리 머신비전 하드웨어·소프트웨어 부문, 제조 현장 효율성 극대화 기술 평가</div></div>
            <div className="dg-card"><div className="dg-card-icon">🎯</div><div className="dg-card-title">AI 창의과학 학생부</div><div className="dg-card-desc">Datathon Challenge · Ideathon Challenge — 고등학생·대학생 대상 AI 아이디어 기획부터 해결 방안 설계까지</div></div>
          </div>
        </div>

        <Divider />

        {/* ── S3: SW미래채움 ── */}
        <div className="dg-section dg-s3">
          <div className="dg-num">03</div>
          <div className="dg-tag dg-reveal">💻 교육사업 / 2025 ~ 현재</div>
          <h3 className="dg-title dg-reveal dg-d1">SW미래채움</h3>
          <p className="dg-desc dg-reveal dg-d2">
            과학기술정보통신부와 지방자치단체가 공동으로 추진하는 <strong>지역 기반 SW·AI 교육 사업</strong>.
            초·중·고 학생을 대상으로 코딩, Python, AI 교육 및 로봇·피지컬 컴퓨팅 프로젝트 기반 학습을 운영합니다.
          </p>
          <PhotoGallery
            alts={['SW미래채움', 'SW미래채움 활동', 'SW미래채움 활동']}
            srcs={[
              '/images/business/sw-future-1.jpg',
              '/images/business/sw-future-2.jpg',
              '/images/business/sw-future-3.jpg',
            ]}
          />
          <div className="dg-stats dg-reveal dg-d3">
            <div className="dg-stat"><div className="dg-stat-num">207</div><div className="dg-stat-label">캠프 운영</div><div className="dg-stat-sub">SW·AI 교육 캠프</div></div>
            <div className="dg-stat"><div className="dg-stat-num">2,852</div><div className="dg-stat-label">학생 참여</div><div className="dg-stat-sub">초·중·고 학생</div></div>
            <div className="dg-stat"><div className="dg-stat-num">2,731</div><div className="dg-stat-label">교육 이수</div><div className="dg-stat-sub">전 과정 이수 완료</div></div>
            <div className="dg-stat"><div className="dg-stat-num">1,800+</div><div className="dg-stat-label">AI 페스티벌</div><div className="dg-stat-sub">학생·학부모 참여</div></div>
          </div>
          <div className="dg-sat dg-reveal dg-d3">
            <div className="dg-sat-row"><div className="dg-sat-label">학생 만족도</div><div className="dg-sat-bg"><div className="dg-sat-fill" style={{ width: '90.8%' }} /></div><div className="dg-sat-pct">90.8%</div></div>
            <div className="dg-sat-row"><div className="dg-sat-label">교사 만족도</div><div className="dg-sat-bg"><div className="dg-sat-fill" style={{ width: '98.9%' }} /></div><div className="dg-sat-pct">98.9%</div></div>
            <div className="dg-sat-row"><div className="dg-sat-label">학부모 만족도</div><div className="dg-sat-bg"><div className="dg-sat-fill" style={{ width: '99.2%' }} /></div><div className="dg-sat-pct">99.2%</div></div>
          </div>
          <div className="dg-features dg-reveal dg-d4">
            <div className="dg-card"><div className="dg-card-icon">📚</div><div className="dg-card-title">SW·AI 교육 프로그램</div><div className="dg-card-desc">코딩, Python, AI 교육 및 로봇·피지컬 컴퓨팅 프로젝트 기반 학습 운영</div></div>
            <div className="dg-card"><div className="dg-card-icon">🏕</div><div className="dg-card-title">캠프 및 체험</div><div className="dg-card-desc">방학 집중 캠프, AI 로봇·스마트시티 체험, 데이터 분석 및 알고리즘 프로그램 운영</div></div>
            <div className="dg-card"><div className="dg-card-icon">🏆</div><div className="dg-card-title">페스티벌 및 경진대회</div><div className="dg-card-desc">SW 발명 경진대회, 데이터 아이디어톤, 학생 작품 전시 및 발표 행사 개최</div></div>
            <div className="dg-card"><div className="dg-card-icon">🌱</div><div className="dg-card-title">SW 교육 생태계 구축</div><div className="dg-card-desc">지역 강사 양성, 교육기관·대학 협력 운영, SW 교육 거점센터 구축 및 확산</div></div>
          </div>
        </div>

        <Divider />

        {/* ── S4: 디지털포용 사업 ── */}
        <div className="dg-section dg-s4">
          <div className="dg-num">04</div>
          <div className="dg-tag dg-reveal">📱 포용 교육 / 2024 ~ 2026</div>
          <h3 className="dg-title dg-reveal dg-d1">디지털포용 사업</h3>
          <p className="dg-desc dg-reveal dg-d2">
            디지털 소외계층 지원을 통해 <strong>모두가 함께하는 디지털 사회</strong>를 만들어갑니다.
            2024년부터 전국의 노년층과 정보취약계층을 대상으로 맞춤형 디지털 교육을 제공합니다.
          </p>
          <PhotoGallery
            alts={['디지털포용사업', '디지털교육', '디지털교육']}
            srcs={[
              '/images/business/digital-inclusion-1.jpg',
              '/images/business/digital-inclusion-2.jpg',
              '/images/business/digital-inclusion-3.jpg',
            ]}
          />
          <div className="dg-stats dg-reveal dg-d3">
            <div className="dg-stat"><div className="dg-stat-num">8,519</div><div className="dg-stat-label">시니어 교육 이수</div><div className="dg-stat-sub">전국 취약계층 수료자</div></div>
            <div className="dg-stat"><div className="dg-stat-num">112</div><div className="dg-stat-label">문해교육사 양성</div><div className="dg-stat-sub">지역사회 전문 강사 배출</div></div>
            <div className="dg-stat"><div className="dg-stat-num">2+</div><div className="dg-stat-label">년간 운영</div><div className="dg-stat-sub">2024 ~ 2026 지속 확대</div></div>
          </div>
          <div className="dg-features dg-reveal dg-d3">
            <div className="dg-card"><div className="dg-card-icon">📲</div><div className="dg-card-title">스마트폰 활용 교육</div><div className="dg-card-desc">기본 조작부터 앱 활용, 영상통화까지 시니어 눈높이에 맞는 단계별 스마트폰 교육</div></div>
            <div className="dg-card"><div className="dg-card-icon">🏧</div><div className="dg-card-title">키오스크 사용 교육</div><div className="dg-card-desc">음식점·병원·관공서 등 생활 속 키오스크를 자신 있게 이용할 수 있도록 실습 중심 교육</div></div>
            <div className="dg-card"><div className="dg-card-icon">💳</div><div className="dg-card-title">모바일 금융 및 생활 서비스</div><div className="dg-card-desc">인터넷뱅킹, 공공서비스 앱 등 모바일을 통한 생활 편의 서비스 활용 교육</div></div>
            <div className="dg-card"><div className="dg-card-icon">🔒</div><div className="dg-card-title">디지털 생활 안전 교육</div><div className="dg-card-desc">보이스피싱, 개인정보 보호 등 디지털 환경의 위험 요소를 인식하고 대처하는 방법 습득</div></div>
          </div>
          <div className="dg-highlight dg-reveal dg-d4">
            <h3>디지털 문해교육사 양성</h3>
            <p>시니어가 시니어를 가르치는 동료 학습 모델을 통해 더욱 공감 있는 교육이 가능합니다. 양성 과정을 수료한 디지털 문해교육사는 지역 복지관, 경로당, 주민센터 등 생활 밀착형 교육 현장에 배치됩니다.</p>
          </div>
        </div>

        <Divider />

        {/* ── S5: 경기도 찾아가는 배움교실 ── */}
        <div className="dg-section dg-s5">
          <div className="dg-num">05</div>
          <div className="dg-tag dg-reveal">🏫 이동형 교육 / 2019 ~ 현재</div>
          <h3 className="dg-title dg-reveal dg-d1">경기도 찾아가는 배움교실</h3>
          <p className="dg-desc dg-reveal dg-d2">
            교육 취약계층을 위한 이동형 맞춤 교육 지원 사업. <strong>2019년부터 경기도 31개 시·군</strong>에서 전문 강사가 직접 찾아가 맞춤형 교육 프로그램을 제공합니다.
          </p>
          <PhotoGallery
            alts={['찾아가는 배움교실', '배움교실 활동', '배움교실 활동']}
            srcs={[
              '/images/business/learning-class-1.jpg',
              '/images/business/learning-class-2.jpg',
              '/images/business/learning-class-3.jpg',
            ]}
          />
          <div className="dg-stats dg-reveal dg-d3">
            <div className="dg-stat"><div className="dg-stat-num">574</div><div className="dg-stat-label">수혜 기관 수</div><div className="dg-stat-sub">학교, 아동센터, 복지시설</div></div>
            <div className="dg-stat"><div className="dg-stat-num">386K</div><div className="dg-stat-label">누적 학습 지원</div><div className="dg-stat-sub">386,248명 직접 지원</div></div>
            <div className="dg-stat"><div className="dg-stat-num">442</div><div className="dg-stat-label">활동 강사 수</div><div className="dg-stat-sub">검증된 전문 강사진</div></div>
            <div className="dg-stat"><div className="dg-stat-num">50K</div><div className="dg-stat-label">강사 파견 횟수</div><div className="dg-stat-sub">50,321회 현장 방문</div></div>
          </div>
          <div className="dg-features dg-reveal dg-d3">
            <div className="dg-card"><div className="dg-card-icon">🤖</div><div className="dg-card-title">미래교육</div><div className="dg-card-desc">AI, 로봇, 디지털 기술을 활용한 미래 역량 교육으로 4차 산업혁명 시대를 준비합니다.</div></div>
            <div className="dg-card"><div className="dg-card-icon">🎨</div><div className="dg-card-title">창의융합 교육</div><div className="dg-card-desc">다양한 교과를 융합한 창의적 사고력 개발 프로그램으로 문제해결 능력을 기릅니다.</div></div>
            <div className="dg-card"><div className="dg-card-icon">🎵</div><div className="dg-card-title">문화예술 교육</div><div className="dg-card-desc">예술적 감수성과 창의적 표현 능력을 키우는 문화예술 체험 프로그램을 운영합니다.</div></div>
            <div className="dg-card"><div className="dg-card-icon">🌿</div><div className="dg-card-title">인성교육 & 기초학습</div><div className="dg-card-desc">공동체 의식·배려·협력 등 올바른 가치관 형성 및 학습 격차 해소를 위한 기초 지원</div></div>
          </div>
          <div className="dg-highlight dg-reveal dg-d4">
            <h3>교과 연계형 PBL 운영</h3>
            <p>모든 교육 프로그램은 프로젝트 기반 학습(PBL) 방식으로 운영됩니다. 학생들의 창의력, 문제해결 능력, 디지털 역량을 체계적으로 강화하며, 단순 암기식 교육을 넘어 실생활과 연결된 살아있는 배움을 실현합니다.</p>
          </div>
        </div>

        <Divider />

        {/* ── S6: AI 모빌리티 캠프 ── */}
        <div className="dg-section dg-s6">
          <div className="dg-num">06</div>
          <div className="dg-tag dg-reveal">🚗 모빌리티 교육 / 2024년 2~3월</div>
          <h3 className="dg-title dg-reveal dg-d1">AI 모빌리티 캠프</h3>
          <p className="dg-desc dg-reveal dg-d2">
            DSC 공유대학(선문대학교) 지능형전장제어시스템사업단과 협력하여 운영된 미래 모빌리티 교육 프로그램.{' '}
            <strong>자율주행·AI·소프트웨어 기술 기반 인재 양성</strong>의 새로운 기준을 제시합니다.
          </p>
          <PhotoGallery
            alts={['AI모빌리티캠프', '모빌리티 교육', '모빌리티 교육']}
            srcs={[
              '/images/business/ai-mobility-1.jpg',
              '/images/business/ai-mobility-2.jpg',
              '/images/business/ai-mobility-3.jpg',
            ]}
          />
          <div className="dg-info dg-reveal dg-d3">
            <div className="dg-badge"><span>운영 지역</span> 충남·세종·대전</div>
            <div className="dg-badge"><span>협력</span> 선문대학교 지능형전장제어시스템사업단</div>
          </div>
          <div className="dg-stats dg-reveal dg-d3">
            <div className="dg-stat"><div className="dg-stat-num">16회</div><div className="dg-stat-label">캠프 운영 횟수</div><div className="dg-stat-sub">2024년 2~3월 집중 운영</div></div>
            <div className="dg-stat"><div className="dg-stat-num">258명</div><div className="dg-stat-label">총 교육 참여</div><div className="dg-stat-sub">엔트리·파이썬 과정</div></div>
            <div className="dg-stat"><div className="dg-stat-num">114.6%</div><div className="dg-stat-label">목표 초과 달성</div><div className="dg-stat-sub">계획 대비 성과 초과</div></div>
            <div className="dg-stat"><div className="dg-stat-num">98점</div><div className="dg-stat-label">교육 만족도</div><div className="dg-stat-sub">참여 학생 설문 기준</div></div>
          </div>
          <div className="dg-features dg-reveal dg-d4">
            <div className="dg-card"><div className="dg-card-icon">🚦</div><div className="dg-card-title">AI 모빌리티 기초 교육</div><div className="dg-card-desc">엔트리 기반 자율주행 알고리즘 체험과 모빌리티 센서·제어 시스템 이해, 데이터 기반 이동 기술 학습</div></div>
            <div className="dg-card"><div className="dg-card-icon">🐍</div><div className="dg-card-title">Python 기반 모빌리티 프로그래밍</div><div className="dg-card-desc">Python을 활용한 자율주행 프로그램 제작 및 모빌리티 데이터 분석, 실습 중심 프로젝트 교육</div></div>
            <div className="dg-card"><div className="dg-card-icon">🔧</div><div className="dg-card-title">실습 중심 캠프 운영</div><div className="dg-card-desc">1인 1기자재 실습형 교육으로 자율주행 실습 프로젝트를 직접 수행, LMS 기반 사전·사후 학습</div></div>
            <div className="dg-card"><div className="dg-card-icon">🎯</div><div className="dg-card-title">미래 모빌리티 진로 교육</div><div className="dg-card-desc">모빌리티 산업 전반에 대한 이해와 AI·자율주행 기술 분야의 진로 탐색, 지역 산업 및 대학 연계</div></div>
          </div>
          <div className="dg-highlight dg-reveal dg-d4">
            <h3>디지털 교육 격차 해소</h3>
            <p>인구소멸지역, 교육 소외지역, 다문화 가정, 저소득층 등 사회적 배려 대상 학생의 참여 비율을 전체의 <strong style={{ color: 'var(--c)' }}>72%</strong>까지 확대함으로써, 디지털 교육 격차 해소에 실질적으로 기여하였습니다.</p>
          </div>
        </div>

        <Divider />

        {/* ── S7: 모빌리티 창의과학 신기술 경진대회 ── */}
        <div className="dg-section dg-s7">
          <div className="dg-num">07</div>
          <div className="dg-tag dg-reveal">🏁 경진대회 / 2023년</div>
          <h3 className="dg-title dg-reveal dg-d1">모빌리티 창의과학 신기술 경진대회</h3>
          <p className="dg-desc dg-reveal dg-d2">
            미래 모빌리티 산업의 창의적 인재를 발굴하고, 충청권 디지털 인재 양성을 목표로 운영된 과학기술 경진대회.{' '}
            <strong>2023년 성공적으로 개최</strong>되었으며, 전자신문 등 다수 매체에 보도되었습니다.
          </p>
          <PhotoGallery
            alts={['모빌리티 경진대회', '경진대회 현장', '경진대회 시상']}
            srcs={[
              '/images/business/mobility-contest-1.jpg',
              '/images/business/mobility-contest-2.jpg',
              '/images/business/mobility-contest-3.jpg',
            ]}
          />
          <div className="dg-stats dg-reveal dg-d3">
            <div className="dg-stat"><div className="dg-stat-num">755</div><div className="dg-stat-label">총 참가자</div><div className="dg-stat-sub">초·중·고·대학생 전 학년</div></div>
            <div className="dg-stat"><div className="dg-stat-num">43</div><div className="dg-stat-label">수상자</div><div className="dg-stat-sub">대상·금상·은상·동상</div></div>
            <div className="dg-stat"><div className="dg-stat-num">3</div><div className="dg-stat-label">참여 지역</div><div className="dg-stat-sub">충남·대전·세종 광역권</div></div>
            <div className="dg-stat"><div className="dg-stat-num">4</div><div className="dg-stat-label">참가 학교급</div><div className="dg-stat-sub">초·중·고·대학교 전 단계</div></div>
          </div>
          <div className="dg-features dg-reveal dg-d3">
            <div className="dg-card"><div className="dg-card-icon">🏎</div><div className="dg-card-title">① 모빌리티 기술 경진대회</div><div className="dg-card-desc">자율주행 및 모빌리티 기술 기반 프로젝트 수행, AI·SW 기반 문제 해결 미션, 팀 발표 및 기술 평가</div></div>
            <div className="dg-card"><div className="dg-card-icon">📖</div><div className="dg-card-title">② 모빌리티 교육 연계 프로그램</div><div className="dg-card-desc">사전 SW·AI 교육 콘텐츠 제공 및 LMS 기반 온라인 학습 운영으로 참가자의 기술 이해도 향상</div></div>
            <div className="dg-card"><div className="dg-card-icon">🎖</div><div className="dg-card-title">③ 시상 및 성과 확산</div><div className="dg-card-desc">과학기술정보통신부 장관상 등 주요 기관상 수여, 대학·기업 전문가 심사, 언론·미디어 홍보</div></div>
          </div>
          <div className="dg-highlight dg-reveal dg-d4">
            <h3>체계적인 학습 시스템 구축</h3>
            <p>대회 운영의 효율성과 참가자 편의를 위해 전용 접수 플랫폼과 LMS(학습관리시스템)를 구축하였습니다. 참가 신청부터 사전 교육, 과제 제출까지 모든 과정을 온라인으로 통합 관리합니다.</p>
          </div>
        </div>

        <Divider />

        {/* ── S8: 디지털새싹 캠프 ── */}
        <div className="dg-section dg-s8">
          <div className="dg-num">08</div>
          <div className="dg-tag dg-reveal">🌱 국가사업 / 2022년</div>
          <h3 className="dg-title dg-reveal dg-d1">디지털새싹 캠프 <small>Digital Sprout</small></h3>
          <p className="dg-desc dg-reveal dg-d2">
            과학기술정보통신부와 교육부가 함께 추진하는 <strong>국가 디지털 인재 양성 프로그램</strong>.
            전국 초·중·고 학생들이 AI·SW 기술을 체험하고 미래 핵심 역량을 키울 수 있도록 지원합니다.
          </p>
          <PhotoGallery
            alts={['디지털새싹캠프', '디지털새싹 활동', '디지털새싹 활동']}
            srcs={[
              '/images/business/digital-sprout-1.jpg',
              '/images/business/digital-sprout-2.jpg',
              '/images/business/digital-sprout-3.jpg',
            ]}
          />
          <div className="dg-stats dg-reveal dg-d3">
            <div className="dg-stat"><div className="dg-stat-num">2,852명</div><div className="dg-stat-label">참여 학생 수</div><div className="dg-stat-sub">목표 대비 101% 초과</div></div>
            <div className="dg-stat"><div className="dg-stat-num">207회</div><div className="dg-stat-label">캠프 운영 횟수</div><div className="dg-stat-sub">전국 집중형·상시형</div></div>
            <div className="dg-stat"><div className="dg-stat-num">6개</div><div className="dg-stat-label">운영 프로그램</div><div className="dg-stat-sub">AI·코딩·데이터·로봇 등</div></div>
            <div className="dg-stat"><div className="dg-stat-num">259명</div><div className="dg-stat-label">참여 전문 인력</div><div className="dg-stat-sub">강사·멘토·교육 전문가</div></div>
          </div>
          <div className="dg-sat dg-reveal dg-d3">
            <div className="dg-sat-row"><div className="dg-sat-label">학생 만족도</div><div className="dg-sat-bg"><div className="dg-sat-fill" style={{ width: '90.8%' }} /></div><div className="dg-sat-pct">90.8%</div></div>
            <div className="dg-sat-row"><div className="dg-sat-label">교사 만족도</div><div className="dg-sat-bg"><div className="dg-sat-fill" style={{ width: '98.9%' }} /></div><div className="dg-sat-pct">98.9%</div></div>
            <div className="dg-sat-row"><div className="dg-sat-label">학부모 만족도</div><div className="dg-sat-bg"><div className="dg-sat-fill" style={{ width: '99.2%' }} /></div><div className="dg-sat-pct">99.2%</div></div>
          </div>
          <div className="dg-features dg-reveal dg-d4">
            <div className="dg-card"><div className="dg-card-icon">🧠</div><div className="dg-card-title">인공지능 기초 및 활용</div><div className="dg-card-desc">AI의 개념과 원리를 이해하고, 머신러닝·자연어처리 등 실생활 AI 기술을 직접 체험</div></div>
            <div className="dg-card"><div className="dg-card-icon">💻</div><div className="dg-card-title">코딩 및 소프트웨어 개발</div><div className="dg-card-desc">블록 코딩부터 텍스트 기반 프로그래밍까지, 단계별로 소프트웨어 개발의 즐거움을 경험</div></div>
            <div className="dg-card"><div className="dg-card-icon">📊</div><div className="dg-card-title">데이터 분석 및 디지털 리터러시</div><div className="dg-card-desc">데이터를 수집·분석·시각화하는 과정을 통해 비판적 사고력과 디지털 리터러시를 함께 키움</div></div>
            <div className="dg-card"><div className="dg-card-icon">🤖</div><div className="dg-card-title">로봇·메타버스 미래기술 체험</div><div className="dg-card-desc">로봇 제어, 메타버스 환경 탐구 등 최신 미래기술을 직접 조작하며 창의적 문제 해결 능력 배양</div></div>
          </div>
        </div>

        <Divider />

        {/* ── S9: 청년취업아카데미 ── */}
        <div className="dg-section dg-s9">
          <div className="dg-num">09</div>
          <div className="dg-tag dg-reveal">👔 고용노동부 위탁사업 / 2012 ~ 2021</div>
          <h3 className="dg-title dg-reveal dg-d1">청년취업아카데미 운영</h3>
          <p className="dg-desc dg-reveal dg-d2">
            고용노동부·한국산업인력공단 주관의 국가 청년 인재양성 사업으로, <strong>2012년부터 2021년까지 10년간</strong> ICT 산업 실무 중심 교육과 취업 연계를 성공적으로 운영한 사업입니다.
            협회는 운영기관으로 선정되어 <strong>기관평가 A등급</strong>을 획득하며 높은 사업 수행 역량을 입증하였습니다.
          </p>
          <div className="dg-stats dg-reveal dg-d3">
            <div className="dg-stat"><div className="dg-stat-num">3,080</div><div className="dg-stat-label">교육인원</div><div className="dg-stat-sub">ICT 분야 청년 대학생 및 구직자</div></div>
            <div className="dg-stat"><div className="dg-stat-num">2,833</div><div className="dg-stat-label">수료인원</div><div className="dg-stat-sub">높은 수료율로 완성도 입증</div></div>
            <div className="dg-stat"><div className="dg-stat-num">1,814</div><div className="dg-stat-label">취업지원</div><div className="dg-stat-sub">실질적인 취업 연계 성과</div></div>
            <div className="dg-stat"><div className="dg-stat-num">385</div><div className="dg-stat-label">참여기업</div><div className="dg-stat-sub">ICT 전문기업 네트워크</div></div>
          </div>
          <div className="dg-features dg-reveal dg-d3">
            <div className="dg-card"><div className="dg-card-icon">📐</div><div className="dg-card-title">맞춤형 교육과정</div><div className="dg-card-desc">ICT 산업 수요를 반영한 실무 중심 커리큘럼 설계 및 운영. 이론과 실습의 균형 있는 구성으로 현장 적응력 극대화</div></div>
            <div className="dg-card"><div className="dg-card-icon">🛠</div><div className="dg-card-title">실무 프로젝트</div><div className="dg-card-desc">기업 현장의 실제 과제를 반영한 프로젝트 기반 학습(PBL) 운영으로 청년 구직자의 실전 역량 강화</div></div>
            <div className="dg-card"><div className="dg-card-icon">🧑‍🏫</div><div className="dg-card-title">멘토링 프로그램</div><div className="dg-card-desc">ICT 현직 전문가와 연계한 진로 멘토링 및 직무 가이던스 제공으로 취업 준비의 질적 수준 향상</div></div>
            <div className="dg-card"><div className="dg-card-icon">🏢</div><div className="dg-card-title">기업 연계 취업지원</div><div className="dg-card-desc">385개 ICT 전문기업 네트워크를 활용한 채용 연계, 인턴십, 현장실습 기회 제공으로 실질적 취업 성과 창출</div></div>
          </div>
          <div className="dg-info dg-reveal dg-d4">
            <div className="dg-badge">주요 참여 대학: <span>성결대학교 · 수원대학교 · 안양대학교 · 호서대학교 외 다수</span></div>
          </div>
        </div>

      </div>
    </article>
  );
}
