'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

const AppDevelopmentPage = dynamic(
  () => import('@/page/AppDevelopmentPage'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading App Development Page...</div>
      </div>
    )
  }
);

const AppDevelopmentWrapper = memo(function AppDevelopmentWrapper() {
  return <AppDevelopmentPage />;
});

export default AppDevelopmentWrapper;