'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

const CustomSoftwarePage = dynamic(
  () => import('@/page/CustomSoftwarePage'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading Custom Software Page...</div>
      </div>
    )
  }
);

const CustomSoftwareWrapper = memo(function CustomSoftwareWrapper() {
  return <CustomSoftwarePage />;
});

export default CustomSoftwareWrapper;