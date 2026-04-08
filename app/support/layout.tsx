import SubPageLayout from '@/components/SubPageLayout';
import { navItems } from '@/lib/navigation';

const supportNav = navItems.find((n) => n.id === 'support')!;

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubPageLayout
      title="고객지원"
      breadcrumb={['고객지원']}
      sectionNav={{ label: '고객지원', items: supportNav.children! }}
    >
      {children}
    </SubPageLayout>
  );
}
