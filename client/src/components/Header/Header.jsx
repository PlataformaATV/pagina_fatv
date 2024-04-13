import React, { useState, useEffect } from 'react';
import 'boxicons'
import { Link } from 'react-router-dom';

function Header() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`flex justify-between items-center py-3 px-8 bg-white fixed w-full transition-all duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className='Links-left flex gap-3 items-center'>
          <Link to="/Home" className='text-blue-links font-bold uppercase  transition duration-400 ease-in-out'>Inicio</Link>
          <span className='text-blue-links mx-1'>|</span>
          <Link to="/Fundacion" className='text-blue-links font-oswald font-semibold uppercase leading-none transition duration-400 ease-in-out'>FUNDACIÓN</Link>
          <span className='text-blue-links mx-1'>|</span>
          <Link className='flex items-center text-blue-links font-oswald font-semibold uppercase leading-none transition duration-400 ease-in-out'>QUÉ HACEMOS
            <svg className='ml-1 text-blue-300 w-3 h-3' viewBox="0 0 5 8" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
            </svg>
          </Link>
          <span className='text-blue-links mx-1'>|</span>
          <Link to="/Servicios" className='text-blue-links font-oswald font-semibold uppercase leading-none transition duration-400 ease-in-out'>SERVICIOS</Link>

        </div>

        <div className='logo'>
          <img
            className="h-28 object-contain"
            src="/logo.png"
            alt="logo"
          />
        </div>


        <div className='Links-right flex gap-3 items-center'>
          <Link to="/Noticias" className='text-blue-links font-oswald font-semibold uppercase leading-none transition duration-400 ease-in-out'>NOTICIAS</Link>
          <span className='text-blue-links mx-1'>|</span>
          <Link to="/Fundacion" className='text-blue-links font-oswald font-semibold uppercase leading-none transition duration-400 ease-in-out'>Fundacion</Link>
          <span className='text-blue-links mx-1'>|</span>
          <button className='flex items-center justify-center text-blue-links font-oswald font-semibold uppercase leading-none transition duration-400 ease-in-out'>
            ESP
            <svg className='ml-1 text-blue-300 w-3 h-3' viewBox="0 0 5 8" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
            </svg>
          </button>


          <button className='flex items-center justify-center py-3 px-4 bg-btn-back rounded-3xl text-white font-bold hover:bg-orange-500 transition duration-700 transform hover:scale-105'>
            <div className="flex items-center">
              Apóyanos
              <box-icon name='gift' color='#eae9e9'></box-icon>
            </div>
          </button>


        </div>

      </header>
    </div>
  );
}

export default Header;
