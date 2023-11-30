import React from 'react';
import { IoLogoYoutube } from 'react-icons/io5';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';

function Footer() {
  return (
    <div className="bg-[#2a567e]">
      <div className="  max-w-[1240px] mx-auto  p-0 mb-1 items-center justify-center grid grid-cols-2">
        <div className="mt-2 h-[50px] text-white font-bold  hover:text-cyan-200">
          Copyrights Recerved by Me @2023
        </div>
        <div className="text-xl text-white font-bold ml-9 hover:text-2xl duration-500">
          Social Handles
          <span className=" flex gap-4">
            <IoLogoYoutube />
            <FaInstagramSquare />
            <FaSquareFacebook />
            <FaLinkedin />
            <FaTelegram />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
