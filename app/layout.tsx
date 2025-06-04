// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Photo Gallery with Route Interception',
  description: 'A photo gallery demonstrating Next.js route interception and parallel routes with Shadcn UI.',
};

export default function RootLayout({
  children,
  modal, // This is your parallel route slot
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode; // Type for the modal slot
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {modal} {/* Render the modal slot */}
      </body>
    </html>
  );
}