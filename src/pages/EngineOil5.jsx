import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const EngineOil5 = () => {
  const checklist = [
    { text: "Air filter inspection", isChecked: true },
    { text: "Battery inspection ", isChecked: true },
    { text: "Brake fluid level top-up", isChecked: true },
    { text: "Coolant level top-up", isChecked: true },
    { text: "Headlight and brake light inspection", isChecked: true },
    { text: "Parking brake inspection ", isChecked: true },
    { text: "Steering fluid level top-up", isChecked: true },
    { text: "Tyre pressure check and top-up", isChecked: true },
    { text: "Windscreen washer fluid top-up", isChecked: true },
    { text: "Wiper blade inspection ", isChecked: true },
  ];

  return (
    <div className="w-full bg-white text-black flex flex-col">
      <div className="flex flex-col p-4">
        <h1 className="text-black text-4xl md:text-3xl font-bold mb-4">
          Free <span className="text-secondary">10-point</span> vehicle check
        </h1>
        <h6 className="text-base font-semibold">
          To help keep your car in the best possible condition, we offer a free
          10-point check with every oil change service.
        </h6>
        <div className="grid grid-cols-4 space-x-10 mt-6 bg-white font-semibold space-y-5">
          {checklist.map((item, index) => (
            <div
              key={index}
              className={`relative ${
                item.isChecked ? "bg-white" : "bg-white"
              } p-4 rounded-md`}
            >
              {item.isChecked && (
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  className="absolute left-[-1.5rem] top-[0.5rem] gap-8  w-10 h-10 bg-secondary"
                  style={{ color: "#your-desired-color" }}
                />
              )}
              <span className="justify-start text-start">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngineOil5;
