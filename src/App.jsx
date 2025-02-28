import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { FaWhatsapp } from "react-icons/fa";
import ReactGA from "react-ga4";
import { motion } from "framer-motion";

ReactGA.initialize("G-ET67W0VKEH");
ReactGA.send("pageview");

import "./App.css";

// proyect imports
import ProfileCard from "./components/ProfileCard";
import InstagramCarousel from "./components/InstagramCarousel";
import SponsorCard from "./components/Sponsor";
import Sidebar from "./components/Sidebar";
import News from "./components/News";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedTitle from "./components/AnimatedTitle";
import AnimatedP from "./components/AnimatedP";
import SubtitleTypewriter from "./components/SubtitleTypewriter";

const fadeInAnimation = {
  hidden: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // Simula carga
  }, []);

  const sections = {
    video: useRef(null),
    section1: useRef(null),
    colaboradores: useRef(null),
    section2: useRef(null),
    aboutUs: useRef(null),
    Noticias: useRef(null),
    patrocinadores: useRef(null),
  };

  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  const sponsors = [
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 80, top: 10, left: 35 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 120, top: 20, left: 70 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 100, top: 30, left: 25 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 80, top: 40, left: 90 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 200, top: 50, left: 50 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 100, top: 60, left: 15 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 80, top: 70, left: 70 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 120, top: 80, left: 30 },
  ];

  const sponsorsMobile = [
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 80/1.5, top: 10, left: 35 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 120/1.5, top: 20, left: 70 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 100/1.5, top: 30, left: 25 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 80/1.5, top: 40, left: 90 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 200/1.5, top: 50, left: 50 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 100/1.5, top: 60, left: 15 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 80/1.5, top: 70, left: 70 },
    { logoUrl: "https://exhibit.mx/wp-content/uploads/2022/07/cropped-LOGO-EXHIBIT-VARIACIONES-04-1-1.png", sponsorName: "Exhibit", website: "https://exhibit.mx/", size: 120/1.5, top: 80, left: 30 },
  ];


  const colaboladores = [
    { logoUrl: "/LideresDelCambio/Colaboradores/PonceYAsociados.jpg", sponsorName: "Ponce & Asociados", website: "https://www.instagram.com/ponce_y_asociados/", size: 200, top: 50, left: 75 },
    { logoUrl: "/LideresDelCambio/Colaboradores/Jardin Campestre Arboleda.jpg", sponsorName: "Jardin Campestre Arboleda", website: "https://www.instagram.com/jardincampestrearboleda/", size: 200, top: 50, left: 50 },
    { logoUrl: "/LideresDelCambio/Colaboradores/LaCocina.jpg", sponsorName: "La Cocina", website: "https://www.instagram.com/lacocina9/", size: 200, top: 50, left: 25 },
  ];

  const colaboladoresMobile = [
    { logoUrl: "/LideresDelCambio/Colaboradores/PonceYAsociados.jpg", sponsorName: "Ponce & Asociados", website: "https://www.instagram.com/ponce_y_asociados/", size: 200/2, top: 50, left: 80 },
    { logoUrl: "/LideresDelCambio/Colaboradores/Jardin Campestre Arboleda.jpg", sponsorName: "Jardin Campestre Arboleda", website: "https://www.instagram.com/jardincampestrearboleda/", size: 200/2, top: 50, left: 50 },
    { logoUrl: "/LideresDelCambio/Colaboradores/LaCocina.jpg", sponsorName: "La Cocina", website: "https://www.instagram.com/lacocina9/", size: 200/2, top: 50, left: 20 },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <a
        href="https://wa.me/526568501265"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center gap-2 text-lg hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
        Contáctanos
      </a>

      {/* 🔘 Barra de Navegación */}
      <Sidebar
        scrollToSection={scrollToSection}
        sections={sections}
      />

    <LoadingScreen isLoading={loading} />

      {/* 🎥 Sección del Video */}
      <section ref={sections.video} className="video-section">
        <div className="video-container">
          <video autoPlay loop muted playsInline className="background-video">
            <source src="/LideresDelCambio/assets/Background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-10xl xl:text-[12rem] mainTitle">
              Líderes del
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-10xl xl:text-[12rem] TitleCambio font-breathing">
              Cambio
            </h1>
            <SubtitleTypewriter></SubtitleTypewriter>
          </div>
        </div>
      </section>

      <section
        ref={sections.section1}
        className="content-section"
      >
        <AnimatedTitle className="text-center text-3xl font-bold mb-6" text={"Organización"} />

        {/* 📌 Contenedor con scroll en móviles y centrado en pantallas grandes */}
        <div className="relative w-full flex sm:justify-start lg:justify-center">
          <div 
            className="overflow-x-auto p-4 scrollbar-hide w-full flex sm:justify-start lg:justify-center"
            ref={(el) => {
              if (el) el.scrollLeft = 0; // 📌 Asegura que el scroll empiece desde la izquierda
            }}
          >
            <div className="flex space-x-6 w-max sm:mx-0 lg:mx-auto">
              <ProfileCard
                image="/LideresDelCambio/colaboladores/CarlosVillarreal.jpg"
                name="Carlos Villarreal"
                info="Director de Lideres Del Cambio | Jefe Local de Intervención Comunitaria en Cruz Roja Juventud, Ciudad Juárez."
              />
              <ProfileCard
                image="/LideresDelCambio/colaboladores/FidelTamayo.jpg"
                name="Fidel Tamayo"
                info="Agente Comunitario para Red Mesa de Mujeres en Ciudad Juárez | Activista Social, Cordinador Operacional de Líderes del Cambio."
              />
              <ProfileCard
                image="/LideresDelCambio/colaboladores/DemianCalleros.ico"
                name="Demian Calleros"
                info="Programador apasionado por construir soluciones escalables usando tecnología | Colaborador de Líderes del Cambio."
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={sections.colaboradores} className="content-section">
        <AnimatedTitle className="text-center text-3xl font-bold mb-6" text={"Colaboradores"} />
        <div className="relative w-full h-[70vh] flex justify-center items-center">
          {(isMobile ? colaboladoresMobile : colaboladores).map((sponsor, index) => (
            <SponsorCard key={index} {...sponsor} />
          ))}
        </div>
      </section>

      <section ref={sections.aboutUs} className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <AnimatedTitle className="text-center text-3xl font-bold mb-6" text={"Líderes del Cambio"} />
          <AnimatedP className="text-lg leading-relaxed text-center lg:text-left" text={"Líderes del Cambio es un evento anual que busca inspirar, reconocer y conectar a jóvenes que están generando un impacto positivo en la sociedad. A través de este espacio, celebramos el liderazgo, la innovación y el compromiso de quienes trabajan por transformar su entorno."} />
        </div>
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <img src="/LideresDelCambio/colaboladores/CarlosVillarreal.jpg"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg object-cover"
            alt="Líderes del Cambio"
          />
        </motion.div>
      </section>

      <section className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <AnimatedTitle className="text-center text-3xl font-bold mb-6" text={"Evento en Planeación"} />
          <AnimatedP className="text-lg leading-relaxed text-center lg:text-left" text={"Esta primera edición ha sido planeada durante meses con el objetivo de visibilizar el esfuerzo de jóvenes que, desde distintos ámbitos, están impulsando cambios significativos. Creemos firmemente en el poder de la juventud para construir un futuro mejor y en la importancia de reconocer a quienes, con su dedicación y trabajo, están marcando la diferencia."} />
        </div>
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <img src="/LideresDelCambio/colaboladores/CarlosVillarreal.jpg"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg object-cover"
            alt="Evento en Planeación"
          />
        </motion.div>
      </section>

      <section className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <AnimatedTitle className="text-center text-3xl font-bold mb-6" text={"Colaboradores en acción"} />
          <AnimatedP className="text-lg leading-relaxed text-center lg:text-left" text={"El evento es posible gracias al apoyo de colaboradores, aliados estratégicos y voluntarios que han sumado esfuerzos para hacerlo realidad. Su compromiso ha sido clave para construir un espacio que no solo celebra logros, sino que también inspira nuevas generaciones a seguir actuando por un mundo más justo y sostenible."} />
        </div>
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <img src="/LideresDelCambio/colaboladores/CarlosVillarreal.jpg"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg object-cover"
            alt="Colaboradores en acción"
          />
        </motion.div>
      </section>

      <section className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <AnimatedTitle className="text-center text-3xl font-bold mb-6" text={"Futuro del liderazgo juvenil"} />
          <AnimatedP className="text-lg leading-relaxed text-center lg:text-left" text={"Con Líderes del Cambio, damos inicio a un legado que seguirá creciendo año con año. Este es solo el comienzo de un movimiento que reconoce el presente y el futuro del liderazgo juvenil."} />
        </div>
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <img src="/LideresDelCambio/colaboladores/CarlosVillarreal.jpg"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg object-cover"
            alt="Futuro del liderazgo juvenil"
          />
        </motion.div>
      </section>

      <section ref={sections.section2} className="content-section h-screen flex flex-col justify-center items-center">
        <AnimatedTitle className="text-center text-3xl font-bold mb-4" text={"Redes Sociales"} />
        <motion.div 
          className="w-full max-w-5xl h-[75vh] flex justify-center items-center"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <InstagramCarousel />
        </motion.div>
      </section>

      <section ref={sections.Noticias} className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16">
        <AnimatedTitle className="text-4xl font-bold mb-4 text-center lg:text-left" text={"Noticias"} />
        <motion.div 
          className="relative w-full flex justify-center items-center"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <News></News>
        </motion.div>
      </section>

      <section ref={sections.patrocinadores} className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16">
        <AnimatedTitle className="text-4xl font-bold mb-4 text-center lg:text-left" text={"Patrocinadores"} />
        <div className="relative w-full h-[70vh] flex justify-center items-center">
          {(isMobile ? sponsorsMobile : sponsors).map((sponsor, index) => (
            <SponsorCard key={index} {...sponsor} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
