'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

const UXUIDesignPage = dynamic(
  () => import('@/page/UXUIDesignPage'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading UI/UX Design Page...</div>
      </div>
    )
  }
);

const UxUiDesignWrapper = memo(function UxUiDesignWrapper() {
  return <UXUIDesignPage />;
});

export default UxUiDesignWrapper;