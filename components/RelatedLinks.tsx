import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const links = [
  {
    name: '과학기술정보통신부',
    href: 'https://www.msit.go.kr',
    logo: '/images/Related Links/2.png',
  },
  {
    name: '경기도',
    href: 'https://www.gg.go.kr',
    logo: '/images/Related Links/1.png',
  },
  {
    name: '정보통신산업진흥원',
    href: 'https://www.nipa.kr',
    logo: '/images/Related Links/3.png',
  },
  {
    name: '한국인터넷진흥원',
    href: 'https://www.kisa.or.kr',
    logo: '/images/Related Links/4.png',
  },
  {
    name: '전자신문',
    href: 'https://www.etnews.com',
    logo: '/images/Related Links/5.png',
  },
  {
    name: '성균관대학교 인공지능연구원',
    href: 'https://www.skku.edu',
    logo: '/images/Related Links/6.png',
  },
];

export default function RelatedLinks() {
  return (
    <section className="py-12" style={{ backgroundColor: '#f0f4f9' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6600] mb-1">
              Partners
            </p>
            <h2 className="text-xl font-bold text-gray-900">협력 기관</h2>
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
              {/* 로고 이미지 */}
              <div className="w-full h-20 flex items-center justify-center mb-3 transition-transform group-hover:scale-105">
                <Image
                  src={link.logo}
                  alt={link.name}
                  width={200}
                  height={80}
                  style={{ objectFit: 'contain', maxHeight: '80px', maxWidth: '100%' }}
                />
              </div>
              <div className="text-xs font-semibold text-gray-800 leading-tight mb-1 break-keep">
                {link.name}
              </div>
              <ExternalLink
                size={11}
                className="mt-1 text-gray-300 group-hover:text-[#0066cc] transition-colors"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
