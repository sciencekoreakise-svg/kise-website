'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronDown } from 'lucide-react';
import type { NavChild } from '@/lib/navigation';

type Props = {
  label: string;
  items: NavChild[];
};

export default function SidebarNav({ label, items }: Props) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navList = items.reduce<{ seenGroups: Set<string>; els: React.ReactNode[] }>(
    ({ seenGroups, els }, item) => {
      if (item.group && !seenGroups.has(item.group)) {
        seenGroups.add(item.group);
        els.push(
          <div key={`group-${item.group}`} className="px-5 pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 border-t border-gray-100">
            {item.group}
          </div>
        );
      }
      els.push(
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center justify-between px-5 py-3 text-sm transition-colors ${item.group ? 'pl-7' : ''} ${
            pathname === item.href
              ? 'bg-blue-50 text-[#003087] font-semibold border-l-4 border-[#FF6600]'
              : 'text-gray-600 hover:bg-gray-50 hover:text-[#003087]'
          }`}
        >
          {item.label}
          {pathname === item.href && (
            <ChevronRight size={14} className="text-[#FF6600]" />
          )}
        </Link>
      );
      return { seenGroups, els };
    },
    { seenGroups: new Set(), els: [] }
  ).els;

  return (
    <aside className="lg:w-56 shrink-0">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* 헤더 — 모바일에서 토글 버튼 역할 */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="w-full flex items-center justify-between px-5 py-4 font-bold text-white text-sm lg:cursor-default"
          style={{ backgroundColor: '#003087' }}
        >
          {label}
          <ChevronDown
            size={16}
            className={`lg:hidden transition-transform ${mobileOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* 네비게이션 목록 — 모바일: 토글, 데스크탑: 항상 표시 */}
        <nav className={`divide-y divide-gray-100 ${mobileOpen ? 'block' : 'hidden'} lg:block`}>
          {navList}
        </nav>
      </div>
    </aside>
  );
}
