import styles from "../style";
import im from "../assets/im.svg";
import React from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

const Team = () => {
  return (
    <div className=" sm:block hidden justify-center leading-6 font-medium  items-center">
      <div className="flex w-full ml-16 mt-16 bg-secondary py-1  "></div>

      <div className="flex flex-col rounded-e-sm gap-4 mr-auto md:flex-row space-y-5 md:space-y-0 md:space-x-8 mx-4 md:mx-8 lg:mx-16">
        <div className="flex flex-col h-full ml-10  items-center md:w-1/4">
          <div className="p-1 mr-48 bg-secondary h-[100px] "></div>
          <img
            src={im}
            alt="im"
            className=" mr-48 w-10 hover:border-3 border-3 shadow-secondary  shadow-md hover:shadow-md  hover:scale-150  scale-150  hover:shadow-white bg-secondary  hover:bg-white rounded-full transition-opacity duration-800 opacity-1 hover:opacity-100 "
          />
          <div className="flex flex-col mt-1 mr-52 md:flex-row justify-center space-y-4 md:space-x-4">
            <Card className="w-full md:w-[350px] mt-2 bg-[#011730]  hover:shadow-md hover:bg-current hover:border-rose-50 hover:border-x-green-900 hover:-shadow-xl hover:border-y-sky-600">
              <CardHeader>
                <CardTitle className="text-white">Our Goal </CardTitle>
              </CardHeader>
              <CardContent className="text-white text-center font-sans">
                <p className="font-bold text-gradient text-lg leading-6">
                  Customer Satisfaction:
                </p>
                <p>
                  Achieve a customer satisfaction rating of 95% or higher
                  through personalized and efficient services.
                </p>

                <p className="font-bold text-gradient leading-6">Innovation:</p>
                <p>
                  Introduce at least two new innovative services or products
                  annually to stay ahead of industry trends.
                </p>

                <p className="font-bold text-gradient leading-6">Leadership:</p>
                <p>
                  Become the market leader in our region for comprehensive car
                  services within the next three years.
                </p>

                <p className="font-bold text-gradient leading-6">
                  Environmental Sustainability:
                </p>
                <p>
                  Implement eco-friendly practices in all aspects of our
                  operations, aiming to reduce our carbon footprint by 20%
                  within the next two years.
                </p>

                <p className="font-bold text-gradient text-lg leading-6">
                  Employee Engagement:
                </p>
                <p>
                  Foster a positive and collaborative work culture, aiming for
                  an employee satisfaction rate of 90% or higher.
                </p>

                <p className="font-bold text-gradient text-lg leading-6">
                  Community Impact:
                </p>
                <p>
                  Actively engage in community initiatives related to road
                  safety, environmental awareness, and social responsibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-1/2">
          <div className="p-1 ml-10 h-[100px]  bg-secondary"></div>
          <img
            src={im}
            alt="im"
            className=" ml-10 w-10 hover:border-3 border-3 shadow-secondary  shadow-md hover:shadow-md  hover:scale-150  scale-150  hover:shadow-white bg-secondary  hover:bg-white rounded-full transition-opacity duration-800 opacity-1 hover:opacity-100 "
          />
          <div className="flex flex-col md:flex-row mt-2 justify-center space-y-4 md:space-x-4">
            <Card className=" w-full md:w-[350px] bg-[#011730]  hover:shadow-md hover:bg-current  hover:border-rose-500 hover:border-x-green-400 hover:border-shadow-xl hover:border-y-yellow-900">
              <CardHeader>
                <CardTitle className="text-white leading-6 font-medium">
                  Mision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white text-center font-sans">
                <p>
                  Our mission is to redefine the driving experience by
                  establishing a comprehensive one-stop-shop for all automotive
                  needs. At Goderash, we take pride in delivering exceptional
                  services, including high-quality fuel provisions, meticulous
                  tire care, thorough car wash services, reliable insurance
                  options, expert battery replacements, and seamless vehicle
                  sales. Our commitment extends beyond the ordinary—aiming for
                  excellence in every facet of our operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-1/2">
          <div className="p-1 ml-28 h-[100px]  bg-secondary"></div>
          <img
            src={im}
            alt="im"
            className="p-1 ml-28 w-10 hover:border-3 border-3 shadow-secondary  shadow-md hover:shadow-md  hover:scale-150  scale-150  hover:shadow-white bg-secondary  hover:bg-white rounded-full transition-opacity duration-800 opacity-1 hover:opacity-100"
          />
          <div className="flex flex-col mt-2 ml-10  md:flex-row justify-center space-y-4 md:space-x-4">
            <Card className="w-full md:w-[350px] bg-[#011730]  hover:shadow-md hover:bg-current  hover:border-rose-500 hover:border-x-green-400 hover:border-shadow-xl hover:border-y-blue-700">
              <CardHeader>
                <CardTitle className="text-white">Vision!</CardTitle>
              </CardHeader>
              <CardContent className="text-white text-center ">
                <p>
                  To emerge as the premier provider of comprehensive and
                  innovative car services, we aspire to revolutionize the
                  automotive industry through sustainable and customer-centric
                  solutions. Our commitment extends beyond conventional service
                  models, aiming to set new standards that prioritize
                  environmental responsibility, cutting-edge innovation, and a
                  relentless focus on customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="absolute z-[1000] w-[20%] h-[10%] blue__gradient bottom-40 " />
      <div className="absolute z-[10] w-[20%] h-[10%] overflow-hidden  bottom-20 blue__gradient " />
    </div>
  );
};

export default Team;
