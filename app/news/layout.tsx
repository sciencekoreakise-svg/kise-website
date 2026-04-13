import SubPageLayout from '@/components/SubPageLayout';
import { navItems } from '@/lib/navigation';

const newsNav = navItems.find((n) => n.id === 'news')!;

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubPageLayout
      title="산업과 교육을 연결하는 ICT 혁신 네트워크"
      breadcrumb={[]}
      sectionNav={{ label: '알림마당', items: newsNav.children! }}
      chips={['디지털 산업진흥', 'ICT 인재양성', '디지털 교육', '디지털 포용', '산학협력', '기술 자격인증']}
    >
      {children}
    </SubPageLayout>
  );
}
