import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import b from "../assets/b.png";
import styles from "../style";
import { rote } from "../assets";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Battery1 from "./Battery1";
import Battery2 from "./Battery2";
import Battery3 from "./Battery3";
import Battery4 from "./Battery4";
import Battery5 from "./Battery5";
import Battery6 from "./Battery6";

const Battery = () => {
  const history = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://gooderash.com/api/tyre/user/tyre/listtyrecategory/"
        );
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    console.log("Image URL:", services.image);

    fetchServices();
  }, [services.image]);

  const handleOrderClick = (serviceSlug) => {
    history(`/order/${serviceSlug}`);
  };
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative bg-[#011730] overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Background"
            className="w-full h-full object-cover "
            height="2048"
            src={b}
            style={{
              aspectRatio: "581/2048",
              objectFit: "cover",
            }}
            width="581"
          />
        </div>
        <div className="relative  flex flex-col items-center justify-between px-10">
          {/*main*/}
          <NavBar />
          <main className="flex mt-32 flex-col items-center text-center mb-10 pt-4">
            <h2 className="text-6xl font-bold text-white mb-4">
              Save time, every time you refuel
            </h2>
            <p className="text-3xl text-white mb-8">
              Fuel delivery <span className=" text-amber-400"> Order Now</span>{" "}
            </p>
            <div
              className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full  p-[2px] cursor-pointer `}
            >
              <div
                className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
              >
                <img
                  src={rote}
                  alt="arrow-up"
                  className="w-[160px] h-[160px]  object-contain"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Battery1 />
      <Battery2 />
      <Battery3 />
      <Battery4 />
      <Battery5 />
      <Battery6 />
      <h1 className="text-6xl w-screen ml-12   text-secondary font-extrabold">
        Select Your Fuel Types
      </h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-14 mx-5">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/${service.slug}`}
            className="flex flex-col items-center justify-center text-black"
          >
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-bold text-black">
                  Price: {service.price}
                </span>
              </div>
              <Button
                onClick={() => handleOrderClick(service.slug)}
                className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-full shadow-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out"
              >
                Place Order
              </Button>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-24">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Battery;
