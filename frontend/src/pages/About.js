import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Users, 
  Globe, 
  Target,
  CheckCircle,
  Truck,
  Clock,
  Shield,
  Heart,
  Star
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Trusted by 500+ clients worldwide for consistent, secure cargo handling"
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "Time-critical deliveries with 99% on-time performance record"
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Personalized service with dedicated account management for every client"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Comprehensive network spanning 50+ countries and major trade routes"
    }
  ];

  const milestones = [
    { year: "2012", event: "Founded Endless Logistics", description: "Started with a vision to revolutionize cargo services" },
    { year: "2015", event: "First Film Production Contract", description: "Secured major film studio as client, defining our specialty" },
    { year: "2018", event: "International Expansion", description: "Extended services to 25+ countries globally" },
    { year: "2020", event: "DG Cargo Certification", description: "Obtained dangerous goods handling certifications" },
    { year: "2023", event: "500+ Clients Milestone", description: "Reached significant client base across industries" },
    { year: "2025", event: "Leading Cargo Provider", description: "Recognized as premier logistics partner for entertainment industry" }
  ];

  const expertise = [
    { area: "Film Productions", experience: "300+ Projects", icon: "🎬" },
    { area: "Commercials", experience: "500+ Campaigns", icon: "📺" },
    { area: "Exhibitions", experience: "200+ Events", icon: "🏛️" },
    { area: "Art & Antiques", experience: "150+ Shipments", icon: "🎨" },
    { area: "Special Equipment", experience: "400+ Loads", icon: "🔧" },
    { area: "International Trade", experience: "1000+ Transactions", icon: "🌐" }
  ];

  const certifications = [
    "IATA Cargo Agent",
    "FIATA Diploma",
    "Dangerous Goods Certified",
    "AEO (Authorized Economic Operator)",
    "ISO 9001:2015 Certified",
    "C-TPAT Certified"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1610289472743-de6966e12a3e')`
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Our Story
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              13 years of excellence in specialized cargo services, 
              trusted by global entertainment and exhibition industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Mission &{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Vision
                </span>
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Mission</h3>
                  <p className="text-gray-600">
                    To provide world-class cargo services that exceed expectations, 
                    specializing in the unique logistics needs of film productions, 
                    commercials, and exhibitions while maintaining the highest standards 
                    of reliability and customer care.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Vision</h3>
                  <p className="text-gray-600">
                    To be the global leader in specialized logistics, recognized for 
                    innovation, reliability, and unmatched expertise in handling complex 
                    cargo requirements across the entertainment and exhibition industries.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg" 
                alt="Professional logistics team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-600/20 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - the Endless Logistics story
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-blue-600"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {milestone.year.slice(-2)}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 ml-4">{milestone.year}</h3>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{milestone.event}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Core{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and service we provide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized knowledge across diverse industries and cargo types
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold mb-2">{area.area}</h3>
                <p className="text-orange-400 font-semibold text-lg">{area.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Certifications &{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Compliance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading certifications ensuring the highest standards of service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-gray-800 font-semibold">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Endless Logistics?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              The difference that 13 years of specialized expertise makes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Industry Leadership</h3>
              <p className="text-orange-100">
                Recognized as the premier logistics partner for entertainment industry projects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Target className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Specialized Focus</h3>
              <p className="text-orange-100">
                Deep understanding of unique requirements in film, commercial, and exhibition logistics
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Trusted Partnership</h3>
              <p className="text-orange-100">
                Over 500 satisfied clients who rely on our expertise for their most critical shipments
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Partner With Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;