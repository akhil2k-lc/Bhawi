import React from 'react';
import photo from '../Images/photo.jpg';
function Experts() {
  return (
    <div className="max-w-[1240px] mx-auto my-5 p-2 md:grid grid-cols-3">
      <div className="col-span-1 md:w-[80%] flex flex-col justify-center">
        <img src={photo} alt="" />
      </div>
      <div className="h-[250px] p-4 ml-4 col-span-2 flex flex-col justify-center">
        <h1 className="font-bold text-green-400 text-xl mt-12">
          LEARN FROM EXPERTS
        </h1>
        <p className="font-bold text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste,
          nobis fugiat totam ad saepe quis odit obcaecati atque cupiditate in
          optio. Vero eaque aliquam, ex nostrum dolor neque. Magnam facilis qui
          tempora debitis corporis, doloremque mollitia perspiciatis ad! Itaque.
        </p>
        <button
          className="bg-black text-white font-bold hover:bg-green-600 mt-2 p-3 rounded 
  md:w-[15%]"
        >
          Get started
        </button>
      </div>
    </div>
  );
}

export default Experts;
