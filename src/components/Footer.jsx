import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Blissful Creations.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
