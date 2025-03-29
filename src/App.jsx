import { useRef, useState, useEffect } from "react";
import ReactGA from "react-ga4";
import { motion } from "framer-motion";

ReactGA.initialize("G-ET67W0VKEH");
ReactGA.send("pageview");

import "./App.css";

// proyect imports
import WhatsAppButton from "./components/ContactUs";
import ProfileCard from "./components/ProfileCard";
import InstagramCarousel from "./components/InstagramCarousel";
import Sidebar from "./components/Sidebar";
import LoadingScreen from "./components/LoadingScreen";
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
    section2: useRef(null),
    aboutUs: useRef(null),
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      
      <WhatsAppButton />

      {/* 🔘 Barra de Navegación */}
      <Sidebar
        scrollToSection={scrollToSection}
        sections={sections}
      />

    <LoadingScreen isLoading={loading} />

      {/* 🎥 Sección del Video */}
      <section ref={sections.video} className="video-section z-40">
        <div className="video-container">
          <video autoPlay loop muted playsInline className="background-video">
            <source 
              preload="metadata"
              src="/assets/media.mp4"
              type="video/mp4; codecs=av01.0.04M.08"
            />
            <source 
              src="/assets/media2.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          <div className="overlay">
            <div className="textOverlay">
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-10xl xl:text-[12rem] mainTitle">
                Líderes del
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-10xl xl:text-[12rem] TitleCambio font-breathing">
                Cambio
              </h1>
            </div>
            {/* <SubtitleTypewriter></SubtitleTypewriter> */}
          </div>
        </div>
      </section>

      <section
        ref={sections.section1}
        className="content-section bg-zinc-800"
      >
        <motion.h2 
          className="text-center text-3xl font-bold mb-6"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >Organización</motion.h2>

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
                image="/Organizacion/CarlosVillarreal.jpg"
                name="Carlos Villarreal"
                info="Director de Lideres Del Cambio | Jefe Local de Intervención Comunitaria en Cruz Roja Juventud, Ciudad Juárez."
                username="carlosvillacorrall"
              />
              <ProfileCard
                image="/Organizacion/FidelTamayo.jpg"
                name="Fidel Tamayo"
                info="Agente Comunitario para Red Mesa de Mujeres en Ciudad Juárez | Activista Social, Colaborador Operacional de la 1ª Edición de Líderes del Cambio."
                username="josefideltamayocortes"
              />
              <ProfileCard
                image="/Organizacion/DemianCalleros.jpg"
                name="Demian Calleros"
                info="Programador apasionado por construir soluciones escalables usando tecnología | Colaborador de Líderes del Cambio."
                username="calleros.dev"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={sections.aboutUs} className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16 bg-natural-800">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h2 
            className="text-center text-3xl font-bold mb-6"
            variants={fadeInAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >Líderes del Cambio</motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-center lg:text-left"
            variants={fadeInAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >
            Líderes del Cambio es un evento anual que busca inspirar, reconocer y conectar a jóvenes que están generando un impacto positivo en la sociedad. A través de este espacio, celebramos el liderazgo, la innovación y el compromiso de quienes trabajan por transformar su entorno.
          </motion.p>
        </div>
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <img src="/Media/Lideres.jpg"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg object-cover"
            alt="Líderes del Cambio"
          />
        </motion.div>
      </section>

      <section className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16 bg-zinc-800">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h2 
            className="text-center text-3xl font-bold mb-6"
            variants={fadeInAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >Evento en Planeación</motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-center lg:text-left"
            variants={fadeInAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >
            Esta primera edición ha sido planeada durante meses con el objetivo de visibilizar el esfuerzo de jóvenes que, desde distintos ámbitos, están impulsando cambios significativos. Creemos firmemente en el poder de la juventud para construir un futuro mejor y en la importancia de reconocer a quienes, con su dedicación y trabajo, están marcando la diferencia.
          </motion.p>
        </div>
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <img src="/Media/44.jpg"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg object-cover"
            alt="Evento en Planeación"
          />
        </motion.div>
      </section>

      <section className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16 bg-neutral-800">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h2 
            className="text-center text-3xl font-bold mb-6"
            variants={fadeInAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >Colaboradores en acción</motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-center lg:text-left"
            variants={fadeInAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >
            El evento es posible gracias al apoyo de colaboradores, aliados estratégicos y voluntarios que han sumado esfuerzos para hacerlo realidad. Además, algunos colaboradores compartirán su experiencia en charlas, acompañadas de imágenes que reflejan sus mensajes. Su compromiso ha sido clave para inspirar a nuevas generaciones a seguir actuando por un mundo más justo y sostenible.
          </motion.p>
        </div>
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <img src="/Media/Colaboradores.jpg"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg object-cover"
            alt="Colaboradores en acción"
          />
        </motion.div>
      </section>

      <section className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16 bg-zinc-800">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h2 
            className="text-center text-3xl font-bold mb-6"
            variants={fadeInAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >Futuro del liderazgo juvenil</motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-center lg:text-left"
            variants={fadeInAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
          >
            Con Líderes del Cambio, damos inicio a un legado que seguirá creciendo año con año. Este es solo el comienzo de un movimiento que reconoce el presente y el futuro del liderazgo juvenil.
          </motion.p>
        </div>
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          <img src="/Media/Liderazgo.jpg"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg object-cover"
            alt="Futuro del liderazgo juvenil"
          />
        </motion.div>
      </section>

      <section ref={sections.section2} className="content-section h-screen flex flex-col justify-center items-center bg-neutral-800">
        <motion.h2 
          className="text-center text-3xl font-bold mb-6"
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >Redes Sociales</motion.h2>
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
    </div>
  );
}

export default App;
