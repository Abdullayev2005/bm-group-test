'use client';

import Link from 'next/link';
import { TbCalendarEvent, TbBuildingSkyscraper, TbRulerMeasure } from 'react-icons/tb';
import Image from 'next/image';

const dummyData = new Array(8).fill({
  title: '2-xonali',
  price: '3 072 338 023 UZS',
  date: '4/2026',
  floors: '3/30',
  size: '48.2 m²',
  img: '/images/charx.jpg',
  link: '/property-detail'
});

export default function PropertiesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-xl font-semibold text-[#1E2A64] mb-4">Sizga moslari</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dummyData.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="border border-[#CBD5E1] rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <div className="h-48 relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-4 border-t border-[#CBD5E1]">
              <h3 className="text-[#1E2A64] text-base font-medium mb-1">{item.title}</h3>
              <p className="text-[#1E2A64] text-sm font-semibold mb-3">{item.price}</p>

              <div className="flex flex-wrap text-xs text-[#1E2A64] gap-x-3 gap-y-1">
                <div className="flex items-center gap-1">
                  <TbCalendarEvent className="text-[#1E2A64]" />
                  {item.date}
                </div>
                <div className="flex items-center gap-1">
                  <TbBuildingSkyscraper className="text-[#1E2A64]" />
                  {item.floors}
                </div>
                <div className="flex items-center gap-1">
                  <TbRulerMeasure className="text-[#1E2A64]" />
                  {item.size}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="text-[#1E2A64] text-sm border-b border-[#1E2A64] pb-0.5">
          Yana variantlarni ko‘rsatish
        </button>
      </div>
    </section>
  );
}
