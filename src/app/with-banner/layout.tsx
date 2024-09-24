// src/app/with-banner/layout.tsx

import '../globals.css'; // Import global styles here if not in root layout
import ParallelogramBanner from '../components/ParallelogramBanner'; // Adjust path if necessary

export default function WithBannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ParallelogramBanner />
      </body>
    </html>
  );
}
