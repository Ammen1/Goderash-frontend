import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";
import styles from "../style";
import { star } from "@/assets";
import { arrowR } from "@/assets";
import { arrowL } from "@/assets";

const Testimonials = () => {
  const itemsPerPage = 1; // Number of items to show per page
  const totalItems = feedback.length;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const visibleFeedback = feedback.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative text-white font-sans   py-2 border-white `}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className=" w-40 h-16 mr-12 mt-5 border-t-4 bg-violet-900 border-t-indigo-700 border-b-4 border-b-pink-800 justify-center items-center rounded-full p-[2px] cursor-pointer ">
          <img src={star} alt="start" className=" animate-bounce" />
        </div>
        <div className="w-full md:mt-0 mt-6">
          <p
            className={`${styles.paragraph} text-left  font-sans max-w-[450px] text-white`}
          >
            Everything You Need To Get Car Services And Grow Your Business
            Anywhere On The Planet With Go derash. Go derash is The Company work
            On Fuel Delivery And Cars Services.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {visibleFeedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
        {totalPages > 1 && (
          <div className="flex mt-4">
            {currentPage > 0 && (
              <img
                src={arrowL}
                alt="arrowl"
                onClick={handlePrevPage}
                className="mr-2 bg-white"
              />
            )}
            Prev
            <img
              src={arrowR}
              alt="arrowr"
              onClick={handleNextPage}
              className="mr-2 bg-white "
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
