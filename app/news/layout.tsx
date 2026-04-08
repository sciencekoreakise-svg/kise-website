import SubPageLayout from '@/components/SubPageLayout';
import { navItems } from '@/lib/navigation';

const newsNav = navItems.find((n) => n.id === 'news')!;

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubPageLayout
      title="알림마당"
      breadcrumb={['알림마당']}
      sectionNav={{ label: '알림마당', items: newsNav.children! }}
    >
      {children}
    </SubPageLayout>
  );
}
