import SidebarNav from '@/components/SidebarNav';
import PageBanner from '@/components/PageBanner';
import type { NavChild } from '@/lib/navigation';

type Props = {
  title: string;
  breadcrumb: string[];
  sectionNav: { label: string; items: NavChild[] };
  chips?: string[];
  children: React.ReactNode;
};

export default function SubPageLayout({ title, breadcrumb, sectionNav, chips, children }: Props) {
  return (
    <div>
      {/* 히어로 배너 */}
      <PageBanner title={title} breadcrumb={breadcrumb} chips={chips} />

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
