// src/app/content-request/layout.tsx

import React from 'react';

export const metadata = {
  title: 'Dialectics Center',
};

export default function ContentRequestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
