import React from 'react';
import { MdLaptopChromebook } from 'react-icons/md';
import { IoBookmarks } from 'react-icons/io5';
import { MdBookmarkAdded } from 'react-icons/md';
function Plans() {
  return (
    <div className="py-[30px] px-2">
      <div className="max-w-[1240px] mx-auto  md:grid grid-cols-3 gap-5">
        <div className=" h-[400px]  my-3 p-3 shadow-xl font-bold hover:scale-90 duration-[400ms] flex flex-col justify-center items-center">
          <MdLaptopChromebook className="text-6xl" />
          <h1 className="text-2xl m-2 text-blue-600">Basics</h1>
          <p className="text-4xl m-2">$149</p>
          <p className="mt-2 p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            amet sapiente eius iste placeat repellat consequuntur, quas cumque
            tempora modi eaque.
          </p>
          <button className="w-[30%] bg-pink-700 text-white font-bold hover:bg-green-600 mt-2 ml-2 p-2 rounded-full">
            Start Trial
          </button>
        </div>
        <div className=" h-[400px] bg-gray-100  my-3 p-3 shadow-xl font-bold hover:scale-90 duration-[400ms] flex flex-col justify-center items-center">
          <IoBookmarks className="text-6xl" />
          <h1 className="text-2xl m-2 text-blue-600">Developement</h1>
          <p className="text-4xl text-blue-600 m-2">$299</p>
          <p className="mt-2 p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            amet sapiente eius iste placeat repellat consequuntur, quas cumque
            tempora modi eaque.
          </p>
          <button className="w-[30%] bg-pink-700 text-white font-bold hover:bg-green-600 mt-2 ml-2 p-2 rounded-full">
            Start Trial
          </button>
        </div>
        <div className=" h-[400px]  my-3 p-3 shadow-xl font-bold hover:scale-90 duration-[400ms] flex flex-col justify-center items-center">
          <MdBookmarkAdded className="text-6xl" />
          <h1 className="text-2xl m-2 text-blue-600">Advanced</h1>
          <p className="text-4xl m-2">$449</p>
          <p className="mt-2 p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            amet sapiente eius iste placeat repellat consequuntur, quas cumque
            tempora modi eaque.
          </p>
          <button className="w-[30%] bg-pink-700 text-white font-bold hover:bg-green-600 mt-2 ml-2 p-2 rounded-full">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plans;
