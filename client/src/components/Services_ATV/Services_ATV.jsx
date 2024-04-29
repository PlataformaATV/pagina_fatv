

import React from 'react';
import './Services_ATV.css'; 
import 'boxicons'
import { useState } from 'react';

const ServicesATV = () => {
  const [startIndex, setStartIndex] = useState(0);

  const imgs = [
    '/img_services/services1.jpg',
    '/img_services/services2.jpg',
    '/img_services/services3.jpg',
  ];


  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 4);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => prevIndex - 4);
  };

  return (
    <div className='flex gap-80 bg-content text-white tracking-tighter text-xl'>

      <div className='py-20 pb-20 pl-24'>

        <div className='flex gap-4 pb-20'> 
        <box-icon name='folder-open' type='solid' color='#ffffff' ></box-icon>
        <h3 className=''>
        PRESTAMOS LOS SIGUIENTES SERVICIOS
        </h3>
        </div>

        <div className='flex flex-col gap-5'>

          <div className='flex'>
          <h1 className='text-7xl font-extrabold'>APOYO <br/> ACADÉMICO</h1>
          {/* <p className='text-7xl bg-white bg-opacity-85 '>+</p> */}
          </div>

          <p>Ofrecemos servicios especializados que tienen como objetivo implementar:</p>
          <p className='font-bold'>Tutorías / Nivélate con Antivirus / Grupos de Estudio</p>
        </div>

      </div>



      <div className='w-2/5'>
      <div className='flex gap-16 items-center justify-center max-md:gap-4 max-lg:gap-6'>
      <button onClick={handlePrev} disabled={startIndex === 0} className='mr-8'>
        <svg className='ml-1 text-blue-300 w-3 h-3' viewBox="0 0 5 8" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.00152 0C4.33112 0.329809 4.659 0.657903 4.9817 0.980827C3.98426 1.97472 2.97715 2.9779 1.9697 3.98143C3.002 5.00696 4.0098 6.00808 5 6.992C4.64278 7.34829 4.31145 7.6781 3.98875 8C2.67516 6.68352 1.33154 5.33712 4.7683e-07 4.00241C1.31597 2.6873 2.65752 1.34537 4.00152 0Z"/>
        </svg>
      </button>
      {imgs.slice(startIndex, startIndex + 1).map((logo, index) => (
        <img className='w-32 max-md:w-20' key={index} src={logo} alt={`Logo ${index}`} />
      ))}
      <button onClick={handleNext} disabled={startIndex + 1 >= imgs.length} className='ml-8'>
        <svg className='ml-1 text-blue-300 w-3 h-3' viewBox="0 0 5 8" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"/>
        </svg>
      </button>
    </div>
      </div>

    </div>
  );
}

export default ServicesATV;
