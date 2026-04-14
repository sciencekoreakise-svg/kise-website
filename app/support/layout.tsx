import SubPageLayout from '@/components/SubPageLayout';
import { navItems } from '@/lib/navigation';

const supportNav = navItems.find((n) => n.id === 'support')!;

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubPageLayout
      title="산업과 교육을 연결하는 ICT 혁신 네트워크"
      breadcrumb={[]}
      sectionNav={{ label: '고객지원', items: supportNav.children! }}
    >
      {children}
    </SubPageLayout>
  );
}
