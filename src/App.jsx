import { useRef, useState } from "react";

import "./App.css";

// proyect imports
import ProfileCard from "./components/ProfileCard";
import InstagramCarousel from "./components/InstagramCarousel";

function App() {
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
      {/* 🔘 Barra de Navegación */}
      <nav className="navbar">
        <button onClick={() => scrollToSection(sections.video)}>Inicio</button>
        <button onClick={() => scrollToSection(sections.section1)}>Colaboradores</button>
        <button onClick={() => scrollToSection(sections.aboutUs)}>Sobre nosotros</button>
        <button onClick={() => scrollToSection(sections.section2)}>Redes Sociales</button>
      </nav>

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
          </div>
        </div>
      </section>

      <section ref={sections.section1} className="content-section">
        <h2 className="text-center text-3xl font-bold mb-6">Colaboradores</h2>

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

      <section ref={sections.aboutUs} className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="text-4xl font-bold mb-4 text-center lg:text-left">Líderes del Cambio</h2>
          <p className="text-lg leading-relaxed text-center lg:text-left">
            Líderes del Cambio es un evento anual que busca inspirar, reconocer y conectar a jóvenes que están generando un impacto positivo en la sociedad. A través de este espacio, celebramos el liderazgo, la innovación y el compromiso de quienes trabajan por transformar su entorno.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src="/LideresDelCambio/colaboladores/CarlosVillarreal.jpg"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg object-cover"
            alt="Líderes del Cambio"
          />
        </div>
      </section>

      <section className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="text-4xl font-bold mb-4 text-center lg:text-left">Evento en Planeación</h2>
          <p className="text-lg leading-relaxed text-center lg:text-left">
            Esta primera edición ha sido planeada durante meses con el objetivo de visibilizar el esfuerzo de jóvenes que, desde distintos ámbitos, están impulsando cambios significativos. Creemos firmemente en el poder de la juventud para construir un futuro mejor y en la importancia de reconocer a quienes, con su dedicación y trabajo, están marcando la diferencia.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:order-2">
          <img src="/LideresDelCambio/colaboladores/CarlosVillarreal.jpg"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg object-cover"
            alt="Evento en Planeación"
          />
        </div>
      </section>

      <section className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="text-4xl font-bold mb-4 text-center lg:text-left">Colaboradores en acción</h2>
          <p className="text-lg leading-relaxed text-center lg:text-left">
            El evento es posible gracias al apoyo de colaboradores, aliados estratégicos y voluntarios que han sumado esfuerzos para hacerlo realidad. Su compromiso ha sido clave para construir un espacio que no solo celebra logros, sino que también inspira nuevas generaciones a seguir actuando por un mundo más justo y sostenible.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src="/LideresDelCambio/colaboladores/CarlosVillarreal.jpg"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg object-cover"
            alt="Colaboradores en acción"
          />
        </div>
      </section>

      <section className="content-section h-screen flex flex-col lg:flex-row justify-center items-center px-8 gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="text-4xl font-bold mb-4 text-center lg:text-left">Futuro del liderazgo juvenil</h2>
          <p className="text-lg leading-relaxed text-center lg:text-left">
            Con Líderes del Cambio, damos inicio a un legado que seguirá creciendo año con año. Este es solo el comienzo de un movimiento que reconoce el presente y el futuro del liderazgo juvenil.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:order-2">
          <img src="/LideresDelCambio/colaboladores/CarlosVillarreal.jpg"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg object-cover"
            alt="Futuro del liderazgo juvenil"
          />
        </div>
      </section>

      <section ref={sections.section2} className="content-section h-screen flex flex-col justify-center items-center">
        <h2 className="text-center text-3xl font-bold mb-4">Redes Sociales</h2>

        {/* 📌 Contenedor del carrusel con altura limitada */}
        <div className="w-full max-w-5xl h-[75vh] flex justify-center items-center">
          <InstagramCarousel />
        </div>
      </section>
    </div>
  );
}

export default App;
