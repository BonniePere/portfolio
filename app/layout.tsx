import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import TokenChecker from './components/TokenChecker';

const inter = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bonnie M. Perez - Canadian Interior Designer',
  description: 'Canadian Interior Designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TokenChecker />

        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
