import React from 'react';

function News() {
  return (
    <div className="bg-[#2a567e] mt-8 p-4">
      <div className="  max-w-[1240px] h-[300px] text-white mx-auto my-5  md:grid grid-cols-2 ">
        <div className="col-span-1 mt-12 md:justify-center">
          <h1 className="text-xl md:text-3xl font-bold">
            Want to learn latest IT skills?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
          </p>
        </div>
        <div className="col-span-1 justify-center mt-12  bg-[#2a567e] ">
          <input
            type="text"
            className="p-2 w-[300px] text-black rounded"
            placeholder="Enter Email"
          />
          <button className="bg-black text-white font-bold hover:bg-green-600 mt-2 ml-2 p-2 rounded">
            Send
          </button>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            blanditiis voluptatum itaque! <br />
            <a href="#" className=" text-yellow-200 font-bold">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;
