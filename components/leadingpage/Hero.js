'use client';

import { useEffect, useRef } from 'react';

export default function Hero360() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    // iframe yuklanganda postMessage yuboriladi
    const handleIframeLoad = () => {
      if (iframe?.contentWindow) {
        iframe.contentWindow.postMessage('hideControls', '*');
      }
    };

    iframe?.addEventListener('load', handleIframeLoad);

    return () => {
      iframe?.removeEventListener('load', handleIframeLoad);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <iframe
        ref={iframeRef}
        src="https://360heroo.vercel.app/"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen
      />
    </div>
  );
}
