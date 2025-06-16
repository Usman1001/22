import React from "react";
import { motion } from "framer-motion";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative mx-auto w-24 h-24">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-xl transform rotate-12 shadow-2xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg transform -rotate-12 shadow-xl"
            />
            <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg shadow-inner"></div>
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white"
        >
          <h1 className="text-3xl font-bold mb-2">ENDLESS LOGISTICS</h1>
          <p className="text-orange-400 uppercase tracking-widest text-sm font-medium">
            Cargo Services
          </p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <div className="flex space-x-2 justify-center">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="w-3 h-3 bg-orange-500 rounded-full"
              />
            ))}
          </div>
          <p className="text-gray-300 text-sm mt-4 font-medium">
            Loading your cargo solutions...
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="mt-8 mx-auto max-w-xs"
        >
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 100,
              opacity: 0
            }}
            animate={{ 
              y: -100,
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default PreLoader;