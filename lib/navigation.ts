export type NavChild = {
  label: string;
  href: string;
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
    href: '/digital/divide',
    children: [
      { label: '디지털디바이드', href: '/digital/divide' },
      { label: 'SW미래채움', href: '/digital/sw-future' },
      { label: '사이언스트립', href: '/digital/science-trip' },
      { label: 'ICT AWARD KOREA', href: '/digital/ict-award' },
    ],
  },
  {
    id: 'cert',
    label: '과학기술정보통신인증원',
    href: 'https://kise.re.kr',
    external: true,
  },
  {
    id: 'qual',
    label: '자격검정사업단',
    href: 'https://cad.or.kr',
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
  '/digital/divide': { title: '디지털디바이드', breadcrumb: '디지털확산 > 디지털디바이드' },
  '/digital/sw-future': { title: 'SW미래채움', breadcrumb: '디지털확산 > SW미래채움' },
  '/digital/science-trip': { title: '사이언스트립', breadcrumb: '디지털확산 > 사이언스트립' },
  '/digital/ict-award': { title: 'ICT AWARD KOREA', breadcrumb: '디지털확산 > ICT AWARD KOREA' },
  '/news/notice': { title: '공지사항', breadcrumb: '알림마당 > 공지사항' },
  '/news/press': { title: '보도자료', breadcrumb: '알림마당 > 보도자료' },
  '/news/archive': { title: '자료실', breadcrumb: '알림마당 > 자료실' },
  '/support/faq': { title: 'FAQ', breadcrumb: '고객지원 > FAQ' },
  '/support/contact': { title: '문의하기', breadcrumb: '고객지원 > 문의하기' },
};
