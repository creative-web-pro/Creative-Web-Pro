'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

const GraphicDesignPage = dynamic(
  () => import('@/page/GraphicDesignPage'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Loading Graphic Design Page...</div>
      </div>
    )
  }
);

const GraphicDesignWrapper = memo(function GraphicDesignWrapper() {
  return <GraphicDesignPage />;
});

export default GraphicDesignWrapper;