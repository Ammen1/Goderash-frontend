import styles from "../style";
import { FuelDelivery, imagefuely, tya1, tyre1, carwash3 } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Battery3 = () => {
  return (
    <div className=" gap-3">
      <h1 className="text-black text-start  ml-4 text-4xl md:text-3xl font-bold font-poppins">
        What <span className=" text-secondary  ">Goderash</span> Offer?{" "}
      </h1>
      <p className=" text-sm  ml-4 mt-6 font-semibold">
        Our trained technician will check your battery, starter motor and
        charging system,
        <br /> and let you know the problem. If you just need a jump-start,
        we’ll have you on your way <br /> in minutes. If your battery needs
        changing, we’ll expertly install a replacement. All our <br /> batteries
        come complete with a comprehensive warranty, including unlimited
        jump-starts.*
      </p>
      <div className="mt-6">
        {" "}
        <h6 className=" text-sm text-current ml-4">
          *Terms and conditions apply.
        </h6>
        <h6 className=" text-sm text-current ml-4">
          **The prices of the battery services depends on vehicle make and
          model.
        </h6>
      </div>
    </div>
  );
};

export default Battery3;
