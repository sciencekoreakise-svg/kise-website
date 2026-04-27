import { NextRequest } from 'next/server';
import { readData, writeData, nextId, checkAdmin, formatFileSize } from '@/lib/db';
import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

export interface Attachment {
  fileName: string;
  fileSize: string;
  fileUrl: string;
}

export interface Notice {
  id: number;
  title: string;
  content: string;
  category: string;
  isPinned: boolean;
  date: string;
  attachments?: Attachment[];
}

const USE_BLOB = !!(process.env.BLOB_READ_WRITE_TOKEN);

export async function saveFile(file: File): Promise<Attachment> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uniqueName = `${Date.now()}_${file.name}`;

  if (USE_BLOB) {
    const blob = await put(`notices/${uniqueName}`, buffer, { access: 'public' });
    return { fileName: file.name, fileSize: formatFileSize(file.size), fileUrl: blob.url };
  }

  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
  fs.writeFileSync(path.join(uploadsDir, uniqueName), buffer);
  return { fileName: file.name, fileSize: formatFileSize(file.size), fileUrl: `/uploads/${uniqueName}` };
}

export async function GET() {
  const notices = await readData<Notice>('notices.json');
  return Response.json(notices);
}

export async function POST(request: NextRequest) {
  if (!checkAdmin(request)) {
    return Response.json({ error: '인증 실패' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const category = (formData.get('category') as string) || '공지';
    const isPinned = formData.get('isPinned') === 'true';
    const files = formData.getAll('files') as File[];

    const attachments: Attachment[] = [];
    for (const file of files) {
      if (file && file.size > 0) {
        attachments.push(await saveFile(file));
      }
    }

    const notices = await readData<Notice>('notices.json');
    const newNotice: Notice = {
      id: nextId(notices),
      title,
      content,
      category,
      isPinned,
      date: new Date().toISOString().split('T')[0],
      attachments: attachments.length > 0 ? attachments : undefined,
    };
    notices.unshift(newNotice);
    await writeData('notices.json', notices);
    return Response.json(newNotice, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
