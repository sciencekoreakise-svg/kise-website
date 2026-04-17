import { NextRequest } from 'next/server';
import { readData, writeData, checkAdmin } from '@/lib/db';
import type { Notice } from '../route';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const notices = await readData<Notice>('notices.json');
  const notice = notices.find((n) => n.id === Number(id));
  if (!notice) return Response.json({ error: '없음' }, { status: 404 });
  return Response.json(notice);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAdmin(request)) return Response.json({ error: '인증 실패' }, { status: 401 });
  const { id } = await params;
  const body = await request.json();
  const notices = await readData<Notice>('notices.json');
  const idx = notices.findIndex((n) => n.id === Number(id));
  if (idx === -1) return Response.json({ error: '없음' }, { status: 404 });
  notices[idx] = { ...notices[idx], ...body, id: notices[idx].id };
  await writeData('notices.json', notices);
  return Response.json(notices[idx]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAdmin(request)) return Response.json({ error: '인증 실패' }, { status: 401 });
  const { id } = await params;
  const notices = await readData<Notice>('notices.json');
  const filtered = notices.filter((n) => n.id !== Number(id));
  if (filtered.length === notices.length) return Response.json({ error: '없음' }, { status: 404 });
  await writeData('notices.json', filtered);
  return Response.json({ ok: true });
}
