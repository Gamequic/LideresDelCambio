import { useState } from "react";

export default function ProfileCard({ image, name, info }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-primary relative bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-center mt-6">
        <img
          src={image}
          alt={name}
          className="w-72 h-72 m-6 rounded-full border-4 border-gray-300 transition-all duration-300"
        />
      </div>

      <h3 className="text-center text-xl font-semibold mt-4 text-gray-800">
        {name}
      </h3>

      <div
        className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white text-center px-4 transition-all duration-500 ${
          hovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <p className="text-xl">{info}</p>
      </div>
    </div>
  );
}
