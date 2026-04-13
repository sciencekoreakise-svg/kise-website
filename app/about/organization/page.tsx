import type { Metadata } from 'next';
import s from './orgchart.module.css';

export const metadata: Metadata = { title: '조직도 – 한국정보과학진흥협회' };

export default function AboutOrganizationPage() {
  return (
    <div
      style={{
        fontFamily: "'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif",
        background: '#f0f4fa',
        padding: '3rem 1rem',
      }}
    >
      <div className={s.orgContainer}>

        {/* ══════════════════════════════
            1단: 총회 ── 이사회 ── 감사
        ══════════════════════════════ */}
        <div className={s.rowTop}>

          {/* 총회 (왼쪽) */}
          <div className={`${s.sideItem} ${s.sideLeft}`}>
            <div className={`${s.box} ${s.navy}`}>
              <span className={s.boxSub}>General Assembly</span>
              총회
            </div>
            <div className={s.lineH} style={{ width: 60 }} />
          </div>

          {/* 이사회 (중앙) */}
          <div className={`${s.box} ${s.navy}`} style={{ padding: '0.6rem 2.2rem', minWidth: 160 }}>
            <span className={s.boxSub}>Board of Directors</span>
            이사회
          </div>

          {/* 감사 (오른쪽) */}
          <div className={`${s.sideItem} ${s.sideRight}`}>
            <div className={s.lineH} style={{ width: 60 }} />
            <div className={`${s.box} ${s.navy}`}>
              <span className={s.boxSub}>Auditor</span>
              감사
            </div>
          </div>

        </div>

        <div className={s.lineV} style={{ height: 30 }} />

        {/* ══════════════════════════════
            2단: 이사장 + CEO포럼
        ══════════════════════════════ */}
        <div className={s.rowChairmanWrap}>

          <div className={`${s.box} ${s.navy}`} style={{ minWidth: 140 }}>
            <span className={s.boxSub}>Chairman</span>
            이사장
          </div>

          {/* CEO포럼 뱃지 */}
          <div className={s.ceoBadgePos}>
            <div className={s.lineH} style={{ width: 55 }} />
            <div className={s.ceoBadge}>
              <div className={s.t1}>Member Companies</div>
              <div className={s.t2}>KISE CEO포럼</div>
              <div className={s.t3}>회원사 396개사</div>
            </div>
          </div>

        </div>

        <div className={s.lineV} style={{ height: 100 }} />

        {/* ══════════════════════════════════════════════
            3단: 부설기구(좌) + 사무국·본부(중) + 부설기구(우)
            CSS Grid: 200px | 1fr | 200px
        ══════════════════════════════════════════════ */}
        <div className={s.gridLayout}>

          {/* 부설기구 연결선 (T자 형태) */}
          <div className={s.topBranch} />

          {/* ── 왼쪽: 과학기술정보통신인증원 ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className={s.annexBox} style={{ borderColor: '#FF6600' }}>
              <div className={s.annexLabel} style={{ color: '#FF6600', borderColor: '#FF6600' }}>
                부설기구
              </div>
              <div className={`${s.box} ${s.orange}`} style={{ fontSize: '0.8rem', width: '100%' }}>
                과학기술정보통신인증원
              </div>
              <div className={s.lineV} style={{ height: 10 }} />
              <div className={`${s.box} ${s.orangeLine}`} style={{ width: 120 }}>
                인증원장
              </div>
              <div className={s.lineV} style={{ height: 10 }} />
              <div className={`${s.box} ${s.orangeLine}`} style={{ width: 120 }}>
                인증관리단
              </div>
              <div className={s.teamList}>
                <div>— 인증관리팀</div>
                <div>— 인증운영팀</div>
                <div>— 자격검정팀</div>
              </div>
            </div>
          </div>

          {/* ── 중앙: 사무국 + 3본부 ── */}
          <div className={s.secretariatSection}>
            <div className={`${s.box} ${s.navy}`} style={{ minWidth: 140, marginTop: -25 }}>
              <span className={s.boxSub}>Secretariat</span>
              사무국
            </div>

            <div className={s.deptBranchWrapper}>
              <div className={s.lineV} style={{ height: 40 }} />
              <div className={s.deptFork}>
                <div className={s.deptForkHline} />
                <div className={s.deptForkVlines}>
                  <div className={s.lineV} />
                  <div className={s.lineV} />
                  <div className={s.lineV} />
                </div>
              </div>

              <div className={s.deptGroup}>
                {/* 융합인재개발본부 */}
                <div className={s.deptCol}>
                  <div className={`${s.box} ${s.gray}`} style={{ width: 150 }}>
                    융합인재개발본부
                  </div>
                  <div className={s.lineV} style={{ height: 15 }} />
                  <div className={s.whiteCard}>미래인재교육팀</div>
                  <div className={s.whiteCard}>대회행사운영팀</div>
                </div>

                {/* 경영지원운영본부 */}
                <div className={s.deptCol}>
                  <div className={`${s.box} ${s.gray}`} style={{ width: 150 }}>
                    경영지원운영본부
                  </div>
                  <div className={s.lineV} style={{ height: 15 }} />
                  <div className={s.whiteCard}>경영지원팀</div>
                  <div className={s.whiteCard}>회원조직관리팀</div>
                </div>

                {/* 디지털포용본부 */}
                <div className={s.deptCol}>
                  <div className={`${s.box} ${s.gray}`} style={{ width: 150 }}>
                    디지털포용본부
                  </div>
                  <div className={s.lineV} style={{ height: 15 }} />
                  <div className={s.whiteCard}>디지털사회혁신팀</div>
                  <div className={s.whiteCard}>정보문화지원팀</div>
                  <div className={s.whiteCard}>프로젝트운영팀</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 오른쪽: 융합교육센터 ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className={s.annexBox} style={{ borderColor: '#00bfa5' }}>
              <div className={s.annexLabel} style={{ color: '#00bfa5', borderColor: '#00bfa5' }}>
                부설기구
              </div>
              <div className={`${s.box} ${s.teal}`} style={{ width: '100%' }}>
                융합교육센터
              </div>
              <div className={s.lineV} style={{ height: 15 }} />
              <div className={s.teamList}>
                <div>— 자문교수단</div>
                <div>— 교육연구개발팀</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
