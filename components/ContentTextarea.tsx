'use client';

import { useRef } from 'react';
import { Link2 } from 'lucide-react';

interface ContentTextareaProps {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  placeholder?: string;
}

export default function ContentTextarea({ value, onChange, rows = 10, placeholder }: ContentTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function insertLink() {
    const el = textareaRef.current;
    if (!el) return;

    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = value.slice(start, end);
    if (!selected) {
      alert('링크를 연결할 텍스트를 먼저 선택하세요.');
      return;
    }

    const input = prompt('연결할 주소를 입력하세요 (예: https://example.com)');
    if (!input) return;
    const url = input.trim();
    if (!/^https?:\/\//.test(url) && !url.startsWith('/')) {
      alert("주소는 'http://' 또는 'https://'로 시작하거나, '/'로 시작하는 내부 경로여야 합니다.");
      return;
    }

    const linkText = `[${selected}](${url})`;
    const next = value.slice(0, start) + linkText + value.slice(end);
    onChange(next);

    requestAnimationFrame(() => {
      el.focus();
      const pos = start + linkText.length;
      el.setSelectionRange(pos, pos);
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="block text-sm font-medium text-gray-700">내용</label>
        <button
          type="button"
          onClick={insertLink}
          className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#003087] transition-colors"
        >
          <Link2 size={13} />
          링크 삽입
        </button>
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#003087] resize-y"
      />
      <p className="mt-1 text-xs text-gray-400">
        링크를 넣을 텍스트를 선택한 뒤 '링크 삽입'을 누르면 상세 화면에서 클릭 가능한 링크로 표시됩니다.
      </p>
    </div>
  );
}
