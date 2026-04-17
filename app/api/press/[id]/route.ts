import { NextRequest } from 'next/server';
import { readData, writeData, checkAdmin } from '@/lib/db';
import type { PressItem } from '../route';
import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

const USE_BLOB = !!(process.env.BLOB_READ_WRITE_TOKEN);

async function saveImage(image: File): Promise<string> {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const uniqueName = `${dateStr}_${image.name}`;

  if (USE_BLOB) {
    const blob = await put(`press/${uniqueName}`, buffer, { access: 'public' });
    return blob.url;
  }

  const saveDir = path.join(process.cwd(), 'public', 'images', 'press');
  if (!fs.existsSync(saveDir)) fs.mkdirSync(saveDir, { recursive: true });
  fs.writeFileSync(path.join(saveDir, uniqueName), buffer);
  return `/images/press/${uniqueName}`;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const items = await readData<PressItem>('press.json');
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
  const items = await readData<PressItem>('press.json');
  const idx = items.findIndex((p) => p.id === Number(id));
  if (idx === -1) return Response.json({ error: '없음' }, { status: 404 });

  const contentType = request.headers.get('content-type') || '';
  let updates: Partial<PressItem>;

  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    updates = {
      title: (formData.get('title') as string) || items[idx].title,
      content: (formData.get('content') as string) || items[idx].content,
      media: (formData.get('media') as string) ?? items[idx].media,
    };
    const image = formData.get('image') as File | null;
    if (image && image.size > 0) {
      updates.imageUrl = await saveImage(image);
    }
    if (formData.get('removeImage') === 'true') {
      updates.imageUrl = null;
    }
  } else {
    updates = await request.json();
  }

  items[idx] = { ...items[idx], ...updates, id: items[idx].id };
  await writeData('press.json', items);
  return Response.json(items[idx]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAdmin(request)) return Response.json({ error: '인증 실패' }, { status: 401 });
  const { id } = await params;
  const items = await readData<PressItem>('press.json');
  const filtered = items.filter((p) => p.id !== Number(id));
  if (filtered.length === items.length) return Response.json({ error: '없음' }, { status: 404 });
  await writeData('press.json', filtered);
  return Response.json({ ok: true });
}
