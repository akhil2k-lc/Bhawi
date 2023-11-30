import React from 'react';
import Typed from 'react-typed';

function Banner() {
  return (
    <div className="bg-[#2a567e] w-full py-[100px] text-center font-bold">
      <div className="max-w-[1240px] my-[90px] mx-auto">
        <div className="text:xl text-yellow-50 md:text-3xl md:p-5 ">
          Learn with us
        </div>
        <h2 className="text-3xl text-white  md:text-[75px] md:p-5">
          Grow with us.
        </h2>
        <div className="text-white text-2xl md:text-[50px] md:p-8">
          Hello
          <Typed
            className="pl-3 text-yellow-300"
            strings={[
              'Bhawna',
              'Akhilesh',
              'Bestie',
              'Bhawi',
              'Akhi',
              'Sukoon',
              'Medicine',
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </div>
        <button
          className="bg-black text-white font-bold  hover:bg-green-600 p-3 rounded 
  md:w-[11%]"
        >
          Get started
        </button>
      </div>
    </div>
  );
}

export default Banner;
