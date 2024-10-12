import { Inter, Lusitana } from 'next/font/google';

// 主要字体
export const inter = Inter({ subsets: ['latin'] });

// 次要字体
export const lusitana = Lusitana({
    // 指定粗细和子集
    weight: ['400', '700'],
    subsets: ['latin'],
});