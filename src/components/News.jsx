import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 📌 Componente para cada noticia
const News = ({ title, info, date }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-6 bg-gray-100 shadow-lg rounded-lg text-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600 mt-2">{info}</p>
      <span className="text-sm text-gray-500 mt-2">{date}</span>
    </div>
  );
};

// 📌 Componente del carrusel de noticias
const NewsCarousel = () => {
  const newsItems = [
    {
      title: "Nuevo lanzamiento",
      info: "Se ha lanzado una nueva actualización con mejoras de rendimiento.",
      date: "Febrero 27, 2025",
    },
    {
      title: "Evento especial",
      info: "Únete a nuestro evento en vivo este fin de semana.",
      date: "Febrero 25, 2025",
    },
    {
      title: "Mantenimiento programado",
      info: "El sistema estará en mantenimiento el próximo lunes.",
      date: "Febrero 22, 2025",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    pauseOnHover: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "5px",
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center w-full h-[60vh] p-4">
      <Slider {...settings} className="w-full max-w-lg h-full">
        {newsItems.map((news, index) => (
          <div key={index} className="flex justify-center items-center p-6 h-full">
            <News title={news.title} info={news.info} date={news.date} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
