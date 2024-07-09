import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import imgBanner from "../../public/img_viewQHav/slider-servicios.webp";
import imgContact from "../../public/contactUs/contact-image.jpg";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "emailjs-com";

function ContacUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\d{10}$/; // 10 dígitos numéricos
    const nameRegex = /^[a-zA-Z\s]+$/;

    tempErrors.fullName = nameRegex.test(formData.fullName)
      ? ""
      : "Nombre completo es requerido y solo debe contener letras y espacios.";
    tempErrors.email = emailRegex.test(formData.email)
      ? ""
      : "Correo electrónico es inválido.";
    tempErrors.phone = phoneRegex.test(formData.phone)
      ? ""
      : "Teléfono es requerido y debe ser un número de 10 dígitos.";
    tempErrors.subject = formData.subject ? "" : "Asunto es requerido.";
    tempErrors.message = formData.message ? "" : "Mensaje es requerido.";
    tempErrors.terms = formData.terms
      ? ""
      : "Debe aceptar los términos y condiciones.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "terms" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .send(
          "YOUR_SERVICE_ID", // Reemplaza con tu service ID de EmailJS
          "YOUR_TEMPLATE_ID", // Reemplaza con tu template ID de EmailJS
          formData,
          "YOUR_USER_ID" // Reemplaza con tu user ID de EmailJS
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.error("FAILED...", err);
        });
    }
  };

  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-60 sm:h-80 md:h-96">
          <img
            src={imgBanner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
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
              <box-icon
                name="facebook-circle"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </a>
            <a
              href="https://www.instagram.com/somosantivirus/"
              target="_blank"
              rel="noopener noreferrer"
              className="box-icon"
            >
              <box-icon
                name="instagram-alt"
                type="logo"
                color="#ffffff"
              ></box-icon>
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
              <box-icon
                name="linkedin-square"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-20 flex flex-col lg:flex-row justify-center items-center gap-20">
        <div className="relative">
          <img src={imgContact} className="w-full lg:w-auto" />

          <div className="absolute bg-blue-links text-white bottom-0 left-0 p-4 w-full lg:w-80 text-center">
            <div className="flex items-center justify-center gap-2">
              <p className="text-2xl font-bold">Google Maps</p>
              <FaLocationDot />
            </div>

            <a
              className="text-xl"
              href="https://www.google.com/maps/place/Fundacion+Antivirus+para+la+Desercion/@6.1546087,-75.6316542,17z/data=!3m1!4b1!4m6!3m5!1s0x8e468164563dd5f3:0xe4f4c0dbfe0be02e!8m2!3d6.1546034!4d-75.6290793!16s%2Fg%2F11vf1_zb9j?hl=es&entry=ttu"
            >
              Encuéntranos aquí{" "}
            </a>
          </div>
        </div>

        <div className="w-full lg:w-450 max-md:p-6 max-lg:p-6 max-sm:text-center">
          <p className="tracking-nm text-blue-links">COMENCEMOS</p>

          <h1 className="font-anton text-blue-links text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 mt-2">
            UNA CONVERSACIÓN ¿TIENES ALGUNA PREGUNTA? ¡TENEMOS LA RESPUESTA!
          </h1>

          <p className="text-blue-links font-bold">Sede principal</p>
          <p className="text-cc">Cl 79 S 50-69 La Estrella </p>
          <p className="text-cc">Medellín - Antioquia - Colombia</p>
          <p className="text-blue-links font-bold">Correo electrónico</p>
          <p className="text-cc">
            contactenos@fundacionantivirusparaladesercion.org
          </p>

          <p className="text-blue-links font-bold">WhatsApp</p>
          <p className="text-cc">3206417053</p>
        </div>
      </div>
      <div className="w-full  h-full  mb bg-white">
        <h3 className="font-anton  text-5xl  text-title text-center -mt-6 absolute leading-none mx-auto left-0 right-0  xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl md:-mt-8 lg:-mt-10 sm:-mt-6 xl:-mt-12">
          ESCRÍBENOS AQUÍ
        </h3>

        <div className="bg-blue-links w-full h-90 mb-20 flex items-center justify-center">
          <form
            className="w-full h-full px-8 py-10 md:px-44 md:py-32 bg-blue-link text-white shadow-md rounded-md relative"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="NOMBRE COMPLETO"
                  className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="CORREO ELECTRÓNICO"
                  className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="TELÉFONO"
                  className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ASUNTO"
                  className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className="text-red-500">{errors.subject}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <textarea
                placeholder="MENSAJE"
                className="w-full p-2 bg-blue-links text-white placeholder-white border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              <span>
                He leído y acepto la{" "}
                <a href="#" className="text-white underline">
                  Política de Privacidad
                </a>{" "}
                y los{" "}
                <a href="#" className="text-white underline">
                  Términos y Condiciones
                </a>
              </span>
              {errors.terms && <p className="text-red-500">{errors.terms}</p>}
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContacUs;
