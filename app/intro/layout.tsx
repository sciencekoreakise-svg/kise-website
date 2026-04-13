import SubPageLayout from '@/components/SubPageLayout';
import { navItems } from '@/lib/navigation';

const introNav = navItems.find((n) => n.id === 'intro')!;

export default function IntroLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubPageLayout
      title="AI 시대를 준비하는 ICT·과학기술 인재 양성"
      breadcrumb={[]}
      sectionNav={{ label: '협회소개', items: introNav.children! }}
      chips={['디지털 산업진흥', 'ICT 인재양성', '디지털 교육', '디지털 포용', '산학협력', '기술 자격인증']}
    >
      {children}
    </SubPageLayout>
  );
}
