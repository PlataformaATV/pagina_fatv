import React from "react";
import "./Projects.css";
import imgBannerATV from "../../../public/img_DataAnalytics/banner-DataAnalytics.webp";
import { useState, useEffect } from "react";

function Projects() {
  const [socialMedia, setSocialMedia] = useState([
    {
      href: "https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d",
      name: "facebook-circle",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.instagram.com/somosantivirus/",
      name: "instagram-alt",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w",
      name: "youtube",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.tiktok.com/@somosantivirus",
      name: "tiktok",
      type: "logo",
      color: "#ffffff",
    },
    {
      href: "https://www.linkedin.com/company/antivirus-desercion/",
      name: "linkedin-square",
      type: "logo",
      color: "#ffffff",
    },
  ]);

  const [proyectsContent, setProyectsContent] = useState([
    {
      title: "Universidades",
      img: "https://estaticos.elcolombiano.com/binrepository/580x365/0c0/0d0/none/11101/CFOY/udea_38598473_20210923105540.jpg",
      name: "universidades",
      href: "/Universidades",
    },
    {
      title: "BootCamps",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sSUWjF6jkDN3m9Et_JQTunBm1dYY0NoKeA&s",
      name: "bootcamps",
      href: "/BootCamps",
    },
    {
      title: "Colegios",
      img: "https://bogota.gov.co/sites/default/files/styles/1050px/public/2023-05/laureldeceraokpg.jpeg",
      name: "colegios",
      href: "/Colegios",
    },
    {
      title: "Becarios",
      img: "https://empresas.infoempleo.com/hrtrends/media/2023/02/Empresa-que-decide-contratar-a-becarios.jpg",
      name: "Becarios",
      href: "/Becarios",
    },
  ]);

  const [university, setUniversity] = useState([
    {
      name: "UDEA",
      img: "logo",
      href: "",
    },
  ]);
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full h-60 sm:h-80 md:h-96">
            <img
              src={imgBannerATV}
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
            <h1 className="absolute inset-0 flex items-center justify-center uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-anton text-banner">
              PROYECTOS
            </h1>
            <div className="absolute bottom-4 left-4 flex space-x-2 sm:space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box-icon"
                >
                  <box-icon
                    name={social.name}
                    type={social.type}
                    color={social.color}
                  ></box-icon>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-3xl font-anton text-banner mt-10">
            Nuestros Proyectos
          </h1>
        </div>

        <div className="projects-content">
          {proyectsContent.map((project, index) => (
            <a
              href={project.href}
              key={index}
              className="transform hover:scale-110 cursor-pointer"
            >
              <h1 className="text-2xl font-anton text-blue-links">
                {project.title}
              </h1>
              <img
                className='"object-cover h-48 w-96 rounded-3xl'
                src={project.img}
                alt={project.name}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
export default Projects;
