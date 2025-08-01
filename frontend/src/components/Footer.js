import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-6">
                {/* Main Container Shape - Orange/Red */}
                <div className="absolute inset-0">
                  {/* Back face of container */}
                  <div className="absolute w-6 h-4 bg-gradient-to-br from-orange-600 to-red-700 transform skew-x-12 skew-y-3 shadow-md"></div>
                  
                  {/* Front face of container */}
                  <div className="absolute w-6 h-4 bg-gradient-to-br from-orange-400 to-red-500 transform translate-x-1 translate-y-0.5 shadow-lg border border-orange-300"></div>
                  
                  {/* Top face of container */}
                  <div className="absolute w-6 h-1.5 bg-gradient-to-r from-orange-300 to-red-400 transform -skew-x-45 translate-y-0.5 shadow-sm border-b border-orange-400"></div>
                  
                  {/* Right side face */}
                  <div className="absolute w-1.5 h-4 bg-gradient-to-b from-red-500 to-red-700 transform translate-x-6 translate-y-0.5 skew-y-12 shadow-md"></div>
                </div>

                {/* Blue Accent Element */}
                <div className="absolute -top-0.5 -right-0.5">
                  {/* Blue geometric accent */}
                  <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue-600 to-blue-800 transform rotate-45 shadow-md border border-blue-500"></div>
                  <div className="absolute w-1.5 h-1.5 bg-gradient-to-br from-blue-500 to-blue-700 transform -rotate-12 translate-x-0.5 translate-y-0.5 shadow-sm"></div>
                </div>

                {/* White accent elements */}
                <div className="absolute w-1 h-1 bg-white rounded-sm top-1.5 left-2 shadow-sm opacity-90"></div>
                <div className="absolute w-0.5 h-0.5 bg-white rounded-sm top-2 left-3 shadow-sm opacity-80"></div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white">ENDLESS LOGISTICS</h3>
                <p className="text-xs text-orange-400 uppercase tracking-wider font-medium">
                  Cargo Services
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              With 13 years of expertise in cargo services, we specialize in air freight, 
              sea freight, and custom clearance for film productions, commercials, and exhibitions.
            </p>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer"
              >
                <Globe className="w-5 h-5" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer"
              >
                <Mail className="w-5 h-5" />
              </motion.div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Our Services
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">
                Air Freight
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Sea Freight
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Import & Export
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Custom Clearance
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Special Approvals
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                DG Cargo Packing
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Contact Us
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-0.5" />
                <div>
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-400 mt-0.5" />
                <div>
                  <p>info@endlesslogistics.com</p>
                  <p>cargo@endlesslogistics.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                <p>
                  123 Cargo Street<br />
                  Logistics City, LC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Endless Logistics Cargo Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;