import React from "react";
import { motion } from "framer-motion";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Exact Logo Recreation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative mx-auto w-32 h-20">
            {/* Main Container Shape - Orange/Red */}
            <motion.div
              animate={{ 
                rotateY: [0, 15, -15, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Back face of container */}
              <div className="absolute w-20 h-12 bg-gradient-to-br from-orange-600 to-red-700 transform skew-x-12 skew-y-3 shadow-lg"></div>
              
              {/* Front face of container */}
              <div className="absolute w-20 h-12 bg-gradient-to-br from-orange-400 to-red-500 transform translate-x-2 translate-y-2 shadow-xl border border-orange-300"></div>
              
              {/* Top face of container */}
              <div className="absolute w-20 h-4 bg-gradient-to-r from-orange-300 to-red-400 transform -skew-x-45 translate-y-2 shadow-md border-b border-orange-400"></div>
              
              {/* Right side face */}
              <div className="absolute w-4 h-12 bg-gradient-to-b from-red-500 to-red-700 transform translate-x-20 translate-y-2 skew-y-12 shadow-lg"></div>
            </motion.div>

            {/* Blue Accent Element */}
            <motion.div
              animate={{ 
                x: [0, 5, -5, 0],
                rotateZ: [0, 5, -5, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-0 right-0"
            >
              {/* Blue geometric accent */}
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 transform rotate-45 shadow-lg border border-blue-500"></div>
              <div className="absolute w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 transform -rotate-12 translate-x-1 translate-y-1 shadow-md"></div>
            </motion.div>

            {/* White accent elements */}
            <div className="absolute w-3 h-3 bg-white rounded-sm top-4 left-8 shadow-sm opacity-90"></div>
            <div className="absolute w-2 h-2 bg-white rounded-sm top-6 left-12 shadow-sm opacity-80"></div>

            {/* Floating particles around logo */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute w-1 h-1 bg-orange-400 rounded-full top-0 left-4 opacity-60"></div>
              <div className="absolute w-1 h-1 bg-blue-400 rounded-full bottom-0 right-6 opacity-60"></div>
              <div className="absolute w-1 h-1 bg-red-400 rounded-full top-2 right-2 opacity-60"></div>
              <div className="absolute w-1 h-1 bg-orange-300 rounded-full bottom-2 left-2 opacity-60"></div>
            </motion.div>
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