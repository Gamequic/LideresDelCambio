import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa"

const fadeInAnimation = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ProfileCard({ image, name, info, username }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="bg-primary relative bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group min-h-84 min-w-72 flex flex-col items-center justify-center text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={fadeInAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* 📌 Imagen completamente centrada */}
      <div className="flex justify-center mt-6 w-full">
        <img
          src={image}
          alt={name}
          className="w-48 h-48 rounded-full border-4 border-gray-300 object-cover transition-all duration-300"
        />
      </div>

      {/* 📌 Nombre centrado */}
      <h3 className="text-center text-xl font-semibold mt-4 text-gray-800">
        {name}
      </h3>
      <a
        href={`https://www.instagram.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-pink-600 hover:text-pink-800 transition-colors z-10"
      >
        <FaInstagram className="text-2xl" />
        <span className="text-lg font-semibold">@{username}</span>
      </a>

      {/* 📌 Información emergente centrada */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white text-center px-4 transition-all duration-500 ${
          hovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <p className="text-xl">{info}</p>
      </div>
    </motion.div>
  );
}
