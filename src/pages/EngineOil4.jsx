import React from "react";

import {
  iconoil1tm,
  iconoil2000tm,
  iconoil3000tm,
  icontrip,
  iconoil7000,
  iconoil9000,
  iconoil9000e,
} from "../assets";

const services = [
  {
    name: "Mobil 1TM",
    description:
      "The world’s leading synthetic motor oil delivers ultimate all-round performance and protection.",
    nam: "10,000 – 12,000 kms",
    image: iconoil1tm,
    price: 4000,
    imge: icontrip,
  },

  {
    name: "Mobil Super 2000TM",
    description:
      "A premium semi-synthetic oil designed to provide an excellent level of protection and performance.",
    image: iconoil2000tm,
    nam: "6,000 – 8,000 kms",
    price: 5000,
    imge: icontrip,
  },
  {
    name: "Mobil Super 3000TM",
    description:
      "A full synthetic motor oil that promotes long engine life with enhanced protection over a wide temperature range.",
    image: iconoil3000tm,
    nam: "8,000 – 10,000 kms",
    price: 6000,
    imge: icontrip,
  },
  {
    name: "TotalEnergies Quartz 9000 Energy",
    description:
      "The world’s leading synthetic motor oil delivers ultimate all-round performance and protection.",
    nam: "10,000 – 12,000 kms",
    image: iconoil9000,
    price: 4000,
    imge: icontrip,
  },

  {
    name: "TotalEnergies Quartz 9000 Future FGC",
    description:
      "Synthetic technology engine oil that can be used in the most difficult operating conditions.",
    image: iconoil9000e,
    nam: "8,000 to 10,000 KM",
    price: 5000,
    imge: icontrip,
  },
  {
    name: "TotalEnergies Quartz 7000",
    description:
      "The highest specification semi synthetic lubricant suitable for normal driving conditions.",
    image: iconoil7000,
    nam: "6,000 to 8,000 KM",
    price: 6000,
    imge: icontrip,
  },
];

const EngineOil4 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-14 mx-5">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg  ">
          <img
            src={service.image}
            alt={service.name}
            className="w-30 h-30 object-cover items-center justify-center mb-4 "
          />
          <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <div className=" flex">
            <img
              src={service.imge}
              className="w-10 h-10 object-cover items-center justify-center mb-4 "
            />
            <h3 className="text-xl font-semibold mb-2">{service.nam}</h3>
          </div>
          <h3 className="text-3xl font-semibold mb-2 text-secondary">
            {service.price}
          </h3>
        </div>
      ))}
    </div>
  );
};
export default EngineOil4;
