'use client';

import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';

export default function NewsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10">Yangiliklar</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
          >
            <Image
              src="/images/charx.jpg"
              alt={`Yangilik ${i + 1}`}
              width={394}
              height={250}
              className="p-8 w-full h-[250px] object-cover"
            />
            <div className="p-4 space-y-3">
              <h3 className="font-semibold text-blue-900">Yangi uylar sotuvda !!!</h3>
              <p className="text-gray-600 text-sm">
                Get inspired by this revived W.H. Audens Hymn to the United Nations. "Let music for peace Be the
                paradigm, For peace means to change At the right time, As the World-Clock, Goes Tick and Tock.
              </p>
              <div className="flex justify-between items-center pt-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaCalendarAlt className="text-blue-800" />
                  <span>24 Oct.,2021</span>
                </div>
                <button className="border border-blue-800 text-blue-800 px-4 py-1 rounded-md text-sm hover:bg-blue-800 hover:text-white transition">
                  Batafsil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
