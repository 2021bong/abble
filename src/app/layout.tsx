import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abble',
  description: 'Apple clone cording',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
