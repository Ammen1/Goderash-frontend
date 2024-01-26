import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FuelOrderPage = () => {
  const history = useNavigate();
  const [categories, setCategories] = useState([]);
  const [carTypes, setCarTypes] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    car_type: "",
    fuel_capacity: "",
    current_fuel_level: "",
    qty: "",
    delivery_address: "",
    arrrivaltime: "",
    fuel_type: "",
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
        console.log("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/base/user/orderfuel/",
        formData
      );
      console.log("Fuel order placed succeefull");
      setFormData({
        category: "",
        car_type: "",
        fuel_capacity: "",
        current_fuel_level: "",
        qty: "",
        delivery_address: "",
        arrrivaltime: "",
        fuel_type: "",
      });
      history(`/payment`);
      window.location.reload();
    } catch (error) {
      console.error("Error placing Fuel order:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10 bottom-6 -translate-y-7">
      <h1 className="text-4xl font-bold mb-6">Fuel Delivery Order</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="car_type"
            className="block text-sm font-medium text-gray-600"
          >
            Vehicle Type
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
            htmlFor="fuel_capacity"
            className="block text-sm font-medium text-gray-600"
          >
            fuel capacity
          </label>
          <input
            type="number"
            id="fuel_capacity"
            name="fuel_capacity"
            value={formData.fuel_capacity}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="current_fuel_level"
            className="block text-sm font-medium text-gray-600"
          >
            current_fuel_level
          </label>
          <input
            type="number"
            id="current_fuel_level"
            name="current_fuel_level"
            value={formData.current_fuel_level}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="current_fuel_level"
            className="block text-sm font-medium text-gray-600"
          >
            Number of Cars
          </label>
          <input
            type="number"
            id="qty"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
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
            htmlFor="fuel_type"
            className="block text-sm font-medium text-gray-600"
          >
            Select Fuel Type
          </label>
          <select
            id="fuel_type"
            name="fuel_type"
            value={formData.fuel_type}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="">Select Fuel Type</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-600"
          >
            Quantity (in liters)
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
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
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-900 justify-center items-center"
          onClick={handleSubmit}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default FuelOrderPage;
