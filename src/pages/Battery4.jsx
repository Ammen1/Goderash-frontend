import React from "react";

import { icon1, icon2, icon3, icon4 } from "../assets";

const services = [
  {
    name: "Jump-start",
    description:
      "If your battery is flat, but otherwise in good condition, we’ll get you moving again with a jump-start.",
    image: icon1,
    price: 2500,
  },
  {
    name: "Standard Battery",
    description:
      "Affordable batteries from leading manufacturers Charger, ACDelco and Hitachi with 12 months’ comprehensive warranty.",
    image: icon2,
    price: 3000,
  },
  {
    name: "Premium Battery",
    description:
      "Long-life batteries from Bosch, Banner and Varta with 18 months’ comprehensive warranty.",
    image: icon3,
    price: 3500,
  },
  {
    name: "AGM Battery",
    description:
      "High-capacity, long-life batteries from Bosch, Banner and Varta, with 18 months’ comprehensive warranty. Recommended for large and high-performance vehicles.",
    image: icon4,
    price: 4000,
  },
];

const Battery4 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-14 mx-5">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm ">
          <img
            src={service.image}
            alt={service.name}
            className="w-30 h-30 object-cover items-center justify-center mb-4 rounded-md"
          />

          <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>

          <div className="flex items-center justify-between w-full"></div>
          <h1 className="text-4xl  font-bold text-secondary">
            {service.price} birr
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Battery4;
