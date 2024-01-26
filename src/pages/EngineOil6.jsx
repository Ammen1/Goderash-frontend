import React from "react";

import { engineoil1, engineoil2 } from "../assets";

const services = [
  {
    name: "Park safely",
    description:
      "Park your car in a safe location, making sure to leave at least 1m between it and any surrounding vehicles or other obstacles, and preferably under shade.",
    image: engineoil1,
  },

  {
    name: "Pop the bonnet",
    description:
      "Please make sure that your bonnet/hood (or boot/trunk, depending on the location of your battery) is unlocked and accessible.",
    image: engineoil2,
  },
];

const EngineOil6 = () => {
  return (
    <div>
      <h1 className=" text-4xl text-secondary font-bold ml-10 mt-20">
        Get ready for your oil change
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 mx-5">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg  ">
            <img
              src={service.image}
              alt={service.name}
              className="w-100 h-50 object-cover items-center justify-center mb-4 "
            />
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EngineOil6;
