import { NextRequest } from 'next/server';
import { readData, writeData, nextId, checkAdmin } from '@/lib/db';

export interface Notice {
  id: number;
  title: string;
  content: string;
  category: string;
  isPinned: boolean;
  date: string;
}

export async function GET() {
  const notices = await readData<Notice>('notices.json');
  return Response.json(notices);
}

export async function POST(request: NextRequest) {
  if (!checkAdmin(request)) {
    return Response.json({ error: '인증 실패' }, { status: 401 });
  }
  const body = await request.json();
  const notices = await readData<Notice>('notices.json');
  const newNotice: Notice = {
    id: nextId(notices),
    title: body.title,
    content: body.content,
    category: body.category || '공지',
    isPinned: body.isPinned ?? false,
    date: new Date().toISOString().split('T')[0],
  };
  notices.unshift(newNotice);
  await writeData('notices.json', notices);
  return Response.json(newNotice, { status: 201 });
}
