// app/residences/qoyliq/page.jsx

'use client';

import Image from 'next/image';
import {
  FaVideo, FaShieldAlt, FaFireExtinguisher, FaSchool, FaBaby, FaSpa,
  FaUserFriends, FaDumbbell, FaClinicMedical, FaParking, FaShoppingCart, FaMosque
} from 'react-icons/fa';

export default function QoyliqPage() {
  const services = [
    { icon: <FaVideo />, label: '24/7 kuzatuv' },
    { icon: <FaShieldAlt />, label: '24 soat xavfsizlik' },
    { icon: <FaFireExtinguisher />, label: 'Yong‘in o‘chirish tizimi' },
    { icon: <FaSchool />, label: 'Maktab' },
    { icon: <FaBaby />, label: 'Bolalar bog‘chasi' },
    { icon: <FaSpa />, label: 'Go‘zallik saloni' },
    { icon: <FaUserFriends />, label: 'Shaxsiy xizmatlar' },
    { icon: <FaDumbbell />, label: 'Fitnes klub' },
    { icon: <FaClinicMedical />, label: 'Oilaviy poliklinika' },
    { icon: <FaParking />, label: 'Avtoturargoh' },
    { icon: <FaShoppingCart />, label: 'Savdo markazi' },
    { icon: <FaMosque />, label: 'Masjid' },
  ];

  return (
    <div className="pt-10 w-full bg-white text-blue-950">
      {/* Header */}
      <section className="px-20 pt-24 pb-10">
        <h1 className="text-[64px] tracking-[8.32px] text-stone-400 font-['Chocolate_Classical_Sans']">Mirobot</h1>
        <p className="w-96 mt-4 text-lg text-neutral-900 font-['Chocolate_Classical_Sans']">
          Go‘zal poytaxtimiz Shayxontohur tumanida, Samarqand Darvoza ko‘chasida joylashgan “Qoyliq” — bu zamonaviy arxitektura va fransuz uslubidagi dizayn uyg‘unligi. 
          12 qavatli, 5 blokli va 438 xonadondan iborat majmua yuqori sifatli travertin va ottocento fasad bilan bezatilgan.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 mt-10">
          <div className="relative w-96 h-[600px]">
            <Image src="/residences/qoyliq/1.png" alt="Qoyliq bino" fill className="object-cover rounded-xl" />
          </div>
          <div className="relative pt-10 w-96 h-[600px] flex-none">
            <Image src="/residences/qoyliq/2.png" alt="Qoyliq bino" fill className="object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* Qulayliklar */}
      <section className="px-20 pt-10 pb-20">
        <h2 className="text-3xl tracking-[2.7px] mb-10 font-['Chocolate_Classical_Sans']">Qulayliklar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
          {services.map((item, i) => (
            <div key={i} className="flex items-center gap-5 px-5 py-2 rounded-2xl border border-stone-400">
              <div className="w-14 h-14 bg-zinc-100 rounded-full flex items-center justify-center">
                <div className="text-stone-400 text-2xl">{item.icon}</div>
              </div>
              <span className="text-lg font-['Chocolate_Classical_Sans']">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-6 mt-12">
          <div className="relative w-[484px] h-[484px]">
            <Image src="/residences/qoyliq/3.png" alt="Qoyliq pastgi bino" fill className="object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-20 py-10 flex gap-7">
        <div className="relative w-[640px] h-[728px]">
          <Image src="/residences/qoyliq/4.png" alt="Qoyliq gallery left" fill className="object-cover rounded-xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/10 to-zinc-900/80" />
        </div>
        <div className="flex flex-col gap-7 w-[620px]">
          <div className="relative h-80 w-full">
            <Image src="/residences/qoyliq/5.png" alt="Qoyliq gallery top" fill className="object-cover rounded-xl" />
          </div>
          <div className="relative h-80 w-full">
            <Image src="/residences/qoyliq/6.png" alt="Qoyliq gallery bottom" fill className="object-cover rounded-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
