// components/Footer.js
import React from 'react';
import logo from "../assets/agromind.png";


export const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4 flex justify-between items-start">
        {/* Logo dan Media Sosial */}
        <div>
        <img src={logo} alt="Logo" className='h-[100px] w-[100px]' />
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Tautan */}
        <div>
          <h3 className="font-bold text-gray-800">Useful Links</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-gray-900">Beranda</a></li>
            <li><a href="#" className="hover:text-gray-900">Fitur</a></li>
            <li><a href="#" className="hover:text-gray-900">Diskusi</a></li>
            <li><a href="#" className="hover:text-gray-900">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-bold text-gray-800">Kontak Kami</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>agromindai@gmail.com</li>
            <li>+62 8897 3293</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 text-center text-gray-600">
        ©2024 AgromindAI
      </div>
    </footer>
  );
};

export default Footer;
