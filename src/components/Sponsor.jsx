import { useState } from "react";
import { motion } from "framer-motion";

const fadeInAnimation = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SponsorCard({ logoUrl, sponsorName, website, size = 24, top, left }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center transition-transform duration-300 rounded-full shadow-lg bg-white p-4 hover:scale-105"
        style={{ width: `${size}px`, height: `${size}px` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        variants={fadeInAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Logo Container */}
        <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden">
          <img src={logoUrl} alt={sponsorName} className="w-3/4 h-3/4 object-contain" />
        </div>
      </motion.a>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-black text-white text-sm px-3 py-2 rounded-md shadow-md opacity-90 whitespace-nowrap">
          <p>{sponsorName}</p>
        </div>
      )}
    </div>
  );
}
