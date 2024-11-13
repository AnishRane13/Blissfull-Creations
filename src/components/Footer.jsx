import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'; // Importing icons

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
            <a href="https://www.instagram.com/the_blissfull_creation/" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=919082373639&text=Hello&fbclid=PAZXh0bgNhZW0CMTEAAaac7GQPyhrPmmEcMokCBPDlqyTmpbNf9VoXqOghxc-9ArtiZ2BFFLNGOiw_aem_R9eqVz3D3zE-4aWxfL51sw" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
