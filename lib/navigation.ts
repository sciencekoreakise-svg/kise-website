export type NavChild = {
  label: string;
  href: string;
  group?: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  {
    id: 'intro',
    label: '협회소개',
    href: '/intro/greeting',
    children: [
      { label: '인사말', href: '/intro/greeting' },
      { label: '연혁', href: '/intro/history' },
      { label: '조직도', href: '/intro/organization' },
      { label: '오시는길', href: '/intro/location' },
    ],
  },
  {
    id: 'digital',
    label: '디지털확산',
    href: '/digital',
    children: [
      { label: 'ICT AWARD KOREA', href: '/digital/ict-award' },
      { label: 'Si-Tech Innovation Award', href: '/digital/science-trip' },
      { label: 'SW미래채움', href: '/digital/sw-future' },
      { label: '디지털포용 사업', href: '/digital/digital-inclusion' },
      { label: 'AI 모빌리티 캠프', href: '/digital/ai-mobility' },
    ],
  },
  {
    id: 'cert',
    label: '과학기술정보통신인증원',
    href: 'http://kise.re.kr/index.php',
    external: true,
  },
  {
    id: 'center',
    label: '융합교육센터',
    href: 'https://center.kise.or.kr',
    external: true,
  },
  {
    id: 'qual',
    label: '자격검정사업단',
    href: 'http://cad.or.kr',
    external: true,
  },
  {
    id: 'news',
    label: '알림마당',
    href: '/news/notice',
    children: [
      { label: '공지사항', href: '/news/notice' },
      { label: '보도자료', href: '/news/press' },
      { label: '자료실', href: '/news/archive' },
    ],
  },
  {
    id: 'support',
    label: '고객지원',
    href: '/support/faq',
    children: [
      { label: 'FAQ', href: '/support/faq' },
      { label: '문의하기', href: '/support/contact' },
    ],
  },
];

export const sectionMeta: Record<string, { title: string; breadcrumb: string }> = {
  '/intro/greeting': { title: '인사말', breadcrumb: '협회소개 > 인사말' },
  '/intro/history': { title: '연혁', breadcrumb: '협회소개 > 연혁' },
  '/intro/organization': { title: '조직도', breadcrumb: '협회소개 > 조직도' },
  '/intro/location': { title: '오시는길', breadcrumb: '협회소개 > 오시는길' },
  '/digital/ict-award': { title: 'ICT AWARD KOREA', breadcrumb: '디지털확산 > ICT AWARD KOREA' },
  '/digital/sw-future': { title: 'SW미래채움', breadcrumb: '디지털확산 > SW미래채움' },
  '/digital/science-trip': { title: 'Si-Tech Innovation Award', breadcrumb: '디지털확산 > Si-Tech Innovation Award' },
  '/digital/digital-inclusion': { title: '디지털포용 사업', breadcrumb: '디지털확산 > 디지털포용 사업' },
  '/digital/ai-mobility': { title: 'AI 모빌리티 캠프', breadcrumb: '디지털확산 > AI 모빌리티 캠프' },
  '/news/notice': { title: '공지사항', breadcrumb: '알림마당 > 공지사항' },
  '/news/press': { title: '보도자료', breadcrumb: '알림마당 > 보도자료' },
  '/news/archive': { title: '자료실', breadcrumb: '알림마당 > 자료실' },
  '/support/faq': { title: 'FAQ', breadcrumb: '고객지원 > FAQ' },
  '/support/contact': { title: '문의하기', breadcrumb: '고객지원 > 문의하기' },
};
