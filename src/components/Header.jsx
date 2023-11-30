import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2a567e] p-4">
      <div className="max-w-[1240px] py-[15px] items-center flex justify-between mx-auto">
        <div className="text-3xl text-white font-bold ">Learn Coding</div>
        <div>
          {toggle ? (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-3xl text-white md:hidden block"
            />
          ) : (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-3xl text-white md:hidden block"
            />
          )}

          <ul className="hidden md:flex text-white gap-10">
            <li>Home</li>
            <li>Services</li>
            <li>Course</li>
            <li>Login</li>
            <li>Signup</li>
          </ul>
          {/* Responsive Menu only for mobile*/}
          <ul
            className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[98px] ${
              toggle ? 'left-[-100%]' : 'left-[0]'
            }`}
          >
            <li className="p-3">Home</li>
            <li className="p-3">Services</li>
            <li className="p-3">Course</li>
            <li className="p-3">Login</li>
            <li className="p-3">Signup</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
