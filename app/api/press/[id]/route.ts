import { NextRequest } from 'next/server';
import { readData, writeData, checkAdmin } from '@/lib/db';
import type { PressItem } from '../route';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const items = readData<PressItem>('press.json');
  const item = items.find((p) => p.id === Number(id));
  if (!item) return Response.json({ error: '없음' }, { status: 404 });
  return Response.json(item);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAdmin(request)) return Response.json({ error: '인증 실패' }, { status: 401 });
  const { id } = await params;
  const body = await request.json();
  const items = readData<PressItem>('press.json');
  const idx = items.findIndex((p) => p.id === Number(id));
  if (idx === -1) return Response.json({ error: '없음' }, { status: 404 });
  items[idx] = { ...items[idx], ...body, id: items[idx].id };
  writeData('press.json', items);
  return Response.json(items[idx]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAdmin(request)) return Response.json({ error: '인증 실패' }, { status: 401 });
  const { id } = await params;
  const items = readData<PressItem>('press.json');
  const filtered = items.filter((p) => p.id !== Number(id));
  if (filtered.length === items.length) return Response.json({ error: '없음' }, { status: 404 });
  writeData('press.json', filtered);
  return Response.json({ ok: true });
}
