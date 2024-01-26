import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import styles from "../style";
import Footer from "@/components/Footer";
import Header from "../components/Header";

import { show, rote, c1, c2, b } from "../assets";

function Orderpage() {
  const history = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/base/admin/listcategory/"
        );
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    // console.log("Image URL:", services.image);

    fetchServices();
  }, []);

  const handleOrderClick = (serviceSlug) => {
    history(`/order/${serviceSlug}`);
  };

  return (
    <div className="bg-white h-screen ">
      <Header />
      <div className="relative bg-[#011730] overflow-hidden"></div>
      <div className="max-w-7xl h-auto mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mt-3 text-black mb-10">
          Welcome To Order Page{" "}
          <span className="cursor-not-allowed">Choose Your Services</span>
        </h2>
        <div className="grid grid-cols-1 overflow-hidden   md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/${service.slug}`}
              className="text-center text-black"
            >
              <div className=" bg-sky-500  p-4 overflow-hidden  hover:bg-cyan-400 hover:duration-1000 hover:gap-y-5 hover:opacity-2 rounded-md cursor-pointer transition-transform transform hover:scale-105">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.name}
                    className="justify-center items-center ml-1"
                    width={250}
                    height={250}
                  />
                )}
                <div className="mx-auto h-12 w-12 text-black" />
                <h3 className="text-lg leading-6 font-medium">
                  {service.name}
                </h3>
                <h3 className="mx-auto text-lg leading-6 font-medium ">
                  <span className=" text-secondary text-xl "> Price</span>{" "}
                  {service.price}
                </h3>
                <p className="text-base">{service.description}</p>
                <Button
                  onClick={() => handleOrderClick(service.slug)}
                  className="bg-lime-900 text-white px-4 py-2 rounded-full mt-8 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Place Order
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Orderpage;
