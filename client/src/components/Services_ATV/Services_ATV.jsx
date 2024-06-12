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
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="43" viewBox="0 0 60 43" fill="none">
            <path d="M0 42.9277V0.107147C0.426178 0.0750296 0.809471 0.0215006 1.19544 0.0215006C6.53741 0.0161476 11.8794 0.0348828 17.2214 8.89307e-05C18.0255 -0.00526397 18.5213 0.230264 18.9529 0.915436C19.9982 2.57484 21.1669 4.15394 22.1961 5.8187C22.6545 6.5574 23.1691 6.7956 24.0268 6.79292C31.9526 6.75813 39.8758 6.77151 47.8017 6.77151C48.2868 6.77151 48.7746 6.77151 49.426 6.77151V15.85H60C59.8445 16.3719 59.7614 16.7413 59.6247 17.0919C56.3708 25.3809 53.0954 33.6645 49.8736 41.9669C49.5546 42.7859 49.1418 43.0027 48.319 43C32.604 42.9786 16.8863 42.9839 1.17132 42.9812C0.825553 42.9812 0.477105 42.9491 0 42.925L0 42.9277ZM6.65267 38.3403C7.10029 38.3751 7.3174 38.4072 7.53719 38.4072C20.1376 38.4072 32.738 38.3992 45.3384 38.4313C46.1747 38.4313 46.4963 38.0994 46.7697 37.3928C48.8068 32.1657 50.8787 26.9493 52.9346 21.7302C53.0766 21.3716 53.1677 20.9942 53.3312 20.4723C51.4979 20.4723 49.82 20.4723 48.1394 20.4723C37.0963 20.4723 26.0558 20.4883 15.0127 20.4455C13.9379 20.4402 13.4528 20.7533 13.1016 21.7704C12.3645 23.9169 11.4666 26.0072 10.6384 28.1216C9.32767 31.4725 8.01966 34.8234 6.64731 38.3429L6.65267 38.3403ZM44.8238 11.3429C44.2126 11.3429 43.7275 11.3429 43.2397 11.3429C37.6297 11.3429 32.0197 11.3456 26.4123 11.3429C24.4557 11.3429 22.1532 11.9478 20.6335 11.1234C19.0654 10.2723 18.138 8.08298 17.149 6.35399C16.3315 4.92744 15.321 4.48582 13.7235 4.55541C10.7161 4.68656 7.69533 4.59288 4.66384 4.59288V30.4929C6.5535 26.1678 8.31986 21.8426 9.93076 17.4613C10.3998 16.1873 11.0217 15.8554 12.327 15.8634C22.6116 15.925 32.8961 15.8982 43.178 15.8982H44.8211V11.3456L44.8238 11.3429Z" fill="white"/>
          </svg>
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
        <div className='flex gap-16 items-center justify-center md:max-w-full md:h-auto md:flex-col md:gap-6' style={{ width: '100%', height: '100%', transform: `translateX(0%)` }}>
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

    <div className='flex items-center justify-center ml-[40rem] max-md:flex-col max-md:ml-[0rem] max-md:items-start max-md:justify-start max-lg:ml-[2rem]
    max-xl: '>

      <div className=''>
        <div className='contNext flex bg-content h-40 flex-col justify-center text-center'>
          <div className='mx-10 w-full max-xl:mx-2'>

            <div className='text-xl'>
              <p className='text-white text-left leading-4 font-roboto '>Sabemos cómo ayudarte</p>
            </div>

          <p className='text-white text-left font-bold '>Conoce nuestros</p>
          <p className='text-white text-left leading-4 font-bold'>servicios</p>
          </div>
        </div>
      </div>


      <div className="btn_Serv flex justify-end">
          <div className='flex justify-between'>
          <button className='btnLeft px-14' onClick={handleClickPrev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M4.37031 6.28395C4.83133 6.28395 5.08628 6.28395 5.33991 6.28395C8.02414 6.28395 10.7084 6.28129 13.3926 6.28793C13.6753 6.28926 13.9699 6.30917 14.2354 6.39278C14.7928 6.56797 15.0267 7.00462 14.9976 7.56869C14.9672 8.14602 14.6383 8.50968 14.0874 8.63975C13.8563 8.69416 13.6066 8.67691 13.3649 8.67691C10.6806 8.67956 7.9964 8.67558 5.31217 8.68222C5.06118 8.68222 4.8102 8.73132 4.40069 8.77512C4.64111 9.08967 4.77321 9.30335 4.94362 9.47722C6.04003 10.5961 7.14701 11.7029 8.24475 12.8205C8.87882 13.4668 8.92902 14.0694 8.41251 14.6175C7.89072 15.1709 7.23684 15.1258 6.56974 14.4702C4.5711 12.5072 2.5751 10.5416 0.58438 8.57206C-0.191036 7.80493 -0.194998 7.2475 0.573813 6.48038C2.57246 4.48691 4.57638 2.49742 6.58427 0.513238C7.2157 -0.111879 7.86959 -0.16364 8.37552 0.346009C8.92901 0.903437 8.88542 1.52723 8.22757 2.19614C7.12984 3.31232 6.02154 4.41922 4.92644 5.53806C4.75604 5.70927 4.63319 5.92428 4.37031 6.28395Z" fill="#7C78B3"/>
            </svg>
          </button>
          <button className='btnRigth px-14' onClick={handleClickNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M10.6297 8.71617C10.1687 8.71617 9.91372 8.71617 9.66009 8.71617C6.97586 8.71617 4.29162 8.71883 1.60739 8.71219C1.3247 8.71087 1.03012 8.69096 0.764605 8.60734C0.207152 8.43215 -0.0266621 7.9955 0.00239946 7.43143C0.032782 6.8541 0.361706 6.49044 0.912555 6.36038C1.14373 6.30596 1.39339 6.32321 1.63513 6.32321C4.31936 6.32056 7.0036 6.32454 9.68783 6.3179C9.93882 6.3179 10.1898 6.2688 10.5993 6.225C10.3589 5.91045 10.2268 5.69677 10.0564 5.52291C8.95997 4.40407 7.85299 3.29717 6.75525 2.17966C6.12118 1.53331 6.07098 0.930758 6.58749 0.38262C7.10928 -0.170826 7.76316 -0.125701 8.43026 0.529941C10.4289 2.49288 12.4249 4.45848 14.4156 6.42806C15.191 7.19519 15.195 7.75262 14.4262 8.51975C12.4275 10.5132 10.4236 12.5027 8.41572 14.4869C7.7843 15.112 7.13041 15.1638 6.62448 14.6541C6.07098 14.0967 6.11458 13.4729 6.77242 12.804C7.87016 11.6878 8.97846 10.5809 10.0736 9.46207C10.244 9.29086 10.3668 9.07585 10.6297 8.71617Z" fill="#7C78B3"/>
            </svg>
          </button>
          </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default ServicesATV;
