import { ExternalLink } from 'lucide-react';

const links = [
  {
    name: '과학기술정보통신부',
    shortName: 'MSIT',
    href: 'https://www.msit.go.kr',
    description: '주무부처',
    color: '#003087',
  },
  {
    name: '과학기술정보통신인증원',
    shortName: 'KISE 인증원',
    href: 'https://kise.re.kr',
    description: '인증 사업 기관',
    color: '#0055aa',
  },
  {
    name: '자격검정사업단',
    shortName: 'CAD',
    href: 'https://cad.or.kr',
    description: '자격 검정 기관',
    color: '#005db8',
  },
  {
    name: '한국지능정보사회진흥원',
    shortName: 'NIA',
    href: 'https://www.nia.or.kr',
    description: '정보화 진흥 기관',
    color: '#0066cc',
  },
  {
    name: '정보통신산업진흥원',
    shortName: 'NIPA',
    href: 'https://www.nipa.kr',
    description: 'ICT 산업 진흥',
    color: '#1177d1',
  },
  {
    name: 'IAF',
    shortName: 'IAF',
    href: 'https://www.iaf.nu',
    description: '국제인정기구포럼',
    color: '#2288d9',
  },
];

export default function RelatedLinks() {
  return (
    <section className="py-12" style={{ backgroundColor: '#f0f4f9' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6600] mb-1">
              Related Links
            </p>
            <h2 className="text-xl font-bold text-gray-900">관련 기관</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
            >
              {/* 아이콘 영역 */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mb-3 transition-transform group-hover:scale-110"
                style={{ backgroundColor: link.color }}
              >
                {link.shortName.slice(0, 2)}
              </div>
              <div className="text-xs font-semibold text-gray-800 leading-tight mb-1 break-keep">
                {link.name}
              </div>
              <div className="text-[11px] text-gray-400">{link.description}</div>
              <ExternalLink
                size={11}
                className="mt-2 text-gray-300 group-hover:text-[#0066cc] transition-colors"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
