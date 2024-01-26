// PaymentPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { orderId } = useParams();

  const handlePayment = () => {
    // Simulate payment logic
    console.log("Payment successful for Order ID:", orderId);
    alert("Payment successful!");
  };

  useEffect(() => {
    // Fetch additional order details from the server if needed
    // For simplicity, we are using the order_id from the URL params
    // Example: Fetch order details from the server using orderId
    // fetchOrderDetails(orderId)
    //   .then((data) => {
    //     // Update state with fetched data
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching order details:", error);
    //   });
  }, [orderId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-secondary hover:text-left animate-bounce mb-4">
          Payment{" "}
          <span className=" text-gradient font-extrabold">Intergration</span>{" "}
          <span className=" text-orange-600 animate-spin">Comind Soon</span>{" "}
          <span className=" text-emerald-500 animate-ping ">...!!!</span>
        </h1>
        <h1 className="text-3xl font-bold mb-4">Payment Page</h1>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Order Details</h2>
          <p className="text-gray-400">Order ID: {orderId}</p>
          {/* Display total and other order information if available */}
          <p>Total Price: </p>
          {/* Additional order information can be displayed here */}
        </div>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handlePayment}
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
