import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import Navigation from '@/components/Navigation';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Video Gallery - Next.js',
  description: 'A modern e-commerce Video Gallery built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Providers>
        <Navigation />
          <div className="min-h-screen bg-gray-100">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}