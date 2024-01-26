import React, { useState } from "react";
import axios from "axios";

const AddCar = () => {
  const [newVehicle, setNewVehicle] = useState({
    vehicle_type: "",
    vehicle_model: "",
    license_plate: "",
    driver_license: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/base/user/createvehicleinformation/",
        newVehicle
      );
      setNewVehicle({
        service_type_id: 1,
        vehicle_type: "",
        vehicle_model: "",
        license_plate: "",
        driver_license: "",
      });
      alert("Vehicle added successfully!");
    } catch (error) {
      console.error("Error adding vehicle:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add a New Vehicle</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Vehicle Type:</span>
          <input
            type="text"
            name="vehicle_type"
            value={newVehicle.vehicle_type}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Vehicle Model:</span>
          <input
            type="text"
            name="vehicle_model"
            value={newVehicle.vehicle_model}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">License Plate:</span>
          <input
            type="text"
            name="license_plate"
            value={newVehicle.license_plate}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Driver License:</span>
          <input
            type="text"
            name="driver_license"
            value={newVehicle.driver_license}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Add Vehicle
        </button>
      </form>
    </div>
  );
};

export default AddCar;
