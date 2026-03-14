import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import '@/app/globals.scss';

export const metadata: Metadata = {
  title: 'Dice Game',
  description: 'Guess the dice roll — over or under your threshold',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
