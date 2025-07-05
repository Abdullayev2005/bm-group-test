'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const buildings = [
  { id: 1, name: 'A Bino', top: '37.3%', left: '12.7%', img: '/buil_image/tayyor 1.png', width: 400, height: 400 },
  { id: 2, name: 'B Bino', top: '58.8%', left: '23.2%', img: '/buil_image/tayyor 2.png', width: 450, height: 450 },
  { id: 3, name: 'C Bino', top: '64.5%', left: '44.6%', img: '/buil_image/tayyor 3.png', width: 500, height: 500 },
  { id: 4, name: 'D Bino', top: '65.5%', left: '67%', img: '/buil_image/tayyor 4.png', width: 530, height: 530 },
  { id: 5, name: 'E Bino', top: '70%', left: '87.8%', img: '/buil_image/tayyor 5.png', width: 570, height: 570 },
];

const doors = [
  { id: 1, name: 'Eshik 1', img: '/buil_image/eshik 1.png', top: '46%', left: '16.5%', width: 430, height: 1100 },
  { id: 2, name: 'Eshik 2', img: '/buil_image/eshik 2.png', top: '83%', left: '34.5%', width: 280, height: 850 },
  { id: 3, name: 'Eshik 3', img: '/buil_image/eshik 3.png', top: '70%', left: '39%', width: 190, height: 800 },
  { id: 4, name: 'Eshik 4', img: '/buil_image/eshik 4.png', top: '63.5%', left: '47%', width: 225, height: 1050 },
  { id: 5, name: 'Eshik 5', img: '/buil_image/eshik 5.png', top: '74%', left: '61%', width: 250, height: 1100 },
  { id: 6, name: 'Eshik 6', img: '/buil_image/eshik 6.png', top: '81.5%', left: '59.8%', width: 280, height: 850 },
];

export default function HeroBuilding() {
  const [activeBuilding, setActiveBuilding] = useState(null);
  const [activeDoor, setActiveDoor] = useState(null);
  const router = useRouter();

  const handleDoorClick = (id) => {
    router.push(`/property-detail/${id}`);
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      <Image src="/buil_image/tour.jpg" alt="Panorama" fill className="object-cover" />

      {buildings.map(({ id, top, left, name, img, width, height }) => (
        <div
          key={id}
          title={name}
          onClick={() => setActiveBuilding(id)}
          className="absolute cursor-pointer group hover:scale-105 transition-transform duration-300"
          style={{ top, left, width: `${width}px`, height: `${height}px`, transform: 'translate(-50%, -50%)' }}
        >
          <Image
            src={img}
            alt={name}
            fill
            className="object-contain z-10 relative mix-blend-multiply group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          />
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-white text-xs bg-blue-600 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {name} haqida malumot
          </div>
        </div>
      ))}

      {activeBuilding && (
        <div className="absolute bottom-0 left-0 w-full bg-white border-t z-20 p-6 animate-slideUp overflow-hidden">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-[#1E2A64]">
              {buildings.find(b => b.id === activeBuilding)?.name}
            </h2>
            <button onClick={() => setActiveBuilding(null)} className="text-sm text-red-600">
              Yopish
            </button>
          </div>
          <p className="mt-2 text-gray-700">
            Bu yerda {buildings.find(b => b.id === activeBuilding)?.name} haqida batafsil malumot bo‘ladi.
          </p>
          <div className="mt-4 relative w-full h-[600px] bg-gray-100 rounded shadow-inner overflow-hidden">
            <Image
              src="/buil_image/eshik_section.png"
              alt="Eshiklar bilan koridor"
              fill
              className="object-cover rounded"
            />
            {doors.map(({ id, img, top, left, name, width, height }) => (
              <div
                key={id}
                onClick={() => handleDoorClick(id)}
                className="absolute cursor-pointer group"
                style={{ top, left, width: `${width}px`, height: `${height}px`, transform: 'translate(-50%, -50%)' }}
              >
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-contain group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                />
              </div>
            ))}
          </div>

          {activeDoor && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded shadow">
              <h3 className="text-lg font-semibold text-blue-800">
                {doors.find(d => d.id === activeDoor)?.name}
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                Bu yerda {doors.find(d => d.id === activeDoor)?.name}ga oid batafsil ma'lumot va uy chizmasi bo‘ladi.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
