import styles from "../style";
import { engineoil, imagefuely, tya1 } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import EngineOil1 from "./EngineOil1";

const EngineOil2 = () => {
  const checklist = [
    { text: "Mobile oil check and change", isChecked: true },
    { text: "Top quality Mobil & Total products ", isChecked: true },
    {
      text: "Includes oil filter replacement",
      isChecked: true,
    },
    { text: "0-point vehicle check", isChecked: true },
  ];

  return (
    <div className="w-full min-h-screen bg-white mt-4 text-black flex flex-col md:flex-row space-y-px md:space-x-px">
      <div className="bg-white flex flex-col md:flex-row space-y-px md:space-y-0 md:space-x-px mt-20 ">
        <img
          alt="Background"
          className="w-full md:h-auto md:mb-0 md:ml-20 md:mr-4"
          src={engineoil}
        />
        <h1 className="text-black lg:-translate-x-96 lg:mr-20 lg:-translate-y-10 text-gradient text-3xl font-extrabold font-mono">
          Oil
        </h1>

        <img
          alt="Background"
          className="w-full md:w-[50%] lg:w-[450px] h-[400px] md:mr-20 md:ml-4 z-[1000] overflow-visible border-8 rounded-md  sm:block hidden lg:-translate-x-60"
          src={tya1}
        />
      </div>
      <div className="w-full md:w-[50%] lg:w-[50%] bg-gray-100 -translate-x-44">
        <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 hover:border-x-white hover:shadow-sm translate-x-44">
          <h1 className="text-black text-4xl md:text-3xl font-bold font-poppins">
            We’ll keep your{" "}
            <span className=" text-secondary">engine purring</span>
          </h1>
          <ul className="list-disc font-poppins lg:mt-4 text-md">
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

export default EngineOil2;
