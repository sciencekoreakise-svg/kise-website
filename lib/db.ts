import fs from 'fs';
import path from 'path';
import { Redis } from '@upstash/redis';

export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'kise2024';

// Upstash Redis 환경변수가 있으면 Redis 사용, 없으면 로컬 파일시스템 사용
// Vercel KV(구) 환경변수 또는 Upstash 직접 환경변수 둘 다 지원
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
const USE_REDIS = !!(REDIS_URL && REDIS_TOKEN);

const DATA_DIR = path.join(process.cwd(), 'data');

let _redis: Redis | null = null;
function getRedis(): Redis {
  if (!_redis) {
    _redis = new Redis({ url: REDIS_URL!, token: REDIS_TOKEN! });
  }
  return _redis;
}

export async function readData<T>(key: string): Promise<T[]> {
  if (USE_REDIS) {
    const data = await getRedis().get<T[]>(key);
    return data ?? [];
  }
  const filePath = path.join(DATA_DIR, key);
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

export async function writeData<T>(key: string, data: T[]): Promise<void> {
  if (USE_REDIS) {
    await getRedis().set(key, data);
    return;
  }
  const filePath = path.join(DATA_DIR, key);
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export function nextId(items: { id: number }[]): number {
  if (items.length === 0) return 1;
  return Math.max(...items.map((i) => i.id)) + 1;
}

export function checkAdmin(req: Request): boolean {
  return req.headers.get('x-admin-password') === ADMIN_PASSWORD;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
