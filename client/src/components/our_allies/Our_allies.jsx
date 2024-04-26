import React, { useState } from 'react';

function OurAllies() {
  const [startIndex, setStartIndex] = useState(0);

  const logos = [
    '/logos_alianzas/alcaldia-de-Itagui-Antioquia-para-descargar-impuesto-predial.png',
    '/logos_alianzas/DiseтФЬтЦТo sin tтФЬ╨╜tulo (1).png',
    '/logos_alianzas/DiseтФЬтЦТo sin tтФЬ╨╜tulo (3).png',
    '/logos_alianzas/Logo Aurelio Llano_Mesa de trabajo 1.png',
    '/logos_alianzas/Imagen de WhatsApp 2024-02-20 a las 17.20.00_75cbf97c.jpg',
    '/logos_alianzas/Logo CтФЬтФВdigo C13_Mesa de trabajo 1.png',
    '/logos_alianzas/logo_Beca Tech Negro.png',
    '/logos_alianzas/unnamed.png',
    '/logos_alianzas/WhatsApp Image 2023-10-23 at 11.22.39 AM (2) (1).jpeg',
    '/logos_alianzas/WhatsApp Image 2023-10-24 at 11.04.44 AM.jpeg',
  ];

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 7);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => prevIndex - 7);
  };

  return (
    <div className='flex items-center justify-center'>
      <button onClick={handlePrev} disabled={startIndex === 0} className='mr-8'>
        <svg className='ml-1 text-blue-300 w-3 h-3' viewBox="0 0 5 8" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.00152 0C4.33112 0.329809 4.659 0.657903 4.9817 0.980827C3.98426 1.97472 2.97715 2.9779 1.9697 3.98143C3.002 5.00696 4.0098 6.00808 5 6.992C4.64278 7.34829 4.31145 7.6781 3.98875 8C2.67516 6.68352 1.33154 5.33712 4.7683e-07 4.00241C1.31597 2.6873 2.65752 1.34537 4.00152 0Z"/>
        </svg>
      </button>
      {logos.slice(startIndex, startIndex + 7).map((logo, index) => (
        <img className='w-32' key={index} src={logo} alt={`Logo ${index}`} />
      ))}
      <button onClick={handleNext} disabled={startIndex + 7 >= logos.length} className='ml-8'>
        <svg className='ml-1 text-blue-300 w-3 h-3' viewBox="0 0 5 8" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"/>
        </svg>
      </button>
    </div>
  );
}

export default OurAllies;
