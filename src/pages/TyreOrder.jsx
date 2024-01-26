import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TyreOrder = () => {
  const history = useNavigate();
  const [categories, setCategories] = useState([]);
  const [carTypes, setCarTypes] = useState([]);
  const [tyreBrand, settyreBrands] = useState([]);
  const [formData, setFormData] = useState({
    car_type: "",
    brand: "",
    delivery_address: "",
    tyre_size: "",
    tyre_type: "",
    qty: 1,
    arrivaltime: "",
    category: "", // You might need to fetch and set the category dynamically
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/tyre/user/tyre/listtyrebrand/"
        );
        settyreBrands(response.data);
      } catch (error) {
        console.error("Error fetching brand :", error);
      }
    };
    fetchBrand();
  }, []);
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
          "http://127.0.0.1:8000/api/tyre/user/tyre/listtyrecategory/"
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
        "http://127.0.0.1:8000/api/tyre/user/tyre/create/",
        formData
      );
      console.log("Tyre order placed successfully!");
      // Reset the form data after submission
      setFormData({
        car_type: "",
        brand: "",
        delivery_address: "",
        tyre_size: "",
        tyre_type: "",
        qty: 1,
        arrivaltime: "",
        category: "",
      });
      history(`/payment`);
      window.location.reload();
    } catch (error) {
      console.error("Error placing tyre order:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6">Tyre Delivery Order</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="car_type"
            className="block text-sm font-medium text-gray-600"
          >
            Select Car Type
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
            htmlFor="brand"
            className="block text-sm font-medium text-gray-600"
          >
            Select Tyre Brand
          </label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Select Tyre Brand</option>
            {tyreBrand.map((brand) => (
              <option key={brand.id} value={brand.name}>
                {brand.name}
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
            htmlFor="tyre_size"
            className="block text-sm font-medium text-gray-600"
          >
            What is your tyre size ?
          </label>
          <input
            type="number"
            id="tyre_size"
            name="tyre_size"
            value={formData.tyre_size}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="tyre_type"
            className="block text-sm font-medium text-gray-600"
          >
            Select Your Tyre
          </label>
          <select
            id="tyre_type"
            name="tyre_type"
            value={formData.tyre_type}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="">Select Your Tyre</option>
            <option value="standard">Bridgestone</option>
            <option value="primium">Kumho Tyre</option>
            <option value="agm"> Gooodyear</option>
            <option value="agm"> Michelin</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="qty"
            className="block text-sm font-medium text-gray-600"
          >
            Number Of Tyres
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
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-900"
          onClick={handleSubmit}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default TyreOrder;
