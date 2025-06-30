'use client';

import Image from 'next/image';

const logos = [
  '/images/charx.jpg',
  '/images/charx.jpg',
  '/images/charx.jpg',
  '/images/charx.jpg',
  '/images/charx.jpg',
];

export default function SponsorsCarousel() {
  return (
    <div className="bg-white py-6 overflow-hidden">
      <div className="w-full relative">
        <div className="flex gap-12 animate-scroll whitespace-nowrap">
          {[...logos, ...logos].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Sponsor ${i}`}
              width={120}
              height={60}
              className="object-contain transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
