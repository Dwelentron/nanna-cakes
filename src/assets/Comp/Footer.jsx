import React from 'react';
import {} from 'react-icons'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-black text-white p-6">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <a
          href="#"
          className="text-2xl mr-4 hover:text-gray-300 transition duration-300"
        >
          <FaFacebook className='text-white hover:fill-red-500 duration-500 ease-in-out'/>
        </a>
        <a
          href="#"
          className="text-2xl mr-4 hover:text-gray-300 transition duration-300"
        >
          <FaPinterest className='text-white hover:fill-red-500 duration-500 ease-in-out'/>
        </a>
        <a
          href="#"
          className="text-2xl mr-4 hover:text-gray-300 transition duration-300"
        >
          <FaInstagram className='text-white hover:fill-red-500 duration-500 ease-in-out'/>
        </a>
        <a
          href="#"
          className="text-2xl mr-4 hover:text-gray-300 transition duration-300"
        >
          <FaTwitter className='text-white hover:fill-red-500 duration-500 ease-in-out'/>
        </a>
        <div className="fle items-center ml-auto">
          <p className="mr-2">&copy; 2024</p>
          <p>Created By Suel For Nanna💕</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
