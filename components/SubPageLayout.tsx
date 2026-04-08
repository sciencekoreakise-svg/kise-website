import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import SidebarNav from '@/components/SidebarNav';
import type { NavChild } from '@/lib/navigation';

type Props = {
  title: string;
  breadcrumb: string[];
  sectionNav: { label: string; items: NavChild[] };
  children: React.ReactNode;
};

export default function SubPageLayout({ title, breadcrumb, sectionNav, children }: Props) {
  return (
    <div>
      {/* 페이지 배너 */}
      <div
        className="relative py-12 lg:py-16 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #003087 0%, #0066cc 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-white" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-2xl lg:text-4xl font-bold text-white mb-3">{title}</h1>
          <nav className="flex items-center gap-1 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              홈
            </Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight size={14} />
                <span className={i === breadcrumb.length - 1 ? 'text-white font-medium' : ''}>
                  {crumb}
                </span>
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <SidebarNav label={sectionNav.label} items={sectionNav.items} />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
