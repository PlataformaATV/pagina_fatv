import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from "../../assets/Banner/banner1.jpeg";
import banner2 from "../../assets/Banner/banner2.jpeg";
import banner3 from "../../assets/Banner/banner3.jpeg";
import banner4 from "../../assets/Banner/banner4.jpeg";
import banner5 from "../../assets/Banner/banner5.jpeg";
import banner6 from "../../assets/Banner/banner6.jpeg";
import banner7 from "../../assets/Banner/banner7.jpeg";
import "./Banner.css";


const Banner = () => {
  
  

  return (
    <div className="banner-container">
      <Carousel className='carousel'>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={banner1} alt="Slide 1" />
          <div className="carousel-text">
            <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
            <p>A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA ANALÍTICA DE DATOS</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={banner2} alt="Slide 2" />
          <div className="carousel-text">
            <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
            <p>A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA ANALÍTICA DE DATOS</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={banner3} alt="Slide 3" />
          <div className="carousel-text">
            <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
            <p>A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA ANALÍTICA DE DATOS</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={banner4} alt="Slide 4" />
          <div className="carousel-text">
            <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
            <p>A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA ANALÍTICA DE DATOS</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={banner5} alt="Slide 5" />
          <div className="carousel-text">
            <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
            <p>A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA ANALÍTICA DE DATOS</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={banner6} alt="Slide 6" />
          <div className="carousel-text">
            <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
            <p>A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA ANALÍTICA DE DATOS</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={banner7} alt="Slide 7" />
          <div className="carousel-text" >
            <h1>FOMENTAMOS LA PERMANENCIA ESTUDIANTIL</h1>
            <p>A TRAVÉS DEL APOYO SOCIOPEDAGÓGICO, LAS COMUNICACIONES Y LA ANALÍTICA DE DATOS</p>
          </div>
        </Carousel.Item>
      </Carousel >
      <div className="icon-container">
        <a href="https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
          <box-icon type='logo' name='facebook-circle'></box-icon>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <box-icon name='instagram-alt' type='logo'></box-icon>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <box-icon name='youtube' type='logo'></box-icon>
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
          <box-icon name='tiktok' type='logo' ></box-icon>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <box-icon name='linkedin-square' type='logo' ></box-icon>
        </a>
      </div>
    </div>
  );
};

export default Banner;
