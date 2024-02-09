// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import b from "../assets/b.png";
import styles from "../style";
import { rote } from "../assets";
import NavBar from "@/components/NavBar";
import axios from "axios"; // Added the import for axios

const HomeM = () => {
  const history = useNavigate();
  const [services, setServices] = useState([]);
  const [, setMediaData] = useState([]);
  const productId = 1; // Replace with the actual product inventory ID

  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        const response = await axios.get(
          `/api/product-inventory/${productId}/media/`
        );
        setMediaData(response.data.media);
      } catch (error) {
        console.error("Error fetching media data:", error);
      }
    };

    fetchMediaData();
  }, [productId]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/products/inventory/category/all/"
        );
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleOrderClick = (serviceSlug) => {
    history(`/order/${serviceSlug}`);
  };

  return (
    <div>
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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-14 mx-5">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/${service.slug}`}
            className="flex flex-col items-center justify-center text-black"
          >
            <div className="bg-white p-6 justify-center items-center rounded-lg shadow-md hover:shadow-lg">
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <div className="flex justify-between w-full">
                <span className="text-lg font-bold text-black text-center">
                  Price: {service.brand}
                </span>
              </div>
              {/* <p className="text-gray-600 mb-4">
                {service.description.slice(0, 100)}...
                <Link to={`/${service.slug}`} className="text-blue-500 mt-2">
                  Read More
                </Link>
              </p> */}
              <div className="flex items-center mb-2">⭐⭐⭐⭐⭐</div>
              <Button
                onClick={() => handleOrderClick(service.slug)}
                className=" bg-red-400 hover:bg-lime-600 text-white px-4 py-2 mt-2"
              >
                Place Order
              </Button>
            </div>
          </Link>
        ))}
      </div>
      <div className="lg:mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default HomeM;
