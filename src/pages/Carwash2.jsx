import styles from "../style";
import { FuelDelivery, imagefuely, tya1, tyre1 } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Carwash2 = () => {
  const checklist = [
    { text: "Doorstep service", isChecked: true },
    {
      text: "Full range of services, from essential cleaning to deep cleaning ",
      isChecked: true,
    },
    {
      text: "Eco-friendly car wash services",
      isChecked: true,
    },
    { text: "Avoid long queues", isChecked: true },
  ];

  return (
    <div className="w-full min-h-screen bg-white mt-4 text-black flex flex-col md:flex-row space-y-px md:space-x-px">
      <div className="bg-white flex flex-col md:flex-row space-y-px md:space-y-0 md:space-x-px mt-10 ">
        <img
          alt="Background"
          className="w-full md:w-[50%] lg:w-[400px] h-[600px] bg-black border-8  md:mb-0 md:ml-20 md:mr-4"
          src={tya1}
        />
      </div>
      <div className="w-full md:w-[50%] lg:w-[50%] ">
        <div className="flex flex-col justify-center items-center lg:ml-44 sm:ml-3  w-full h-screen  hover:border-x-white hover:shadow-sm  ">
          <h1 className="text-black text-4xl md:text-3xl font-bold font-poppins">
            Why <span className=" text-secondary">Goderash</span> Car Wash?{" "}
          </h1>
          <ul className="list-disc font-poppins text-md">
            {checklist.map((item, index) => (
              <li
                key={index}
                className={`relative ${item.isChecked ? "text-black" : ""}`}
              >
                {item.isChecked && (
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="absolute left-[-1.5rem] top-[0.5rem] rounded-full bg-secondary"
                  />
                )}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carwash2;
