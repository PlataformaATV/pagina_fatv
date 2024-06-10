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
      <div className='foundation_values--cnt'>
        <div className='foundation_values--content'>
          <h5>TEORÍA DEL CAMBIO</h5>
          <p>Identificar estudiantes con vulnerabilidades y acompañarlos integralmente, a través de un ecosistema de estrategias centrado en lo académico, económico y socioemocional para la permanencia.</p>

          <h5>MISIÓN</h5>
          <p>Aumentar las tasas de graduación de estudiantes de carreras y programas en áreas de tecnología, a través de estrategias de promoción de la permanencia y prevención de la deserción.</p>

          <h5>VISIÓN</h5>
          <p>En 5 años vamos a tener presencia a nivel nacional, en las 10 mejores universidades del país, donde habremos disminuido la tasa de deserción en 10 puntos porcentuales (del 50 al 40%). Además, vamos a estar replicando un modelo que es referente, cuyo éxito se puede medir cualitativa y cuantitativamente.</p>

          <h5>PROPÓSITO</h5>
          <p>Construir un país próspero, pacífico, armonioso, tecnológico y competitivo, en el cual todos los jóvenes tienen acceso a la educación y son buenos seres humanos, con metas y empoderados de sus vidas. Gracias a esto, lograremos superar la pobreza y nos convertiremos en un referente de desarrollo.</p>

          <h5>VALORES</h5>
          <p>En la Fundación Antivirus para la Deserción hacemos nuestro trabajo de forma colaborativa, con pasión, integridad, autonomía, empatía, compromiso y compañerismo. Somos solidarios e innovadores y tenemos una gran vocación de servicio.</p>

          <h5>PÚBLICO OBJETIVO</h5>
          <p>Trabajamos con estudiantes de carreras y programas TI de Educación Media y Postsecundaria. Enfocamos nuestra intervención en estudiantes vulnerables a la deserción.</p>

          <h5>PRIORIDADES</h5>
          <ul>
            <li>Consolidar un modelo con procesos de identificación de vulnerabilidades, intervención e indicadores de resultados.</li>
            <li>Explorar modelos de intervención desde los colegios para aportar a reducir la deserción en educación superior.</li>
            <li>Conocer e involucrar a otros actores en el trabajo por la permanencia (Rectores, Decanos, MEN, Empresas, entre otros).</li>
            <li>Ayudar a reducir la deserción en otras universidades y programas para afinar nuestro modelo y generar ingresos que aporten a la sostenibilidad de la Fundación Antivirus.</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default FoundationATV