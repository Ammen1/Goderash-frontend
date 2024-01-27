import React from "react";

const HomeM = () => {
  const carDetails = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    rating: 4.5,
    totalReviews: 120,
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded overflow-hidden w-64 mx-4">
        <img
          src="https://via.placeholder.com/150"
          alt={`${carDetails.make} ${carDetails.model}`}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{`${carDetails.year} ${carDetails.make} ${carDetails.model}`}</h2>
          <p className="text-gray-600">Rating: {carDetails.rating}</p>
          <p className="text-gray-600">
            Total Reviews: {carDetails.totalReviews}
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomeM;
