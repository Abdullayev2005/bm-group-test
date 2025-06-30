// components/news/NewsGrid.js
'use client';

import Image from 'next/image';

const dummyNews = [
  { id: 1, title: 'Yangilik 1', img: '/images/charx.jpg' },
  { id: 2, title: 'Yangilik 2', img: '/images/charx.jpg' },
  { id: 3, title: 'Yangilik 3', img: '/images/charx.jpg' },
  { id: 4, title: 'Yangilik 4', img: '/images/charx.jpg' },
  { id: 5, title: 'Yangilik 5', img: '/images/charx.jpg' },
  { id: 6, title: 'Yangilik 6', img: '/images/charx.jpg' },
];

export default function NewsGrid() {
  return (
    <section className="pt-30 max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-[#1E2A64] mb-8">Yangiliklar</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dummyNews.map(({ id, title, img }) => (
          <div key={id} className="text-center">
            <div className="relative w-full h-60">
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="mt-4 text-[#1E2A64] font-medium text-base">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
