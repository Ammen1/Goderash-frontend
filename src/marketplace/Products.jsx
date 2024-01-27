// eslint-disable-next-line no-unused-vars
import React from "react";
import { services } from "../constants";
import styles from "../style";
import HomeM from "./HomeM";

const Products = () => {
  const itemsPerPage = 3;

  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} font-sans overflow-hidden flex-col relative py-2 border-white`}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} font-sans`}>
          Our Services <br className="sm:block hidden font-sans w-full" />
        </h2>
      </div>
      <div className="flex flex-wrap">
        {services.map((card, index) => (
          <div
            key={card.id}
            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 ${
              index % itemsPerPage === 0 ? "clear-both" : ""
            }`}
          >
            <HomeM {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
