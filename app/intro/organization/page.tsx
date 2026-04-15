import type { Metadata } from 'next';

export const metadata: Metadata = { title: '조직도' };

export default function OrganizationPage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">조직도</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />

      {/* ── 모바일: 카드형 세로 레이아웃 ── */}
      <div className="md:hidden space-y-4">

        {/* 의결기관 */}
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: '#1a3a6b' }}>
            의결기관
          </div>
          <div className="divide-y divide-gray-100">
            {['총회 (General Assembly)', '이사회 (Board of Directors)'].map((t) => (
              <div key={t} className="px-4 py-3 text-sm font-semibold text-gray-800">{t}</div>
            ))}
          </div>
        </div>

        {/* 감사 */}
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: '#1a3a6b' }}>
            감사
          </div>
          <div className="px-4 py-3 text-sm font-semibold text-gray-800">감사 (Auditor)</div>
        </div>

        {/* 이사장 */}
        <div className="rounded-xl border-2 overflow-hidden" style={{ borderColor: '#FF6600' }}>
          <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: '#FF6600' }}>
            대표
          </div>
          <div className="px-4 py-3">
            <div className="text-sm font-bold text-gray-900">이사장 (Chairman)</div>
            <div className="mt-2 inline-block border rounded-lg px-3 py-1.5 text-xs" style={{ borderColor: '#FF6600', color: '#FF6600' }}>
              <div className="font-semibold">KISE CEO포럼</div>
              <div className="text-gray-500 text-[11px]">회원사 396개사</div>
            </div>
          </div>
        </div>

        {/* 사무국 */}
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: '#1a3a6b' }}>
            사무국 (Secretariat)
          </div>
          <div className="divide-y divide-gray-100">
            <div className="px-4 py-3">
              <div className="text-xs font-bold text-gray-500 mb-2">융합인재개발본부</div>
              <div className="space-y-1">
                {['미래인재교육팀', '대회행사운영팀'].map((t) => (
                  <div key={t} className="text-sm text-gray-700 pl-3 border-l-2 border-gray-200">{t}</div>
                ))}
              </div>
            </div>
            <div className="px-4 py-3">
              <div className="text-xs font-bold text-gray-500 mb-2">경영지원운영본부</div>
              <div className="space-y-1">
                {['경영지원팀', '회원조직관리팀'].map((t) => (
                  <div key={t} className="text-sm text-gray-700 pl-3 border-l-2 border-gray-200">{t}</div>
                ))}
              </div>
            </div>
            <div className="px-4 py-3">
              <div className="text-xs font-bold text-gray-500 mb-2">디지털포용본부</div>
              <div className="space-y-1">
                {['디지털사회혁신팀', '정보문화지원팀', '프로젝트운영팀'].map((t) => (
                  <div key={t} className="text-sm text-gray-700 pl-3 border-l-2 border-gray-200">{t}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 부설기구 */}
        <div className="rounded-xl border-2 overflow-hidden" style={{ borderColor: '#00bfa5' }}>
          <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: '#00bfa5' }}>
            부설기구
          </div>
          <div className="px-4 py-3">
            <div className="text-sm font-bold text-gray-800 mb-2">융합교육센터</div>
            <div className="space-y-1 pl-3 border-l-2" style={{ borderColor: '#00bfa5' }}>
              {['자문교수단', '교육연구개발팀'].map((t) => (
                <div key={t} className="text-sm text-gray-700">{t}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 overflow-hidden" style={{ borderColor: '#FF6600' }}>
          <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: '#FF6600' }}>
            부설기구
          </div>
          <div className="px-4 py-3">
            <div className="text-sm font-bold text-gray-800 mb-2">과학기술정보통신인증원</div>
            <div className="space-y-1 pl-3 border-l-2 mb-3" style={{ borderColor: '#FF6600' }}>
              {['인증관리단', '인증관리팀', '인증운영팀', '자격검정팀'].map((t) => (
                <div key={t} className="text-sm text-gray-700">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 데스크탑: 기존 조직도 ── */}
      <div className="hidden md:block">
        <style>{`
          .org-container {
            max-width: 1100px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            padding: 0.5rem 1rem;
            font-weight: 700;
            text-align: center;
            white-space: nowrap;
            font-size: 0.9rem;
            position: relative;
            z-index: 2;
          }
          .box-sub { font-size: 0.65rem; font-weight: 400; margin-bottom: 2px; }
          .navy   { background: #1a3a6b; color: #fff; }
          .orange { background: #FF6600; color: #fff; }
          .orange-line { background: #fff; color: #FF6600; border: 2px solid #FF6600; }
          .teal   { background: #00bfa5; color: #fff; }
          .gray   { background: #dce4f0; color: #1a3a6b; border: 1px solid #b0bed4; }
          .white-card {
            background: #fff;
            color: #333;
            border: 1px solid #ccd;
            border-radius: 6px;
            padding: 0.4rem;
            font-size: 0.75rem;
            width: 135px;
            text-align: center;
            margin-bottom: 5px;
          }
          .line-v { width: 2px; background: #99aac0; margin: 0 auto; }
          .line-h { height: 2px; background: #99aac0; }
          .row-top {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            position: relative;
          }
          .side-item { flex: 1; display: flex; align-items: center; }
          .side-left  { justify-content: flex-end; }
          .side-right { justify-content: flex-start; }
          .row-chairman-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            position: relative;
          }
          .ceo-badge-pos {
            position: absolute;
            left: calc(50% + 60px);
            display: flex;
            align-items: center;
            z-index: 1;
          }
          .ceo-badge {
            border: 2px solid #FF6600;
            border-radius: 8px;
            padding: 0.4rem 0.8rem;
            background: #fff;
            text-align: center;
            line-height: 1.2;
          }
          .ceo-badge .t1 { font-size: 0.6rem;  color: #FF6600; font-weight: 600; }
          .ceo-badge .t2 { font-size: 0.85rem; color: #FF6600; font-weight: 700; }
          .ceo-badge .t3 { font-size: 0.65rem; color: #888; }
          .grid-layout {
            display: grid;
            grid-template-columns: 210px 1fr 210px;
            width: 100%;
            align-items: start;
            position: relative;
          }
          .top-branch {
            position: absolute;
            top: -40px;
            left: 105px;
            right: 105px;
            height: 2px;
            background: #99aac0;
          }
          .top-branch::before {
            content: "";
            position: absolute;
            left: 0; top: 0;
            width: 2px; height: 40px;
            background: #99aac0;
          }
          .top-branch::after {
            content: "";
            position: absolute;
            right: 0; top: 0;
            width: 2px; height: 40px;
            background: #99aac0;
          }
          .annex-box {
            border: 2px solid;
            border-radius: 12px;
            padding: 1rem;
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            width: 190px;
          }
          .annex-label {
            font-size: 0.7rem;
            font-weight: 700;
            border: 1px solid;
            padding: 2px 8px;
            border-radius: 4px;
            margin-bottom: 5px;
          }
          .team-list {
            width: 100%;
            font-size: 0.75rem;
            color: #444;
            text-align: left;
            padding-left: 10px;
            margin-top: 5px;
            line-height: 1.6;
          }
          .secretariat-section {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .dept-branch-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .dept-fork {
            width: 530px;
            display: flex;
            flex-direction: column;
          }
          /* hline: 각 열 중심(75px ~ 455px) 구간만 */
          .dept-fork-hline {
            width: 380px;
            margin: 0 auto;
            height: 2px;
            background: #99aac0;
          }
          /* vlines: 380px 컨테이너를 가운데 정렬 후 space-between → 0 / 190 / 380px = 절대 75 / 265 / 455px */
          .dept-fork-vlines {
            display: flex;
            justify-content: space-between;
            width: 380px;
            margin: 0 auto;
          }
          .dept-fork-vlines .line-v { width: 2px; height: 20px; background: #99aac0; margin: 0; }
          .dept-group { display: flex; justify-content: center; gap: 40px; width: 100%; }
          .dept-col   { display: flex; flex-direction: column; align-items: center; }
        `}</style>

        <div className="overflow-x-auto pb-4">
          <div style={{ minWidth: 900 }}>
            <div className="org-container">

              {/* ── 1단: 총회 - 이사회 - 감사 ── */}
              <div className="row-top">
                <div className="side-item side-left">
                  <div className="box navy"><span className="box-sub">General Assembly</span>총회</div>
                  <div className="line-h" style={{ width: 60 }} />
                </div>
                <div className="box navy" style={{ padding: '0.6rem 2.2rem', minWidth: 160 }}>
                  <span className="box-sub">Board of Directors</span>이사회
                </div>
                <div className="side-item side-right">
                  <div className="line-h" style={{ width: 60 }} />
                  <div className="box navy"><span className="box-sub">Auditor</span>감사</div>
                </div>
              </div>

              <div className="line-v" style={{ height: 30 }} />

              {/* ── 2단: 이사장 + CEO포럼 ── */}
              <div className="row-chairman-wrap">
                <div className="box navy" style={{ minWidth: 140 }}>
                  <span className="box-sub">Chairman</span>이사장
                </div>
                <div className="ceo-badge-pos">
                  <div className="line-h" style={{ width: 55 }} />
                  <div className="ceo-badge">
                    <div className="t1">Member Companies</div>
                    <div className="t2">KISE CEO포럼</div>
                    <div className="t3">회원사 396개사</div>
                  </div>
                </div>
              </div>

              <div className="line-v" style={{ height: 100 }} />

              {/* ── 3단: 부설기구(좌) + 사무국/3본부(중) + 부설기구(우) ── */}
              <div className="grid-layout">
                <div className="top-branch" />

                {/* 왼쪽: 과학기술정보통신인증원 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="annex-box" style={{ borderColor: '#FF6600' }}>
                    <div className="annex-label" style={{ color: '#FF6600', borderColor: '#FF6600' }}>부설기구</div>
                    <div className="box orange" style={{ fontSize: '0.8rem', width: '100%' }}>과학기술정보통신인증원</div>
                    <div className="line-v" style={{ height: 10 }} />
                    <div className="box orange-line" style={{ width: 120 }}>인증관리단</div>
                    <div className="team-list">
                      <div>— 인증관리팀</div>
                      <div>— 인증운영팀</div>
                      <div>— 자격검정팀</div>
                    </div>
                  </div>
                </div>

                {/* 중앙: 사무국 + 3본부 */}
                <div className="secretariat-section">
                  <div className="box navy" style={{ minWidth: 140, marginTop: -25 }}>
                    <span className="box-sub">Secretariat</span>사무국
                  </div>
                  <div className="dept-branch-wrapper">
                    <div className="line-v" style={{ height: 40 }} />
                    <div className="dept-fork">
                      <div className="dept-fork-hline" />
                      <div className="dept-fork-vlines">
                        <div className="line-v" />
                        <div className="line-v" />
                        <div className="line-v" />
                      </div>
                    </div>
                    <div className="dept-group">
                      <div className="dept-col">
                        <div className="box gray" style={{ width: 150 }}>융합인재개발본부</div>
                        <div className="line-v" style={{ height: 15 }} />
                        <div className="white-card">미래인재교육팀</div>
                        <div className="white-card">대회행사운영팀</div>
                      </div>
                      <div className="dept-col">
                        <div className="box gray" style={{ width: 150 }}>경영지원운영본부</div>
                        <div className="line-v" style={{ height: 15 }} />
                        <div className="white-card">경영지원팀</div>
                        <div className="white-card">회원조직관리팀</div>
                      </div>
                      <div className="dept-col">
                        <div className="box gray" style={{ width: 150 }}>디지털포용본부</div>
                        <div className="line-v" style={{ height: 15 }} />
                        <div className="white-card">디지털사회혁신팀</div>
                        <div className="white-card">정보문화지원팀</div>
                        <div className="white-card">프로젝트운영팀</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 오른쪽: 융합교육센터 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="annex-box" style={{ borderColor: '#00bfa5' }}>
                    <div className="annex-label" style={{ color: '#00bfa5', borderColor: '#00bfa5' }}>부설기구</div>
                    <div className="box teal" style={{ width: '100%' }}>융합교육센터</div>
                    <div className="line-v" style={{ height: 15 }} />
                    <div className="team-list">
                      <div>— 자문교수단</div>
                      <div>— 교육연구개발팀</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
