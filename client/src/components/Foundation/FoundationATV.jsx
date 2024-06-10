import React, { useState } from 'react';
import 'boxicons'
import imgFB from '../../../public/img_Foundation/imgF.jpg'
import imgF2 from '../../../public/img_Foundation/imgF2.jpg'
import imgF3 from '../../../public/img_Foundation/imgF3.jpg'
import OurTeam from '../ourTeam/OurTeam';
import Footer from '../Footer/Footer';
import "./FoundationATV.css"



function FoundationATV() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  

  return (
    <div className="relative w-full h-60 sm:h-80 md:h-96 "> 
      <img src={imgFB} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
      <h1 className="absolute inset-0 flex items-center justify-center text-banner uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-anton text-banner">
      NUESTRA FUNDACIÓN
      </h1>
      <div className="absolute bottom-4 left-4 flex space-x-2 sm:space-x-4">
      <a
        href="https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d"
        target="_blank"
        rel="noopener noreferrer"
        className="box-icon"
      >
        <box-icon name="facebook-circle" type="logo" color="#ffffff"></box-icon>
      </a>
      <a
          href="https://www.instagram.com/somosantivirus/"
          target="_blank"
          rel="noopener noreferrer"
          className="box-icon"
        >
          <box-icon name="instagram-alt" type="logo" color="#ffffff"></box-icon>
      </a>
      <a
          href="https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w"
          target="_blank"
          rel="noopener noreferrer"
          className="box-icon"
        >
          <box-icon name="youtube" type="logo" color="#ffffff"></box-icon>
      </a>
      <a
          href="https://www.tiktok.com/@somosantivirus"
          target="_blank"
          rel="noopener noreferrer"
          className="box-icon"
        >
          <box-icon name="tiktok" type="logo" color="#ffffff"></box-icon>
      </a>
      <a
          href="https://www.linkedin.com/company/antivirus-desercion/"
          target="_blank"
          rel="noopener noreferrer"
          className="box-icon"
        >
          <box-icon name="linkedin-square" type="logo" color="#ffffff"></box-icon>
      </a>
      </div>

      <div className="aboutUs">
      <div className="aboutUs-content">
        <div className="left-content">
          <p className="title">¿Quiénes Somos?</p>
          <h4 className="subtitle">
          Somos una organización sin ánimo de lucro que
          </h4>
        </div>
        <div className="right-content">
          <p className="right-paragraph">
          Busca disminuir los niveles de deserción estudiantil en Colombia, mejorar los niveles de permanencia y de graduación, siendo esta nuestra manera de aportar al logro de un país con más educación y consecuentemente con más desarrollo.
          </p>
        </div>
      </div>
      </div>

      <div className='flex justify-end'>
        <div className='contVideoF flex flex-row '>
        <div className='relative flex mr-6 '>
          <picture style={{ height: '100%' }}>
            <img src={imgF2} alt="img2" style={{ objectFit: 'cover', height: '100%' }}/>
            <div className='iconGrande absolute inset-0 flex items-center justify-center'>
              <button onClick={openPopup} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                <box-icon name='play-circle' color='white' style={{ fontSize: '5rem', width: '5rem', height: '5rem' }}></box-icon>
              </button>
            </div>
          </picture>
        </div>
        <div className='relative w-auto h-1/2 overflow-hidden' style={{ height: '100%' }}>
          <img src={imgF3} alt="img3" className='w-full h-full img3' style={{ clipPath: 'inset(0 25% 0 0)', objectFit: 'cover' }} />
        </div>
        {isOpen && (
          <div className="popup-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="popup-content" style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
              <button onClick={closePopup} className='buttonF' style={{ position: 'absolute', top: '-40px', right: '0%', background: 'none', border: 'none', fontSize: '24px', color: 'white', cursor: 'pointer', zIndex: 10000 }}>
              &times;
              </button>
              <iframe
                title="YouTube Video"
                src="https://www.youtube.com/embed/gzePCxLy8Ak"
                style={{ width: '800px', height: '450px', border: 'none' }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        </div>
      </div>
      
      <OurTeam/>
      <Footer/>

    </div>
  )
}

export default FoundationATV