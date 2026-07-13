import type { ReactNode } from 'react';

// Matches admin-inserted links in the form [텍스트](https://example.com) or [텍스트](/internal/path)
const LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g;

export function renderContentWithLinks(content: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(content)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(content.slice(lastIndex, match.index));
    }
    const [, text, url] = match;
    const isExternal = !url.startsWith('/');
    nodes.push(
      <a
        key={key++}
        href={url}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="text-[#003087] underline hover:text-[#001f5c]"
      >
        {text}
      </a>
    );
    lastIndex = LINK_PATTERN.lastIndex;
  }
  if (lastIndex < content.length) {
    nodes.push(content.slice(lastIndex));
  }
  return nodes;
}
