import React from 'react'
import imgFB from '../../../public/img_Foundation/imgF.jpg'
import Footer from '../Footer/Footer'
import "./FoundationATV.css"

function FoundationATV() {
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
    <Footer />

    </div>
  )
}

export default FoundationATV