import b from "../assets/b.png";
import styles from "../style";
import { show, rote, tyre1, tyre2 } from "../assets";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Tyre1 from "./Tyre1";
import Tyre2 from "./Tyre2";
import Carwash8 from "./Carwash8";

const Tyre = () => {
  const history = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/tyre/user/tyre/listtyrecategory/"
        );
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    console.log("Image URL:", services.image);

    fetchServices();
  }, []);

  const handleOrderClick = (serviceSlug) => {
    history(`/order/${serviceSlug}`);
  };

  return (
    <div className=" bg-white overflow-hidden">
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
          <main className="flex mt-32 flex-col items-center text-center mb-10 pt-4">
            <h2 className="text-6xl font-bold text-white mb-4">
              Simply safer, simply faster
            </h2>
            <p className="text-3xl text-white mb-8">
              Tyres Changes <span className=" text-amber-400"> Order Now</span>{" "}
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

      <Tyre1 />
      <Tyre2 />

      <h1 className="text-4xl font-extrabold text-black mt-12 ml-10 ">
        <span className=" text-secondary">Get ready </span>for your tyres
      </h1>
      <div className="w-full space-y-10 md:space-x-10 md:flex md:items-start md:justify-start">
        <div className="w-full md:w-1/2 mt-10 md:ml-1 lg:ml-9 sm:ml-3 md:mr-5 lg:mr-3">
          <img
            src={tyre1}
            alt="arrow-up"
            className="w-full h-auto object-cover -translate-x-3"
          />
          <div className="mt-5">
            <h1 className="font-poppins text-2xl md:text-4xl leading-[26.58px] text-slate-900 font-extrabold">
              Park safely
            </h1>
            <p className="mt-4 font-serif text-base">
              Park your car in a safe location, making sure to leave at least 1m
              between it and any surrounding vehicles or other obstacles, and
              preferably under shade.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <img
            src={tyre2}
            alt="arrow-up"
            className="w-full h-auto object-cover -translate-x-9"
          />
          <div className="mt-4">
            <h1 className="font-poppins text-2xl md:text-4xl leading-[26.58px] text-slate-900 font-extrabold">
              Stay close
            </h1>
            <p className="mt-5 font-serif text-base">
              Our technician will need you to give him access to the car when he
              arrives, before checking your tyres for wear and changing them as
              required.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-96 lg:translate-y-20 sm:block hidden">
        {" "}
        <Carwash8 />
      </div>
      <h1 className="text-6xl w-screen ml-12 lg:-translate-y-44 mt-10 text-secondary font-extrabold">
        Select Your Tyre Brand
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:-translate-y-44 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-14 mx-5">
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

      <div className=" mt-24">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Tyre;
