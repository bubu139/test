// src/app/api/genkit/[...slug]/route.ts
import { defineNextJsHandler } from '@genkit-ai/next/plugin';
// Đảm bảo import file này để đăng ký tất cả các flows của bạn với Genkit
import '@/ai/dev';

// Hàm này sẽ tự động tạo các API endpoints cho các flows đã đăng ký
export const { GET, POST } = defineNextJsHandler();
