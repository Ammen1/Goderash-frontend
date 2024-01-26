import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BatteryOrderForm = () => {
  const history = useNavigate();
  const [categories, setCategories] = useState([]);
  const [carTypes, setCarTypes] = useState([]);
  const [formData, setFormData] = useState({
    car_type: "",
    select_battery_service: "",
    qty: "",
    arrivaltime: "",
    category: "",
    delivery_address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    const fetchCarTypes = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/base/admin/listvehicleinformation/"
        );
        setCarTypes(response.data);
      } catch (error) {
        console.error("Error fetching car types:", error);
      }
    };

    fetchCarTypes();
  }, []);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/base/admin/listcategory/"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/base/user/batteryorder/",
        formData
      );
      console.log("Battery order placed successfully!");
      setFormData({
        car_type: "",
        select_battery_service: "",
        qty: "",
        arrivaltime: "",
        category: "",
        delivery_address: "",
      });
      history(`/payment`);
      window.location.reload();
    } catch (error) {
      console.error("Error placing battery order:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Battery Order Form</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="car_type"
            className="block text-sm font-medium text-gray-600"
          >
            Car Type
          </label>
          <select
            name="car_type"
            value={formData.car_type}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Select Car Type</option>
            {carTypes.map((carType) => (
              <option key={carType.id} value={carType.vehicle_type}>
                {carType.vehicle_type}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="qty"
            className="block text-sm font-medium text-gray-600"
          >
            Quantity
          </label>
          <input
            type="number"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            min="1"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Select Category
          </label>
          <select
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option key="default" value="">
              Select Category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="select_battery_service"
            className="block text-sm font-medium text-gray-600"
          >
            Select Battery Service
          </label>
          <select
            type="text"
            name="select_battery_service"
            value={formData.select_battery_service}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="">Select Car Type</option>
            <option value="standard">Standard</option>
            <option value="standard">premium</option>

            <option value="agm">AGM</option>
          </select>
          <p className=" text-secondary cursor-pointer mt-3">
            {" "}
            Learn More about Battery Service
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="delivery_address"
            className="block text-sm font-medium text-gray-600"
          >
            Address
          </label>
          <input
            id="delivery_address"
            name="delivery_address"
            value={formData.delivery_address}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="arrivaltime"
            className="block text-sm font-medium text-gray-600"
          >
            Arrival Time
          </label>
          <input
            type="datetime-local"
            name="arrivaltime"
            value={formData.arrivaltime}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 mt-3 text-white px-4 py-2 rounded-md hover:bg-blue-900"
          onClick={handleSubmit}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default BatteryOrderForm;
