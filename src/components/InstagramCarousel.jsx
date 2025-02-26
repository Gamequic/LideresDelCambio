import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 📌 Componente para cada publicación de Instagram
const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "10px",
          boxShadow: "0 0 5px rgba(0,0,0,0.2)",
          margin: "auto",
          maxWidth: "600px",
          minWidth: "600px",
          minHeight: "400px",
          maxHeight: "400px",
          padding: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></blockquote>
    </div>
  );
};


// 📌 Componente del carrusel de Instagram
const InstagramCarousel = () => {
  const instagramPosts = [
    "https://www.instagram.com/p/DFN9MCSJocH/",
    "https://www.instagram.com/p/DFwHHN9yVuV/",
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
    <div className="flex justify-center items-center w-full h-[60vh]">
      <Slider {...settings} className="w-full max-w-lg h-full">
        {instagramPosts.map((url, index) => (
          <div key={index} className="flex justify-center items-center h-full">
            <InstagramEmbed url={url} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstagramCarousel;
