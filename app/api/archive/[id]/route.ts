import { NextRequest } from 'next/server';
import { readData, writeData, checkAdmin, formatFileSize } from '@/lib/db';
import type { ArchiveItem } from '../route';
import fs from 'fs';
import path from 'path';

const USE_BLOB = !!(process.env.BLOB_READ_WRITE_TOKEN);

async function saveFile(file: File): Promise<{ fileName: string; fileSize: string; fileUrl: string }> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uniqueName = `${Date.now()}_${file.name}`;

  if (USE_BLOB) {
    const { put } = await import('@vercel/blob');
    const blob = await put(`uploads/${uniqueName}`, buffer, { access: 'public' });
    return { fileName: file.name, fileSize: formatFileSize(file.size), fileUrl: blob.url };
  }

  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
  fs.writeFileSync(path.join(uploadsDir, uniqueName), buffer);
  return { fileName: file.name, fileSize: formatFileSize(file.size), fileUrl: `/uploads/${uniqueName}` };
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const items = await readData<ArchiveItem>('archive.json');
  const item = items.find((a) => a.id === Number(id));
  if (!item) return Response.json({ error: '없음' }, { status: 404 });
  return Response.json(item);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAdmin(request)) return Response.json({ error: '인증 실패' }, { status: 401 });
  const { id } = await params;

  const contentType = request.headers.get('content-type') || '';
  const items = await readData<ArchiveItem>('archive.json');
  const idx = items.findIndex((a) => a.id === Number(id));
  if (idx === -1) return Response.json({ error: '없음' }, { status: 404 });

  let updates: Partial<ArchiveItem>;

  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    updates = {
      title: (formData.get('title') as string) || items[idx].title,
      content: (formData.get('content') as string) || items[idx].content,
      category: (formData.get('category') as string) || items[idx].category,
    };
    const file = formData.get('file') as File | null;
    if (file && file.size > 0) {
      const saved = await saveFile(file);
      updates.fileName = saved.fileName;
      updates.fileSize = saved.fileSize;
      updates.fileUrl = saved.fileUrl;
    }
  } else {
    updates = await request.json();
  }

  items[idx] = { ...items[idx], ...updates, id: items[idx].id };
  await writeData('archive.json', items);
  return Response.json(items[idx]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAdmin(request)) return Response.json({ error: '인증 실패' }, { status: 401 });
  const { id } = await params;
  const items = await readData<ArchiveItem>('archive.json');
  const filtered = items.filter((a) => a.id !== Number(id));
  if (filtered.length === items.length) return Response.json({ error: '없음' }, { status: 404 });
  await writeData('archive.json', filtered);
  return Response.json({ ok: true });
}
