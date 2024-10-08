import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import logo from '../assets/jiabg.png'; 

const Navbar = () => {
  return (
    <nav className='bg-blue mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center ml-10'>
        <img src={logo} className='w-21 h-20' alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl mr-10">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
