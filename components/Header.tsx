'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { navItems } from '@/lib/navigation';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMobileMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  const isActive = (item: (typeof navItems)[0]) => {
    if (item.children) {
      return item.children.some((c) => pathname.startsWith(c.href));
    }
    return pathname === item.href || pathname.startsWith(item.href + '/');
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* 상단 유틸리티 바 */}
      <div style={{ backgroundColor: '#003087' }} className="hidden sm:block text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-4 h-9">
          <a
            href="https://www.kise.or.kr/index/index_sgq.php"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity"
          >
            <ExternalLink size={11} />
            과학경진대회 접수시스템
          </a>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* 로고 */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/kise-b.png"
                alt="한국정보과학진흥협회"
                width={1082}
                height={187}
                style={{ height: '40px', width: 'auto' }}
                className="object-contain"
                priority
              />
            </Link>

            {/* 데스크탑 네비게이션 */}
            <nav className="hidden lg:flex items-center h-full">
              {navItems.map((item) => (
                <div key={item.id} className="nav-item relative h-full flex items-center group">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 h-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
                    >
                      {item.label}
                      <ExternalLink size={12} className="opacity-50" />
                    </a>
                  ) : (
                    <>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-1 px-4 h-full text-sm font-medium transition-colors border-b-2 ${
                          isActive(item)
                            ? 'border-[#FF6600] text-[#003087]'
                            : 'border-transparent text-gray-700 hover:text-[#003087]'
                        }`}
                      >
                        {item.label}
                        {item.children && <ChevronDown size={14} className="opacity-60" />}
                      </Link>
                      {item.children && (
                        <div className="nav-dropdown absolute top-full left-0 min-w-44 bg-white shadow-lg border border-gray-100 rounded-b-md z-50">
                          {item.children.reduce<{ seenGroups: Set<string>; els: React.ReactNode[] }>(
                            ({ seenGroups, els }, child) => {
                              if (child.group && !seenGroups.has(child.group)) {
                                seenGroups.add(child.group);
                                els.push(
                                  <div key={`group-${child.group}`} className="px-5 pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 border-t border-gray-100 first:border-t-0">
                                    {child.group}
                                  </div>
                                );
                              }
                              els.push(
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`block px-5 py-3 text-sm hover:bg-blue-50 hover:text-[#003087] transition-colors ${child.group ? 'pl-6' : ''} ${
                                    pathname === child.href
                                      ? 'bg-blue-50 text-[#003087] font-medium'
                                      : 'text-gray-700'
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              );
                              return { seenGroups, els };
                            },
                            { seenGroups: new Set(), els: [] }
                          ).els}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>

            {/* 검색 + 모바일 메뉴 */}
            <div className="flex items-center gap-2">
              {/* 검색 */}
              <div className="relative">
                {searchOpen ? (
                  <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1.5">
                    <input
                      ref={searchRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="검색어 입력"
                      className="w-24 sm:w-44 text-sm outline-none"
                      onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
                    />
                    <button onClick={() => setSearchOpen(false)}>
                      <X size={16} className="text-gray-400" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 text-gray-600 hover:text-[#003087] transition-colors"
                    aria-label="검색"
                  >
                    <Search size={20} />
                  </button>
                )}
              </div>

              {/* 모바일 햄버거 */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-[#003087] transition-colors"
                aria-label="메뉴"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-2">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-gray-100 last:border-0">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3 text-sm font-medium text-gray-700"
                  >
                    {item.label}
                    <ExternalLink size={14} className="opacity-50" />
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setOpenMobileMenu(openMobileMenu === item.id ? null : item.id)
                      }
                      className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-700"
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${openMobileMenu === item.id ? 'rotate-180' : ''}`}
                        />
                      )}
                    </button>
                    {item.children && openMobileMenu === item.id && (
                      <div className="pb-2 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block py-2 text-sm ${
                              pathname === child.href
                                ? 'text-[#003087] font-medium'
                                : 'text-gray-500'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
