import { NextRequest } from 'next/server';
import { readData, writeData, checkAdmin } from '@/lib/db';
import type { ContributionItem } from '../route';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAdmin(request)) return Response.json({ error: '인증 실패' }, { status: 401 });
  const { id } = await params;
  const items = await readData<ContributionItem>('contributions.json');
  const idx = items.findIndex((p) => p.id === Number(id));
  if (idx === -1) return Response.json({ error: '없음' }, { status: 404 });

  const updates: Partial<ContributionItem> = await request.json();
  items[idx] = { ...items[idx], ...updates, id: items[idx].id };
  await writeData('contributions.json', items);
  return Response.json(items[idx]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAdmin(request)) return Response.json({ error: '인증 실패' }, { status: 401 });
  const { id } = await params;
  const items = await readData<ContributionItem>('contributions.json');
  const filtered = items.filter((p) => p.id !== Number(id));
  if (filtered.length === items.length) return Response.json({ error: '없음' }, { status: 404 });
  await writeData('contributions.json', filtered);
  return Response.json({ ok: true });
}
