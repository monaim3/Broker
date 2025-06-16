// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BrokerFinder - Find Trusted Immigration Brokers',
  description: 'Browse through our curated list of immigration brokers. Check their success rates, fees, destination countries, and user reviews to make an informed decision.',
  keywords: 'immigration broker, visa consultant, immigration services, broker reviews',
  authors: [{ name: 'BrokerFinder Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <ClientLayout>
            {children}
          </ClientLayout>

        </div>
      </body>
    </html>
  );
}