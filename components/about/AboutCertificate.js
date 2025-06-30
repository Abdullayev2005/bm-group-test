'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AboutCertificate() {
  const certificates = [
    '/images/charx.jpg',
    '/images/certi.jpg',
    '/images/charx.jpg',
    '/images/charx.jpg',
    '/images/charx.jpg'
  ];
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h2 className="text-[64px] font-semibold text-slate-600 tracking-widest mb-12">Hujjatlar</h2>

      <div className="flex items-center justify-center gap-4 overflow-hidden">
        {certificates.map((src, idx) => (
          <div
            key={idx}
            className={`transition-opacity duration-500 ease-in-out ${
              idx === current ? 'opacity-100 scale-100' : 'opacity-30 scale-90'
            } ${idx === current ? 'z-10' : 'z-0'}`}
          >
            <Image
              src={src}
              alt={`Certificate ${idx + 1}`}
              width={595}
              height={842}
              className="rounded-md shadow-md object-contain"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-8 mt-6">
        <button
          onClick={handlePrev}
          className="text-white bg-slate-600 hover:bg-slate-700 px-6 py-3 rounded-md text-lg"
        >
          ← Oldingi
        </button>
        <button
          onClick={handleNext}
          className="text-white bg-slate-600 hover:bg-slate-700 px-6 py-3 rounded-md text-lg"
        >
          Keyingi →
        </button>
      </div>
    </section>
  );
}
