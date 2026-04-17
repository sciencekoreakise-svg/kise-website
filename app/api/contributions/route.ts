import { NextRequest } from 'next/server';
import { readData, writeData, nextId, checkAdmin } from '@/lib/db';

export interface ContributionItem {
  id: number;
  title: string;
  media: string;
  date: string;
  url: string;
}

export async function GET() {
  const items = await readData<ContributionItem>('contributions.json');
  return Response.json(items);
}

export async function POST(request: NextRequest) {
  if (!checkAdmin(request)) {
    return Response.json({ error: '인증 실패' }, { status: 401 });
  }

  const body = await request.json();
  const { title, media, date, url } = body;

  if (!title || !url) {
    return Response.json({ error: '제목과 링크는 필수입니다.' }, { status: 400 });
  }

  const items = await readData<ContributionItem>('contributions.json');
  const newItem: ContributionItem = {
    id: nextId(items),
    title,
    media: media || '',
    date: date || new Date().toISOString().split('T')[0],
    url,
  };
  items.unshift(newItem);
  await writeData('contributions.json', items);
  return Response.json(newItem, { status: 201 });
}
