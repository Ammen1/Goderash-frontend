import styles from "../style";
import Stats from "./Stats";
const Fuel3 = () => {
  return (
    <div className="w-screen h-screen mt-10 space-y-24 bg-white ">
      <div className=" ml-5 text-5xl font-poppins font-extrabold">
        Same price as the petrol station, <br />
        <span className=" text-secondary font-poppins font-extrabold">
          with Go Derash delivery
        </span>
      </div>
      <div className="md:mx-4 lg:mx-8 bg-gray-100">
        <Stats />
      </div>
    </div>
  );
};

export default Fuel3;
