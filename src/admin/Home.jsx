// AdminDashboard.jsx
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Side";
import Calendar from "./Calendar";
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";
import TableThree from "./TableThree";
import TableFourFuel from "./TableFourFuel";
import TableFiveTyre from "./TablefiveTyre";
import TableSixCarWash from "./TableSixCarWash";
import TableSaveEngineOil from "./TableSaveEngineOil";

const Home = () => {
  return (
    <div className="flex h-auto w-full bg-gray-100 mt-20">
      <Sidebar />
      <main className="flex-1">
        <Navbar />

        {/* Page Content */}
        <div className=" p-14 ml-44 bg-gray-100 ">
          <h1 className="text-3xl font-semibold mb-4">dashboard content</h1>
          <div
            className=" w-full 
          p-5 rounded shadow-md"
          >
            <div className=" mt-4 ">
              <TableThree />
              <TableTwo />
              <TableFourFuel />
              <TableFiveTyre />
              <TableSixCarWash />
              <TableSaveEngineOil />
              <div className=" mt-5">
                <TableOne />{" "}
              </div>

              <Calendar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
