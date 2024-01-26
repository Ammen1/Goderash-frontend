import styles from "../style";
import { FuelDelivery, imagefuely, tya1, tyre1, carwash3 } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const EngineOil3 = () => {
  return (
    <div className=" text-start">
      <h1 className="text-black ml-12  mt-10 text-4xl md:text-3xl font-bold ">
        What <span className=" text-secondary ">Goderash</span> Offer?{" "}
      </h1>
      <div className=" ml-5">
        <p className=" text-start">
          Our trained technician will come to you, and change your car’s oil
          using your choice of top quality <br /> Mobil & Total synthetic oil.
          He’ll also change the oil filter and conduct a free ten-point vehicle
          check.
          <br />
          <span className=" text-2xl font-semibold">Please note – </span> the
          oil change service needs to be booked in advance <br /> to ensure that
          our technician is carrying the correct oil and filter for your car.
        </p>
      </div>
    </div>
  );
};

export default EngineOil3;
