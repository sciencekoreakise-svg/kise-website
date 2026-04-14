import SubPageLayout from '@/components/SubPageLayout';
import { navItems } from '@/lib/navigation';

const newsNav = navItems.find((n) => n.id === 'news')!;

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubPageLayout
      title="산업과 교육을 연결하는 ICT 혁신 네트워크"
      breadcrumb={[]}
      sectionNav={{ label: '알림마당', items: newsNav.children! }}
    >
      {children}
    </SubPageLayout>
  );
}
