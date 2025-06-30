'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Hero360() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.pannellum) {
      window.pannellum.viewer('panorama', {
        type: 'equirectangular',
        panorama: '/360_image/360tour.jpg',
        autoLoad: true,
        showControls: true,
      });
    }
  }, []);

  return (
    <>
      {/* Pannellum kutubxonalari */}
      <link
        rel="stylesheet"
        href="https://cdn.pannellum.org/2.5/pannellum.css"
      />
      <Script
        src="https://cdn.pannellum.org/2.5/pannellum.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Pannellum script yuklangach avtomatik boshlanadi
          if (window.pannellum) {
            window.pannellum.viewer('panorama', {
           type: 'equirectangular',
            panorama: '/360_image/360tour.jpg',
            autoLoad: true,
            showControls: false,
            keyboardZoom: false,
            mouseZoom: false,
            showFullscreenCtrl: false,
            showZoomCtrl: false,
            hfov: 110 // 🔁 bu yerga 100–120 orasida yozing (default: 100)
            });

          }
        }}
      />

      {/* Panorama joyi */}
      <div
        id="panorama"
        style={{
          width: '100%',
          height: '600px',
        }}
      ></div>
    </>
  );
}
