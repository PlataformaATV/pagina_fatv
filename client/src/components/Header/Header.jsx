import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import 'boxicons'
import { Link } from 'react-router-dom';

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [nav, setNav] = useState(false);
  const [queHacemos, setQueHacemos] = useState(false)
  const [servicios, setServicios] = useState(false);
  const [idioma, setIdioma] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  };


  const handleClikPopupQH = () => {
    setQueHacemos(!queHacemos);
    setServicios(false);
    setIdioma(false);
  };

  const handleClikPopupServices = () => {
    setServicios(!servicios);
    setQueHacemos(false);
    setIdioma(false);
  };

  const handleClikPopupIdioma = () => {
    setIdioma(!idioma);
    setQueHacemos(false);
    setServicios(false);
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'FUNDACION' },
    { id: 3, text: 'QUE HACEMOS' },
    { id: 4, text: 'SERVICIOS' },
    { id: 5, text: 'NOTICIAS' },
    { id: 6, text: 'CONTACTANOS'}
  ];

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
      <header className={`hidden z-50 flex lg:flex justify-between items-center py-3 px-16 max-md:py-2 bg-white fixed w-full transition-all duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className='Links-left flex gap-1 items-center'>
         <Link to="/Home" className='text-title font-extrabold uppercase transition duration-400 ease-in-out max-xl:text-sm object-contain' style={{ letterSpacing: '-1px' }}>Inicio</Link>

          <span className='text-blue-links mx-1'>|</span>
          <Link to="/Fundacion" className='text-title font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm' style={{ letterSpacing: '-1px' }}>FUNDACIÓN</Link>
          <span className='text-title mx-1'>|</span>
          <button onClick={handleClikPopupQH} className='flex items-center text-title  font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm' style={{ letterSpacing: '-1px' }}>QUÉ HACEMOS
          </button>
          <span className='text-title mx-1'>|</span>
          <button onClick={handleClikPopupServices} to="/Servicios" className='text-title  font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm' style={{ letterSpacing: '-1px' }}>SERVICIOS</button>

        </div>

        <div className='logo'>
          <img
            className="h-28 object-contain max-xl:h-24 max-lg:h-14"
            src="/logo.png"
            alt="logo"
          />
        </div>


        <div className='Links-right flex gap-3 items-center'>
          <Link to="/Noticias" className='text-title font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm' style={{ letterSpacing: '-1px' }}>NOTICIAS</Link>
          <span className='text-title mx-1'>|</span>
          <Link to="/Fundacion" className='text-title font-extrabold uppercase leading-none transition duration-400 ease-in-out max-xl:text-sm' style={{ letterSpacing: '-1px' }}>CONTACTANOS</Link>
          <span className='text-title mx-1'>|</span>
          <button onClick={handleClikPopupIdioma} className='flex items-center justify-center text-title font-extrabold uppercase leading-none transition duration-400 ease-in-out' style={{ letterSpacing: '-1px' }}>
            ESP
            <svg className='ml-1 text-blue-300 w-3 h-3' viewBox="0 0 5 8" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.998481 8C0.668876 7.67019 0.340995 7.3421 0.0182923 7.01917C1.01574 6.02528 2.02285 5.0221 3.0303 4.01857C1.998 2.99304 0.990198 1.99192 0 1.008C0.357217 0.651707 0.688548 0.321898 1.01125 0C2.32484 1.31648 3.66846 2.66288 5 3.99759C3.68503 5.3127 2.34348 6.65463 0.998481 8Z"></path>
            </svg>
          </button>


          <button className='flex items-center justify-center py-3 px-4 bg-btn-back rounded-3xl text-white font-bold hover:bg-orange-500 transition duration-700 transform hover:scale-105 max-xl:py-2 px-3'>
            <div className="flex items-center">
              Apóyanos
              <box-icon name='gift' color='#eae9e9'></box-icon>
            </div>
          </button>
          

          {/* <box-icon name='menu'></box-icon> */}


        </div>

      </header>
      

      <div className={`${nav ? 'hidden' :' flex justify-between bg-white items-center px-6 py-2' }`}>

        <div className='logo-responsive-menu'>
        <img
            className="h-28 object-contain max-sm:h-16"
            src="/logo.png"
            alt="logo"
          />
        </div>

      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu className='hover:cursor-pointer' size={30} />}
      </div>

      </div>

      <ul
        className={
          nav
            ? 'fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 p-7'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
        style={{ zIndex: 30 }}
      >
  
 
        <div className='header-navbar-responsive flex justify-between items-center'>

  

          <AiOutlineClose onClick={handleNav} size={30} className='hover:cursor-pointer absolute right-0 pr-2 text-blue-600' /> 
          </div>

        {navItems.map(item => (
          <li
            key={item.id}
            className='p-2 text-blue-links font-extrabold uppercase leading-none transition duration-400 ease-in-out'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {queHacemos && (
        <div className="text-2xl px-28 bg-blue-links text-white font-bold">
          <ul className='flex items-center justify-between p-5'>
            <li className='border-b-4 hover:opacity-55 hover:text-purple-300'>ANALÍTICA DE DATOS</li>
            <li className='border-b-4 hover:opacity-55 hover:text-purple-300'>INTERVENCIÓN SOCIO-EMOCIONAL</li>
            <li className='border-b-4 hover:opacity-55 hover:text-purple-300'>COMUNICACIONES</li>
          </ul>
        </div>
      )}

{servicios && (
        <div className="text-2xl px-28 bg-blue-links text-white font-bold">
          <ul className='flex items-center justify-between p-5'>
            <li className='border-b-4 hover:opacity-55 hover:text-purple-300'>A LOS ESTUDIANTES</li>
            <li className='border-b-4 hover:opacity-55 hover:text-purple-300'>CONSULTORÍAS E IMPLEMENTACIÓN DE PROYECTOS</li>
          </ul>
        </div>
      )}

{idioma && (
        <div className="text-2xl px-72 bg-blue-links text-white font-bold">
          <ul className='flex items-center justify-between p-5'>
            <li className='border-b-4 hover:opacity-55 hover:text-purple-300'>ESP</li>
            <li className='border-b-4 hover:opacity-55 hover:text-purple-300'>ING</li>
          </ul>
        </div>
      )}
      
    </div>
  );
}

export default Header;
