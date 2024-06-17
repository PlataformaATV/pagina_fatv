import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import imgBanner from '../../public/img_viewQHav/slider-servicios.webp'
import imgContact from '../../public/contactUs/contact-image.jpg'
import { FaLocationDot } from "react-icons/fa6";

function ContacUs() {
    return (
        <div>
            <Header />

            <div className='flex flex-col items-center justify-center'>
                <div className="relative w-full h-60 sm:h-80 md:h-96">
                    <img src={imgBanner} alt="Banner" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
                    <h1 className="absolute inset-0 flex items-center justify-center text-banner uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-anton text-banner">
                        Contáctenos
                    </h1>
                    <div className="absolute bottom-4 left-20 flex space-x-2 sm:space-x-4">
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
                </div>
            </div>




            <div className='mt-20 mb-20 flex flex-col lg:flex-row justify-center items-center gap-20'>

<div className='relative'>
    <img src={imgContact} className='w-full lg:w-auto' />

    <div className='absolute bg-blue-links text-white bottom-0 left-0 p-4 w-full lg:w-80 text-center'>

        <div className='flex items-center justify-center gap-2'>
            <p className='text-2xl font-bold'>Google Maps</p>
            <FaLocationDot />
        </div>

        <p className='text-xl'>Encuéntranos aquí</p>

    </div>

</div>

<div className='w-full lg:w-450 max-md:p-6 max-lg:p-6 max-sm:text-center'>
    <p className='tracking-nm text-blue-links'>COMENCEMOS</p>

    <h1 className='font-anton text-blue-links text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 mt-2'>UNA CONVERSACIÓN ¿TIENES ALGUNA PREGUNTA? ¡TENEMOS LA RESPUESTA!</h1>

    <p className='text-blue-links font-bold'>Sede principal</p>
    <p className='text-cc'>Cl 79 S 50-69 La Estrella </p>
    <p className='text-cc'>Medellín - Antioquia - Colombia</p>
    <p className='text-blue-links font-bold'>Correo electrónico</p>
    <p className='text-cc'>contactenos@fundacionantivirusparaladesercion.org</p>

    <p className='text-blue-links font-bold'>WhatsApp</p>
    <p className='text-cc'>3206417053</p>

</div>

</div>






            <Footer />
        </div>
    )
}

export default ContacUs