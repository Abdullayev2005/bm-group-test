'use client';

import { useEffect } from 'react';

export default function MapSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=uz_UZ';
    script.type = 'text/javascript';
    script.onload = () => initMap();
    document.head.appendChild(script);
  }, []);

  const initMap = () => {
    window.ymaps.ready(() => {
      // 💡 Avval layoutlar va locations e'lon qilinadi
      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `;
      document.head.appendChild(style);

      const customMainOfficeLayout = window.ymaps.templateLayoutFactory.createClass(`
        <div style="position: relative; width: 200px; height: 200px;">
          <div style="position: absolute; width: 200px; height: 200px; border-radius: 50%; background-color: rgba(0, 113, 188, 0.2); border: 6px solid rgba(0, 113, 188, 0.4); animation: pulse 2s infinite;"></div>
          <div style="position: absolute; width: 100px; height: 100px; top: 50px; left: 50px; border-radius: 50%; background-color: rgba(0, 113, 188, 0.8);"></div>
          <img src="/images/bm-logo.png" style="width: 60px; height: 60px; position: absolute; top: 70px; left: 70px; object-fit: contain;" />
        </div>
      `);

      const yellowLayout = window.ymaps.templateLayoutFactory.createClass(`
        <div style="position: relative; width: 200px; height: 200px;">
          <div style="position: absolute; width: 200px; height: 200px; border-radius: 50%; background-color: rgba(0, 113, 188, 0.2); border: 6px solid rgba(0, 113, 188, 0.4); animation: pulse 2s infinite;"></div>
          <div style="position: absolute; width: 100px; height: 100px; top: 50px; left: 50px; border-radius: 50%; background-color: rgba(0, 113, 188, 0.8);"></div>
          <img src="/images/bm-logo.png" style="width: 60px; height: 60px; position: absolute; top: 70px; left: 70px; object-fit: contain;" />
        </div>
      `);

      const locations = [
        {
          coords: [41.304193, 69.215176],
          hint: 'BM Group asosiy ofis (Tirsakobod)',
          url: 'https://yandex.uz/maps/-/CDqQZFHq',
          layout: customMainOfficeLayout,
        },
        {
          coords: [41.236542, 69.324582],
          hint: 'CharxNovza filiali',
          url: 'https://yandex.uz/maps/-/CDqQZHBz',
          layout: yellowLayout,
        },
        {
          coords: [41.255835, 69.240313],
          hint: 'Junarik filiali',
          url: 'https://yandex.uz/maps/-/CDqQZH8d',
          layout: yellowLayout,
        },
        {
          coords: [41.285842, 69.276384],
          hint: 'Ziyonur filiali',
          url: 'https://yandex.uz/maps/-/CDqQZHQn',
          layout: yellowLayout,
        }
      ];

      // 💡 endi mapni yaratamiz
      const map = new window.ymaps.Map('map', {
        center: [41.285842, 69.276384],
        zoom: 11,
        controls: []
      });

      // 💡 markerlar qo‘shiladi
      locations.forEach((loc) => {
        const placemark = new window.ymaps.Placemark(loc.coords, {
          hintContent: loc.hint
        }, {
          iconLayout: loc.layout,
          iconShape: {
            type: 'Circle',
            coordinates: [100, 100],
            radius: 100
          }
        });

        placemark.events.add('click', () => window.open(loc.url, '_blank'));
        map.geoObjects.add(placemark);
      });

      // avtomatik zoom qilish
      const bounds = window.ymaps.util.bounds.fromPoints(locations.map(loc => loc.coords));
      map.setBounds(bounds, {
        checkZoomRange: true,
        zoomMargin: 40
      });
    });
  };

  return (
    <div className="w-full h-[650px]">
      <div id="map" className="w-full h-full rounded-lg shadow" />
    </div>
  );
}
