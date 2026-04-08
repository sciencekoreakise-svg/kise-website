import { NextRequest } from 'next/server';
import { readData, writeData, nextId, checkAdmin, formatFileSize } from '@/lib/db';
import fs from 'fs';
import path from 'path';

export interface ArchiveItem {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
  fileName: string | null;
  fileSize: string | null;
  fileUrl: string | null;
}

export async function GET() {
  const items = readData<ArchiveItem>('archive.json');
  return Response.json(items);
}

export async function POST(request: NextRequest) {
  if (!checkAdmin(request)) {
    return Response.json({ error: '인증 실패' }, { status: 401 });
  }

  const formData = await request.formData();
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const category = (formData.get('category') as string) || '자료';
  const file = formData.get('file') as File | null;

  let fileName: string | null = null;
  let fileSize: string | null = null;
  let fileUrl: string | null = null;

  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uniqueName = `${Date.now()}_${file.name}`;
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    fs.writeFileSync(path.join(uploadsDir, uniqueName), buffer);
    fileName = file.name;
    fileSize = formatFileSize(file.size);
    fileUrl = `/uploads/${uniqueName}`;
  }

  const items = readData<ArchiveItem>('archive.json');
  const newItem: ArchiveItem = {
    id: nextId(items),
    title,
    content,
    category,
    date: new Date().toISOString().split('T')[0],
    fileName,
    fileSize,
    fileUrl,
  };
  items.unshift(newItem);
  writeData('archive.json', items);
  return Response.json(newItem, { status: 201 });
}
