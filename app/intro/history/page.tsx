import type { Metadata } from 'next';
import HistoryTimeline from './HistoryTimeline';

export const metadata: Metadata = { title: '연혁' };

export default function HistoryPage() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">연혁</h2>
      <div className="w-10 h-1 rounded mb-8" style={{ backgroundColor: '#FF6600' }} />
      <HistoryTimeline />
    </article>
  );
}
