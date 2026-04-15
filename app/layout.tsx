import type { Metadata, Viewport } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const notoSansKr = Noto_Sans_KR({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: '한국정보과학진흥협회 (KISE)',
    template: '%s | 한국정보과학진흥협회',
  },
  description:
    '사단법인 한국정보과학진흥협회(KISE)는 디지털 포용 사회 실현을 위해 디지털디바이드 해소, SW교육, 과학문화 확산 등 다양한 사업을 수행하는 비영리 사단법인입니다.',
  keywords: ['KISE', '한국정보과학진흥협회', '디지털디바이드', 'SW미래채움', 'ICT AWARD', '사이언스트립'],
  openGraph: {
    type: 'website',
    url: 'https://kise-website.vercel.app',
    locale: 'ko_KR',
    siteName: '한국정보과학진흥협회',
    title: '사단법인 한국정보과학진흥협회 (KISE)',
    description: '디지털 포용 사회 실현을 위한 한국정보과학진흥협회 공식 홈페이지',
    images: [
      {
        url: 'https://kise-website.vercel.app/kise-kakao.png?v=2',
        width: 1200,
        height: 630,
        alt: '사단법인 한국정보과학진흥협회 (KISE)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '사단법인 한국정보과학진흥협회 (KISE)',
    description: '디지털 포용 사회 실현을 위한 한국정보과학진흥협회 공식 홈페이지',
    images: ['https://kise-website.vercel.app/kise-kakao.png?v=2'],
  },
  metadataBase: new URL('https://kise-website.vercel.app'),
  icons: {
    icon: '/kise-logo.png',
    shortcut: '/kise-logo.png',
    apple: '/kise-logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
