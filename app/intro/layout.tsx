import SubPageLayout from '@/components/SubPageLayout';
import { navItems } from '@/lib/navigation';

const introNav = navItems.find((n) => n.id === 'intro')!;

export default function IntroLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubPageLayout
      title="협회소개"
      breadcrumb={['협회소개']}
      sectionNav={{ label: '협회소개', items: introNav.children! }}
    >
      {children}
    </SubPageLayout>
  );
}
