'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

const DigitalMarketingPage = dynamic(
  () => import('@/page/DigitalMarketingPage'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading Digital Marketing Page...</div>
      </div>
    )
  }
);

const DigitalMarketingWrapper = memo(function DigitalMarketingWrapper() {
  return <DigitalMarketingPage />;
});

export default DigitalMarketingWrapper;