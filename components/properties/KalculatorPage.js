'use client';

import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function KalculatorPage() {
  const [area, setArea] = useState([0, 500]);
  const [price, setPrice] = useState([50, 800]);
  const [floor, setFloor] = useState([-1, 14]);
  const [activeRoom, setActiveRoom] = useState(2);
  const [selectedYear, setSelectedYear] = useState(2025);

  const rooms = [1, 2, 3];
  const years = [2025, 2026];

  return (
    <section className="pt-40 max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-[#1E2A64] mb-6">Ko'chmas mulk</h2>

      <div className="p-6 space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex border border-[#1E2A64]">
            <button className="w-[120px] h-[48px] bg-white text-[#1E2A64] font-medium">Barchasi</button>
            <button className="w-[120px] h-[48px] bg-[#1E2A64] text-white font-medium">Turar-joy</button>
            <button className="w-[120px] h-[48px] bg-white text-[#1E2A64] font-medium">Tijorat</button>
          </div>

          <select className="px-4 py-2 border border-[#1E2A64] w-[300px]">
            <option>Turar-joy majmuasi</option>
          </select>

          <div>
            <label className="block text-sm text-[#1E2A64] mb-1">Xonalar soni</label>
            <div className="flex border border-[#1E2A64]">
              {rooms.map((r, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 w-[60px] ${activeRoom === r ? 'bg-[#1E2A64] text-white' : 'bg-white text-[#1E2A64]'}`}
                  onClick={() => setActiveRoom(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2">
          <label className="block text-sm text-[#1E2A64] mb-1">Topshirish muddati:</label>
          <div className="flex gap-2">
            {years.map((year) => (
              <button
                key={year}
                className={`px-4 py-2 border border-[#1E2A64] rounded-full w-[60px] ${selectedYear === year ? 'bg-[#1E2A64] text-white' : 'bg-white text-[#1E2A64]'}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {/* Maydon */}
          <div>
            <label className="block text-sm mb-1 text-[#1E2A64]">Maydon, m²</label>
            <div className="flex gap-2 items-center">
              <input type="number" value={area[0]} className="border border-[#1E2A64] px-2 py-1 w-24" readOnly />
              <span className="text-xs">m²</span>
              <input type="number" value={area[1]} className="border border-[#1E2A64] px-2 py-1 w-24" readOnly />
              <span className="text-xs">m²</span>
            </div>
            <div className="w-full mt-2">
              <Slider
                range
                min={0}
                max={500}
                value={area}
                onChange={(value) => setArea(value)}
                trackStyle={[{ backgroundColor: '#0B2273' }]}
                handleStyle={[
                  { backgroundColor: '#738CC6', borderColor: '#0B2273' },
                  { backgroundColor: '#738CC6', borderColor: '#0B2273' }
                ]}
              />
            </div>
          </div>

          {/* Narx */}
          <div>
            <label className="block text-sm mb-1 text-[#1E2A64]">Umumiy narx, million UZS</label>
            <div className="flex gap-2 items-center">
              <input type="number" value={price[0]} className="border border-[#1E2A64] px-2 py-1 w-24" readOnly />
              <span className="text-xs">mln</span>
              <input type="number" value={price[1]} className="border border-[#1E2A64] px-2 py-1 w-24" readOnly />
              <span className="text-xs">mln</span>
            </div>
            <div className="w-full mt-2">
              <Slider
                range
                min={50}
                max={800}
                value={price}
                onChange={(value) => setPrice(value)}
                trackStyle={[{ backgroundColor: '#0B2273' }]}
                handleStyle={[
                  { backgroundColor: '#738CC6', borderColor: '#0B2273' },
                  { backgroundColor: '#738CC6', borderColor: '#0B2273' }
                ]}
              />
            </div>
          </div>

          {/* Qavat */}
          <div>
            <label className="block text-sm mb-1 text-[#1E2A64]">Qavat</label>
            <div className="flex gap-2 items-center">
              <input type="number" value={floor[0]} className="border border-[#1E2A64] px-2 py-1 w-24" readOnly />
              <input type="number" value={floor[1]} className="border border-[#1E2A64] px-2 py-1 w-24" readOnly />
            </div>
            <div className="w-full mt-2">
              <Slider
                range
                min={-1}
                max={14}
                value={floor}
                onChange={(value) => setFloor(value)}
                trackStyle={[{ backgroundColor: '#0B2273' }]}
                handleStyle={[
                  { backgroundColor: '#738CC6', borderColor: '#0B2273' },
                  { backgroundColor: '#738CC6', borderColor: '#0B2273' }
                ]}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          <span className="bg-white border border-gray-300 text-[#1E2A64] rounded-full px-4 py-1 text-sm">{activeRoom}-xonali ×</span>
          <span className="bg-white border border-gray-300 text-[#1E2A64] rounded-full px-4 py-1 text-sm">{area[0]}–{area[1]} m² ×</span>
          <span className="bg-white border border-gray-300 text-[#1E2A64] rounded-full px-4 py-1 text-sm">{price[0]} - {price[1]} mln UZS ×</span>
          <span className="bg-white border border-gray-300 text-[#1E2A64] rounded-full px-4 py-1 text-sm">{floor[0]} – {floor[1]} qavat ×</span>
          <span className="bg-white border border-gray-300 text-[#1E2A64] rounded-full px-4 py-1 text-sm">{years.join('–')} ×</span>
        </div>

        <div className="flex justify-end mt-6">
          <button className="border border-gray-300 px-4 py-2 rounded-full text-sm text-[#1E2A64] flex items-center gap-2">
            Filtrni tozalash <span className="text-lg">×</span>
          </button>
        </div>
      </div>
    </section>
  );
}
