import SubPageLayout from '@/components/SubPageLayout';
import { navItems } from '@/lib/navigation';

const digitalNav = navItems.find((n) => n.id === 'digital')!;

export default function DigitalLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubPageLayout
      title="디지털 격차를 줄이는 포용적 정보문화 확산"
      breadcrumb={[]}
      sectionNav={{ label: '디지털확산', items: digitalNav.children! }}
    >
      {children}
    </SubPageLayout>
  );
}
