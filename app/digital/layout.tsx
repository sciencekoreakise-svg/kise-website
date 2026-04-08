import SubPageLayout from '@/components/SubPageLayout';
import { navItems } from '@/lib/navigation';

const digitalNav = navItems.find((n) => n.id === 'digital')!;

export default function DigitalLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubPageLayout
      title="디지털확산"
      breadcrumb={['디지털확산']}
      sectionNav={{ label: '디지털확산', items: digitalNav.children! }}
    >
      {children}
    </SubPageLayout>
  );
}
