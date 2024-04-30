import React, { useState, useEffect } from 'react';
import './Services_ATV.css'; 
import 'boxicons';

const ServicesATV = () => {
  const [startIndex, setStartIndex] = useState(0);

  const imgs = [
    '/img_services/services1.jpg',
    '/img_services/services2.jpg',
    '/img_services/services3.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 4000); 

    return () => clearInterval(intervalId);
  }, [imgs.length, startIndex]); 

  return (
    <div className='flex flex-col bg-content md:flex-row md:gap-96 text-white tracking-tighter text-xl'>
      <div className='md:py-20 md:pb-20 md:pl-24'>
        <div className='flex gap-4 pb-2'> 
          <box-icon name='folder-open' type='solid' color='#ffffff' ></box-icon>
          <h3>PRESTAMOS LOS SIGUIENTES SERVICIOS</h3>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex'>
            <h1 className='text-7xl font-extrabold'>APOYO <br/> ACADÉMICO</h1>
          </div>
          <p>Ofrecemos servicios especializados que tienen como objetivo implementar:</p>
          <p className='font-bold'>Tutorías / Nivélate con Antivirus / Grupos de Estudio</p>
        </div>
      </div>
      <div className='md:w-2/5 bg-content'>
        <div className='flex gap-16 items-center justify-center md:max-w-full md:h-auto md:flex-col md:gap-6' style={{ width: '100%', height: '100%' }}>
          {imgs.map((logo, index) => (
            <div key={index} className={`w-full h-full ${index === startIndex ? '' : 'hidden'}`}>
              <img
                src={logo}
                alt={`Logo ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesATV;
