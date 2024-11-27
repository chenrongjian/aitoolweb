import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Programming Tools - Learn and Master AI Development Tools',
  description: 'Discover and master cutting-edge AI programming tools to boost your development efficiency.',
  keywords: 'AI tools, programming, development, GitHub Copilot, Codeium, Tabnine',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
