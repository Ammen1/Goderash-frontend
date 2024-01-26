import React from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Sub() {
  return (
    <div className="bg-[#011730] text-white font-sans mt-10   ">
      <h2 className="text-center leading-6 text-4xl font-sans font-bold mb-6">
        Subscriptions For More
      </h2>
      <p className="text-center leading-6 font-medium text-lg mb-10">
        Choose the right pricing for you and get started working on your project
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4">
        <Card className="w-full  font-sans md:w-[350px] mt-3 bg-[#011730] hover:shadow-md hover:bg-current hover:border-rose-50 hover:border-x-green-900 hover:-shadow-xl hover:border-y-sky-600">
          <CardHeader>
            <CardTitle className="text-white leading-6 font-medium font-sans">
              Pro{" "}
            </CardTitle>
            <CardDescription className="text-xl text-white  font-sans">
              2000 /months
            </CardDescription>
            <CardDescription className="text-white leading-6 font-bold  font-sans">
              Fuel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside text-white leading-6 font-medium  font-sans list-disc space-y-2 mb-4">
              <li className=" text-left ">
                For Cars
                <p className=" ml-10 font-normal">
                  Enjoy the luxury of a hassle-free automotive experience with
                  our car subscription services. Gain access to a fleet of
                  vehicles, switch between models, and drive the latest rides
                  without the burden of ownership.
                </p>
              </li>
              <li>For Home</li>
              <li>For Your Company</li>
              <li>For Life</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-secondary text-black shadow-2xl hover:shadow-white hover:animate-bounce shadow-transparent hover:bg-white flex items-center px-4 py-2  rounded-md">
              <span className="mr-2 leading-6 font-medium ">
                Start pro Trial
              </span>
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full md:w-[350px] bg-[#011730] hover:shadow-md hover:bg-current  hover:border-rose-500 hover:border-x-green-400 hover:border-shadow-xl hover:border-y-blue-700">
          <CardHeader>
            <CardTitle className="text-white  font-sans">Pro</CardTitle>
            <CardDescription className="text-xl leading-6 font-medium font-sans text-white">
              20000 /month
            </CardDescription>
            <CardDescription className="text-xl leading-6 font-medium text-white">
              Insurances
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc leading-6 font-medium text-white space-y-2 mb-4">
              <li className=" text-left ">
                For Cars
                <p className=" ml-10 font-normal">
                  Enjoy the luxury of a hassle-free automotive experience with
                  our car subscription services. Gain access to a fleet of
                  vehicles, switch between models, and drive the latest rides
                  without the burden of ownership.
                </p>
              </li>
              <li>For Home</li>
              <li>For Your Company</li>
              <li>For Life</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-secondary text-black shadow-2xl hover:shadow-white hover:animate-bounce shadow-transparent hover:bg-white flex items-center px-4 py-2  rounded-md">
              <span className="mr-2">Start pro Trial</span>
            </Button>
          </CardFooter>
        </Card>
        <Card className=" w-full md:w-[350px] bg-[#011730] hover:shadow-md hover:bg-current  hover:border-rose-500 hover:border-x-green-400 hover:border-shadow-xl hover:border-y-yellow-900">
          <CardHeader>
            <CardTitle className="text-white">Pro</CardTitle>
            <CardDescription className="text-xl text-white">
              24,000 /month
            </CardDescription>
            <CardDescription className="text-xl text-white">
              Bolo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc leading-6 font-medium text-white space-y-2 mb-4">
              <li className=" text-left ">
                For Cars
                <p className=" ml-10 font-normal">
                  Enjoy the luxury of a hassle-free automotive experience with
                  our car subscription services. Gain access to a fleet of
                  vehicles, switch between models, and drive the latest rides
                  without the burden of ownership.
                </p>
              </li>
              <li>For Home</li>
              <li>For Your Company</li>
              <li>For Life</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-secondary text-black shadow-2xl hover:shadow-white hover:animate-bounce hover:bg-white flex items-center px-4 py-2 rounded-md">
              <span className="mr-2">Start pro Trial</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Sub;
