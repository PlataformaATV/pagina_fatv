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

  const handleClickPrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? imgs.length - 1 : prevIndex - 1));
  };

  const handleClickNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % imgs.length);
  };


  return (
    <div className='w-full flex flex-col items-center justify-center'>
    <div className=''>
    <div className='flex flex-row'>
      <div className='flex flex-col p-10 bg-content text-white tracking-tighter text-xl w-3/5 max-md:text-lg max-md:w-full'>
      <div className='md:py-20 md:pb-20 md:pl-24 '>
        <div className='flex gap-4 pb-2 tracking-[.3em]'> 
          <div>
          <box-icon name='folder-open' type='solid' color='#fffafa' style={{ width: '46px', height: '46px' }}></box-icon>
          </div>
          <div>
            <h3 className='whitespace-pre text-sm'>PRESTAMOS LOS </h3>
            <h3 className='text-sm'>SIGUIENTES SERVICIOS</h3>
          </div>
        </div>

        <div className='flex flex-col gap-5 mr-0'>
          <div className='flex'>
            <h1 className='text-7xl font-extrabold max-md:text-2xl max-lg:text-3xl'>APOYO <br/> ACADÉMICO</h1>
          </div>
          <p>Ofrecemos servicios especializados que tienen como objetivo implementar:</p>
          <p className='font-bold'>Tutorías / Nivélate con Antivirus / Grupos de Estudio</p>
        </div>
      </div>
    </div>


    <div className='md:w-1/2 max-md:hidden'>
        <div className='flex gap-16 items-center justify-center md:max-w-full md:h-auto md:flex-col md:gap-6' style={{ width: '100%', height: '100%', }}>
          {imgs.map((logo, index) => (
            <div key={index} className={`w-full h-full ${index === startIndex ? '' : 'hidden'}`}>
              <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  style={{ width: '100%', height: '90%', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>

    <div className='flex  items-center justify-end ml-[40rem] max-md:flex-col max-md:ml-[0rem] max-md:items-start max-md:justify-start max-lg:ml-[2rem]
    max-xl: '>

      <div className=''>
        <div className='contNext flex bg-content h-40 flex-col justify-center text-center lg:mx-10 md:mx-1'>
          <div className='mx-10 w-full max-xl:mx-2'>

            <div className='text-xl lg:text-base md:text-base'>
              <p className='text-white text-left leading-4 font-roboto '>Sabemos cómo ayudarte</p>
            </div>

          <p className='text-white text-left font-bold md:text-base'>Conoce nuestros</p>
          <p className='text-white text-left leading-4 font-bold md:text-base'>servicios</p>
          </div>
        </div>
      </div>


      <div className="btn_Serv flex justify-end">
          <div className='flex justify-between'>
          <button className='btnLeft lg:px-14 md:px-6' onClick={handleClickPrev}>
          <box-icon name='left-arrow-alt' color='#040404' ></box-icon>
          </button>
          <button className='btnRigth lg:px-14 mr-8 md:px-6 ' onClick={handleClickNext}>
          <box-icon name='right-arrow-alt' color='#040404' ></box-icon>
          </button>
          </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ServicesATV;
