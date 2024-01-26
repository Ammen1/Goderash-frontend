import React from "react";

const Services = ({ name, title, img }) => {
  return (
    <div className="relative flex items-center justify-center h-auto hover:shadow-2xl">
      <div className="flex flex-wrap md:flex-row items-center justify-center">
        <div className=" w-auto ">
          <div className="font-sans border-1 shadow-md h-full shadow-white text-white py-4 px-6 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            <img
              src={img}
              alt={name}
              className="w-full h-32 md:h-48 object-cover mb-4 rounded-t-lg"
            />
            <h1 className=" mb-4 leading-6 font-medium text-xl text-center text-gradient">
              {name}
            </h1>
            <div className="text-center ">
              <p className="leading-6">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
