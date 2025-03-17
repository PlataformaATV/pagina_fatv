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
    <div className='services'>
      <div className='contTop'>
        <div className='contLeft'>
          <div className='ApA'>
            <div className='leftIcon'>
              <div className='icon'>
                <box-icon name='folder-open' type='solid' color='#fffafa' style={{ width: '46px', height: '50px' }}></box-icon>
              </div>
              <div className=''>
                <div className=''>
                  <div className='pl'>
                  <p className='p m'>Presentamos</p>
                  <p className='p'>los</p>
                  </div>
                  <p className='p'>siguientes servicios</p>
                </div>
                
              </div>
            </div>
            <div>
              <div className='AAA'>
                <h1 className='AA AO'>APOYO</h1>
                <h1 className='AA'>ACADÉMICO</h1>
              </div>
              <p className='ose'>Ofrecemos servicios especializados que tienen como objetivo implementar:</p>
              <p className='tng'>Tutorías / Nivélate con Antivirus / Grupos de Estudio</p>
            </div>

            
          </div>

          
        </div>

        <div className='Imgs'>
          <div className='flex gap-16 items-end justify-center' style={{ width: '100%', height: '100%' }}>
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
     


      <div className='contArrows'>
        <div className='contRight'>
          <div className='contSabemos'>
            <div>
              <p>Sabemos cómo ayudarte</p>
            </div>
            <p className='cn'>Conoce nuestros</p>
            <p className='cn'>servicios</p>
          </div>
        </div>
        
        <div className='Arrows'>
          <div className='arrowIcon'>
            <button className='arrowLeft' onClick={handleClickPrev}>
                <box-icon name='left-arrow-alt' color='#6f6d6d' ></box-icon>
            </button>
              <button className='arrowRight' onClick={handleClickNext}>
                <box-icon name='right-arrow-alt' color='#6f6d6d' ></box-icon>
            </button>
          </div>
        </div>

      </div>
        

    </div>

  );
}

export default ServicesATV;
