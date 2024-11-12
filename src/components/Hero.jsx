import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EarringsCarousel from "./EarringsCarousel";
import NecklacesCarousel from "./NecklaceCarousel";
import CollectionsCarousel from "./CollectionsCarousel";
import { ChevronDown } from "lucide-react";

const navItems = [
  {
    name: "Earrings",
    component: <EarringsCarousel />,
    description: "Elegant earrings for every occasion",
  },
  {
    name: "Necklaces",
    component: <NecklacesCarousel />,
    description: "Timeless necklaces and pendants",
  },
  {
    name: "Collections",
    component: <CollectionsCarousel />,
    description: "Explore our curated collections",
  },
];

const Hero = () => {
  const [selectedValue, setSelectedValue] = useState("ShowAll");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-white pb-16">
      {/* Hero Header with Gradient Background */}
      <div className="relative overflow-visible bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center relative">
            <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-gray-900 mb-8">
              Have a look at the best of Featured products
            </h1>

            {/* Custom Dropdown with Fixed Positioning */}
            {/* <div className="relative inline-block text-left w-64">
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-left shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                >
                  <span className="flex items-center justify-between">
                    <span className="block truncate font-medium">
                      {selectedValue === "ShowAll" ? "Show All" : selectedValue}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg"
                      style={{
                        zIndex: 1000,
                        position: "absolute",
                        minWidth: "100%",
                      }}
                    >
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setSelectedValue("ShowAll");
                            setIsOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-gray-900 hover:bg-purple-50 transition-colors duration-200"
                        >
                          Show All
                        </button>
                        {navItems.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => {
                              setSelectedValue(item.name);
                              setIsOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-gray-900 hover:bg-purple-50 transition-colors duration-200"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Carousels Section */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedValue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-12"
          >
            {selectedValue === "ShowAll"
              ? navItems.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <h2 className="text-2xl font-serif text-gray-900">
                          {item.name}
                        </h2>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                      </div>
                      <a
                        href={`/${item.name.toLowerCase()}`}
                        className="text-purple-600 hover:text-purple-700 font-medium flex items-center transition-colors duration-200"
                      >
                        View All
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </motion.div>
                    {item.component}
                  </div>
                ))
              : navItems
                  .filter((item) => item.name === selectedValue)
                  .map((item, index) => (
                    <div key={index} className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <h2 className="text-2xl font-serif text-gray-900">
                            {item.name}
                          </h2>
                          <p className="text-gray-600 mt-1">
                            {item.description}
                          </p>
                        </div>
                        <a
                          href={`/${item.name.toLowerCase()}`}
                          className="text-purple-600 hover:text-purple-700 font-medium flex items-center transition-colors duration-200"
                        >
                          View All
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </motion.div>
                      {item.component}
                    </div>
                  ))}
          </motion.div>
        </AnimatePresence>
      </div> */}
    </div>
  );
};

export default Hero;
