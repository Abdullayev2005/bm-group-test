'use client';

import { useState } from 'react';
import propertiesData from '@/app/data/properties';
import Image from 'next/image';
import {
  TbCalendarEvent,
  TbBuildingSkyscraper,
  TbRulerMeasure,
  TbChevronLeft,
  TbChevronRight
} from 'react-icons/tb';

export default function PropertyDetailPage({ params }) {
  const { id } = params;
  const property = propertiesData.find((p) => p.id === Number(id));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-red-600">Obyekt topilmadi</h1>
      </div>
    );
  }

  const scrollToPlan = () => {
    const section = document.getElementById('plan-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.gallery.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.gallery.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-7xl pt-40 mx-auto px-6 py-12 text-[#1E2A64]">
      {/* Sarlavha */}
      <h2 className="text-2xl font-semibold mb-4">
        Ko‘chmas mulk / <span className="text-[#737A94]">{property.residence}</span>
      </h2>

      {/* Info Row */}
      <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
        <span>🏠 {property.title}</span>
        <span>
          <TbBuildingSkyscraper className="inline-block mr-1" /> {property.floors} qavat
        </span>
        <span>
          <TbRulerMeasure className="inline-block mr-1" /> {property.size}
        </span>
        <span>
          <TbCalendarEvent className="inline-block mr-1" /> {property.date}
        </span>
      </div>

      {/* Xonalar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm mb-12">
        {property.rooms.map((room, idx) => (
          <div
            key={idx}
            className="border rounded-md p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="text-md font-semibold mb-1">{room.name}</div>
            <div className="text-[#737A94]">{room.size}</div>
          </div>
        ))}
      </div>
      {/* Carousel Rasm bo‘limi */}
      <div id="plan-section" className="mb-16 scroll-mt-32 pt-10">
        <div className="text-right text-xl font-semibold mb-4">{property.price}</div>

        <div className="relative w-full h-200 border rounded-lg overflow-hidden shadow-md flex items-center justify-center">
          <Image
            src={property.gallery[currentImageIndex]}
            alt={`Rasm ${currentImageIndex + 1}`}
            width={560}
            height={560}
            className="object-contain transition-all duration-300"/>

          {/* < tugmasi */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white text-[#1E2A64] p-2 rounded-full shadow hover:bg-gray-200 z-10"
          >
            <TbChevronLeft size={20} />
          </button>

          {/* > tugmasi */}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white text-[#1E2A64] p-2 rounded-full shadow hover:bg-gray-200 z-10"
          >
            <TbChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* O‘xshash variantlar */}
      <h3 className="text-xl font-bold mb-4">O‘xshash variantlar</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {propertiesData.slice(0, 8).map((item) => (
          <div
            key={item.id}
            className="border rounded-md p-2 hover:shadow-md transition text-sm"
          >
            <div className="relative h-40 w-full mb-2">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <p className="font-medium">{item.title}</p>
            <p className="text-[#737A94]">{item.price}</p>
            <div className="flex flex-wrap gap-2 mt-2 text-xs text-[#737A94]">
              <span>
                <TbCalendarEvent className="inline-block mr-1" />
                {item.date}
              </span>
              <span>
                <TbBuildingSkyscraper className="inline-block mr-1" />
                {item.floors}
              </span>
              <span>
                <TbRulerMeasure className="inline-block mr-1" />
                {item.size}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
