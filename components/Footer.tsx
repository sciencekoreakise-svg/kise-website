import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Printer, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a2b4a' }} className="text-white">
      {/* 패밀리 사이트 바 */}
      <div style={{ backgroundColor: '#003087' }} className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm">
          <span className="font-semibold text-white/60 text-xs uppercase tracking-wider">
            Family Site
          </span>
          <a
            href="http://kise.re.kr/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
          >
            과학기술정보통신인증원 <ExternalLink size={12} />
          </a>
          <a
            href="https://center.kise.or.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
          >
            융합교육센터 <ExternalLink size={12} />
          </a>
          <a
            href="http://cad.or.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
          >
            자격검정사업단 <ExternalLink size={12} />
          </a>
          <a
            href="https://kiseor.cafe24.com/index/index_sgq.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
          >
            과학경진대회 접수시스템 <ExternalLink size={12} />
          </a>
          <a
            href="https://ceo.kise.or.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
          >
            KISE CEO 포럼 <ExternalLink size={12} />
          </a>
          <a
            href="https://www.msit.go.kr/index.do"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
          >
            과학기술정보통신부 <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* 메인 푸터 */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 로고 + 소개 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/kise-w.png"
                alt="한국정보과학진흥협회 로고"
                width={395}
                height={84}
                style={{ height: '38px', width: 'auto' }}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              디지털 포용 사회 실현을 위해 디지털디바이드 해소, SW교육, 과학문화 확산 등
              다양한 공익사업을 수행하는 비영리 공익법인입니다.
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              연락처
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#FF6600]" />
                <span>
                  (우) 14056 경기도 안양시 동안구 벌말로123
                  <br />
                  평촌스마트베이 A동 1410호(관양동 792-2)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="shrink-0 text-[#FF6600]" />
                <span>031-385-9844, 1544-8106</span>
              </li>
              <li className="flex items-center gap-2">
                <Printer size={15} className="shrink-0 text-[#FF6600]" />
                <span>031-383-2088</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0 text-[#FF6600]" />
                <a
                  href="mailto:kise@kise.or.kr"
                  className="hover:text-white transition-colors"
                >
                  kise@kise.or.kr
                </a>
              </li>
              <li className="text-white/50 text-xs">
                사업자등록번호: 138-82-03725 &nbsp;|&nbsp; 대표자: 박승진
              </li>
            </ul>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              바로가기
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-white/70">
              {[
                { label: '인사말', href: '/intro/greeting' },
                { label: '디지털확산', href: '/digital' },
                { label: 'ICT AWARD KOREA', href: '/digital/ict-award' },
                { label: 'Si-Tech Innovation Award', href: '/digital/science-trip' },
                { label: 'SW미래채움', href: '/digital/sw-future' },
                { label: '공지사항', href: '/news/notice' },
                { label: '보도자료', href: '/news/press' },
                { label: 'FAQ', href: '/support/faq' },
                { label: '문의하기', href: '/support/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 카피라이트 */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>
            Copyright © {new Date().getFullYear()} 사단법인 한국정보과학진흥협회. All rights
            reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link href="/support/contact" className="hover:text-white/70 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/support/contact" className="hover:text-white/70 transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
