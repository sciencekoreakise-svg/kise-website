'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import type { NavChild } from '@/lib/navigation';

type Props = {
  label: string;
  items: NavChild[];
};

export default function SidebarNav({ label, items }: Props) {
  const pathname = usePathname();

  return (
    <aside className="lg:w-56 shrink-0">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div
          className="px-5 py-4 font-bold text-white text-sm"
          style={{ backgroundColor: '#003087' }}
        >
          {label}
        </div>
        <nav className="divide-y divide-gray-100">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-5 py-3 text-sm transition-colors ${
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
          ))}
        </nav>
      </div>
    </aside>
  );
}
