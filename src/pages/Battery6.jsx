import React from "react";

import { park1, park2, park3 } from "../assets";

const services = [
  {
    name: "Park safely",
    description:
      "Park your car in a safe location, making sure to leave at least 1m between it and any surrounding vehicles or other obstacles, preferably under shade to protect our crew from the sun.",
    image: park1,
  },

  {
    name: "Pop the bonnet",
    description:
      "Please make sure that your bonnet/hood (or boot/trunk, depending on the location of your battery) is unlocked and accessible.",
    image: park2,
  },
  {
    name: "Stay close",
    description:
      "Our technician will need you to give him access to the car when he arrives, before checking your battery and running diagnostic tests on your starter motor and charging system.",
    image: park3,
  },
];

const Battery6 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-14 mx-5">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg  ">
          <img
            src={service.image}
            alt={service.name}
            className="w-80 h-30 object-cover items-center justify-center mb-4 "
          />
          s<h3 className="text-xl font-semibold mb-2">{service.name}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Battery6;
