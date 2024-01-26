import styles from "../style";
import { FuelDelivery, imagefuely, tya1 } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Tyre2 = () => {
  const checklist = [
    { text: "Mobile Tyre check and tyre change service", isChecked: true },
    { text: "Includes fitting and balancing ", isChecked: true },
    {
      text: "A range of leading brands of top-quality tyres",
      isChecked: true,
    },
    { text: "Comprehensive warranty on all new tyres", isChecked: true },
  ];

  return (
    <div className="w-full min-h-screen bg-white mt-4 text-black flex flex-col md:flex-row space-y-px md:space-x-px">
      <div className="bg-white flex flex-col md:flex-row space-y-px md:space-y-0 md:space-x-px mt-20 ">
        <img
          alt="Background"
          className="w-full md:w-[50%] lg:w-[450px] h-[400px] md:h-auto md:mb-0 md:ml-20 md:mr-4"
          src={imagefuely}
        />
        <h1 className="text-black -translate-x-96 text-gradient text-3xl font-extrabold font-mono">
          TYRES
        </h1>

        <img
          alt="Background"
          className="w-full md:w-[50%] lg:w-[450px] h-[400px] md:mr-20 md:ml-4 z-[1000] overflow-visible border-8 rounded-md  sm:block hidden -translate-x-44"
          src={tya1}
        />
      </div>
      <div className="w-full md:w-[50%] lg:w-[50%] bg-gray-100 -translate-x-44">
        <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 hover:border-x-white hover:shadow-sm translate-x-44">
          <h1 className="text-black text-4xl md:text-3xl font-bold font-poppins">
            Goderash Tyre Change We’ll{" "}
            <span className=" text-secondary">keep you rolling</span>
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

export default Tyre2;
