import { useRef } from "react";
import "./App.css";

// proyect imports
import ProfileCard from "./components/ProfileCard";

function App() {
  const sections = {
    video: useRef(null),
    section1: useRef(null),
    section2: useRef(null),
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
        <button onClick={() => scrollToSection(sections.section2)}>Redes Sociales</button>
      </nav>

      {/* 🎥 Sección del Video */}
      <section ref={sections.video} className="video-section">
        <div className="video-container">
          <video autoPlay loop muted playsInline className="background-video">
            <source src="/Background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay">
            <h1 className="mainTitle">Líderes del</h1>
            <h1 className="TitleCambio font-breathing">Cambio</h1>
          </div>
        </div>
      </section>

      {/* 🔽 Secciones Extras */}
      <section ref={sections.section1} className="content-section">
        <h2>Colaboradores</h2>
        <div className="flex flex-wrap justify-center gap-24 p-8">
          <ProfileCard
            image="https://randomuser.me/api/portraits/men/45.jpg"
            name="Carlos Villarreal"
            info="Director de Lideres Del cambio \n Jefe Local de Invervención Comunitaria en Cruz Roja Juventud, Ciudad Juarez."
          />
          <ProfileCard
            image="https://randomuser.me/api/portraits/women/32.jpg"
            name="Fidel Tamayo"
            info="Agente Comunitario para Red Mesa de Mujeres en Ciudad Juárez | Activista Social, Organizador y Colaborador de Lideres del Cambio."
          />
          <ProfileCard
            image="https://randomuser.me/api/portraits/men/18.jpg"
            name="Demian Calleros"
            info="Programador apacionado por construir soluciones escalables usando tecnologia | Colaborador de Lideres del cambio."
          />
        </div>
      </section>

      <section ref={sections.section2} className="content-section">
        <h2>Redes Sociales</h2>
        <p>Más contenido aquí...</p>
      </section>
    </div>
  );
}

export default App;
