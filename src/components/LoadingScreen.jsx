import { motion } from "framer-motion";

const LoadingScreen = ({ isLoading }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ pointerEvents: isLoading ? "auto" : "none" }}
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold">Loading...</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
