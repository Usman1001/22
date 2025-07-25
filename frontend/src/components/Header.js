import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Exact Logo Recreation */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center">
              <div className="relative w-12 h-8">
                {/* Main Container Shape - Orange/Red */}
                <div className="absolute inset-0">
                  {/* Back face of container */}
                  <div className="absolute w-8 h-5 bg-gradient-to-br from-orange-600 to-red-700 transform skew-x-12 skew-y-3 shadow-md"></div>
                  
                  {/* Front face of container */}
                  <div className="absolute w-8 h-5 bg-gradient-to-br from-orange-400 to-red-500 transform translate-x-1 translate-y-1 shadow-lg border border-orange-300"></div>
                  
                  {/* Top face of container */}
                  <div className="absolute w-8 h-2 bg-gradient-to-r from-orange-300 to-red-400 transform -skew-x-45 translate-y-1 shadow-sm border-b border-orange-400"></div>
                  
                  {/* Right side face */}
                  <div className="absolute w-2 h-5 bg-gradient-to-b from-red-500 to-red-700 transform translate-x-8 translate-y-1 skew-y-12 shadow-md"></div>
                </div>

                {/* Blue Accent Element */}
                <div className="absolute -top-1 -right-1">
                  {/* Blue geometric accent */}
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-blue-800 transform rotate-45 shadow-md border border-blue-500"></div>
                  <div className="absolute w-2 h-2 bg-gradient-to-br from-blue-500 to-blue-700 transform -rotate-12 translate-x-0.5 translate-y-0.5 shadow-sm"></div>
                </div>

                {/* White accent elements */}
                <div className="absolute w-1 h-1 bg-white rounded-sm top-2 left-3 shadow-sm opacity-90"></div>
                <div className="absolute w-1 h-1 bg-white rounded-sm top-2.5 left-4 shadow-sm opacity-80"></div>
              </div>
              
              <div className="ml-3">
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}>
                  ENDLESS LOGISTICS
                </h1>
                <p className="text-xs text-orange-600 uppercase tracking-wider font-medium">
                  Cargo Services
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-orange-600 ${
                  location.pathname === item.path
                    ? "text-orange-600"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-white"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Quote
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-gray-700" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-700" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-200"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold text-sm">
              Get Quote
            </button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;