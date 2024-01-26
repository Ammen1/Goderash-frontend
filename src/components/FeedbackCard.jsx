import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col px-10 py-12 rounded-[30px] gap-4 w-[80%] font-sans  md:mr-10 sm:mr-5 mr-0 my-5 feedback-card border">
    <div className="flex flex-col md:flex-row items-center">
      <img
        src={img}
        alt={name}
        className="w-[48px] h-[48px] rounded-full mb-4 md:mb-0 md:mr-4"
      />
      <div className="flex flex-col">
        <h4 className="font-sans font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-sans font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
    <div>
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[20px] h-[10.6px]  object-contain"
      />
      <p className="font-sans font-normal text-[18px] leading-[32.4px] text-white ">
        {content}
      </p>
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[20px] h-[10.6px]  object-contain"
      />
    </div>
  </div>
);

export default FeedbackCard;
