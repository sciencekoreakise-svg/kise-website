import { NextRequest } from 'next/server';
import { readData, writeData, nextId, checkAdmin } from '@/lib/db';
import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

export interface PressItem {
  id: number;
  title: string;
  content: string;
  media: string;
  date: string;
  imageUrl: string | null;
}

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

export async function GET() {
  const items = await readData<PressItem>('press.json');
  return Response.json(items);
}

export async function POST(request: NextRequest) {
  if (!checkAdmin(request)) {
    return Response.json({ error: '인증 실패' }, { status: 401 });
  }

  try {
    const contentType = request.headers.get('content-type') || '';
    let title = '', content = '', media = '';
    let imageUrl: string | null = null;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      title = formData.get('title') as string;
      content = formData.get('content') as string;
      media = (formData.get('media') as string) || '';
      const image = formData.get('image') as File | null;
      if (image && image.size > 0) {
        imageUrl = await saveImage(image);
      }
    } else {
      const body = await request.json();
      title = body.title;
      content = body.content;
      media = body.media || '';
    }

    const items = await readData<PressItem>('press.json');
    const newItem: PressItem = {
      id: nextId(items),
      title,
      content,
      media,
      date: new Date().toISOString().split('T')[0],
      imageUrl,
    };
    items.unshift(newItem);
    await writeData('press.json', items);
    return Response.json(newItem, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500 });
  }
}
