import { NextRequest } from 'next/server';
import { readData, writeData, nextId, checkAdmin } from '@/lib/db';

export interface PressItem {
  id: number;
  title: string;
  content: string;
  media: string;
  date: string;
}

export async function GET() {
  const items = readData<PressItem>('press.json');
  return Response.json(items);
}

export async function POST(request: NextRequest) {
  if (!checkAdmin(request)) {
    return Response.json({ error: '인증 실패' }, { status: 401 });
  }
  const body = await request.json();
  const items = readData<PressItem>('press.json');
  const newItem: PressItem = {
    id: nextId(items),
    title: body.title,
    content: body.content,
    media: body.media || '',
    date: new Date().toISOString().split('T')[0],
  };
  items.unshift(newItem);
  writeData('press.json', items);
  return Response.json(newItem, { status: 201 });
}
