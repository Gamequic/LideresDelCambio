import React from "react";
import { motion } from "framer-motion";
import './LoaderScreen.css'

const LoadingScreen = ({ isLoading }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50"
      initial={{ opacity: 1, scale: 1, x: 0 }}
      animate={
        isLoading
          ? { opacity: 1, scale: 1, x: 0 }
          : { opacity: 0, scale: 0.7, x: "100%" }
      }
      exit={{ opacity: 0, scale: 0.7, x: "100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ pointerEvents: isLoading ? "auto" : "none" }}
    >
      <div className="flex flex-col items-center">
        <div className="loader"></div>
        <p className="mt-4 text-lg font-semibold">Cargando...</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
