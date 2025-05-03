'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

const Portfolio = dynamic(
  () => import('@/page/Portfolio'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading Portfolio...</div>
      </div>
    )
  }
);

const PortfolioWrapper = memo(function PortfolioWrapper() {
  return <Portfolio />;
});

export default PortfolioWrapper;