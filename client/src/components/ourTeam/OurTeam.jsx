import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurTeam.css";

function OurTeam() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="OurTeam-block">
      <div className="OurTeam-block-title">
        <h3>sobre nuestro <br/>equipo</h3>
      </div>
      <div className="OurTeam">
        <div className="cards">
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index} className="card">
                <div className="image">
                  <img src={card.image} alt={card.name} />
                </div>
                <div className="OurTeam-content">
                  <div className="OurTeam-content-info">
                    <h5 className="content-info-name">{card.name}</h5>
                    <p className="content-info-role">{card.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    name: "Carlos vásquez restrepo",
    role: "Presidente",
    image: "/img_OurTeam/CarlosVasquez.jpeg",
  },
  {
    name: "astrid franco",
    role: "Coordinadora Área Social",
    image: "/img_OurTeam/AstridFranco.webp",
  },
  {
    name: "luis fernando sánchez",
    role: "Director",
    image: "/img_OurTeam/LuisSanchez.webp",
  },
  {
    name: "karen gonzález",
    role: "Coordinadora Área Evaluación y Datos",
    image: "/img_OurTeam/KarenGonzales.jpg",
  },
  {
    name: "Víctor Manuel Valencia",
    role: "Subdirector",
    image: "/img_OurTeam/VictorValencia.jpeg",
  },
  {
    name: "jazmín alzate",
    role: "Coordinadora Alianzas y Cooperación",
    image: "/img_OurTeam/JazminAlzate.jpeg",
  },
  {
    name: "david santiago botero",
    role: "Coordinador Área Legal",
    image: "/img_OurTeam/DavidBotero.webp",
  },
  {
    name: "daniela correa",
    role: "Coordinadora Área Comunicaciones",
    image: "/img_OurTeam/DanielaCorrea.webp",
  },
  {
    name: "luis fernando gonzález",
    role: "Coordinador Área Administrativa y Financiera",
    image: "/img_OurTeam/LuisGonzales.webp",
  },
];

export default OurTeam;
