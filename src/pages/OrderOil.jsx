import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderOil = () => {
  const history = useNavigate();
  const [categories, setCategories] = useState([]);
  const [carTypes, setCarTypes] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    car_type: "",
    engine_oil_type: "",
    engine_size: "",
    qty: "",
    delivery_address: "",
    aarrivaltime: "",
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
          "http://gooderash.com/api/base/admin/listvehicleinformation/"
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
          "http://gooderash.com/api/base/admin/listcategory/"
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
        "http://gooderash.com/api/base/user/createengineoil/",
        formData
      );
      console.log("Tyre order placed successfully!");
      // Reset the form data after submission
      setFormData({
        category: "",
        car_type: "",
        engine_oil_type: "",
        engine_size: "",
        qty: "",
        delivery_address: "",
        aarrivaltime: "",
      });
      history(`/payment/`);
      window.location.reload();
    } catch (error) {
      console.error("Error placing tyre order:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10 bottom-6 -translate-y-7">
      <h1 className="text-4xl font-bold mb-6 ">Oil Delivery Order</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="car_types"
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
            htmlFor=" engine_size"
            className="block text-sm font-medium text-gray-600"
          >
            What is your engine size ?
          </label>
          <input
            type="number"
            id="engine_size"
            name="engine_size"
            value={formData.engine_size}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          ></input>
          <div>
            <p className="text-lg text-green-500">
              To provide you with accurate Price we need your engine size if you
              are not sure we show you the price range
            </p>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="engine_oil_type"
            className="block text-sm font-medium text-gray-600"
          >
            Select Oil Type
          </label>
          <select
            id="engine_oil_type"
            name="engine_oil_type"
            value={formData.engine_oil_type}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="">Select Your Oil</option>
            <option value="mobil1">Mobil 1</option>
            <option value="mobilsuper">Mobil Super 3000</option>
            <option value="mobilesuper2000">Mobil super 2000</option>
          </select>
          <p className="text-secondary"> what does it include ?</p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="qty"
            className="block text-sm font-medium text-gray-600"
          >
            Number of Oil
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
            htmlFor=" delivery_address"
            className="block text-sm font-medium text-gray-600"
          >
            Delivery Address
          </label>
          <input
            id=" delivery_address"
            name="delivery_address"
            value={formData.delivery_address}
            onChange={handleChange}
            rows="4"
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

export default OrderOil;
