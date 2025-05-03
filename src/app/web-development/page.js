'use client';

import dynamic from 'next/dynamic';

const WebDevelopmentPage = dynamic(() => import('@/page/WebDevelopmentPage'), {
    ssr: false,
    loading: () => (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-lg">Loading Web Development Page...</div>
        </div>
    )
});

const WebDevelopmentWrapper = () => <WebDevelopmentPage />;

export default WebDevelopmentWrapper;