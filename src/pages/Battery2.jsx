import styles from "../style";
import { tya1, tya, battery1 } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Battery2 = () => {
  const checklist = [
    { text: "With you in as little as 30 minutes", isChecked: true },
    { text: "System diagnostic – no fault, no fee", isChecked: true },
    {
      text: "Comprehensive warranty on new batteries",
      isChecked: true,
    },
    { text: "A range of leading battery brands", isChecked: true },
    { text: "Jump-start service for flat batteries", isChecked: true },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col md:flex-row space-y-px md:space-x-px">
      <div className="bg-white flex flex-col md:flex-row space-y-px md:space-y-0 md:space-x-px mt-20 ">
        <img
          alt="Background"
          className="w-full md:w-[50%] lg:w-[450px] h-[400px] md:h-auto md:mb-0 md:ml-20 md:mr-4"
          src={battery1}
        />
        <h1 className="text-black -translate-x-96 text-gradient text-3xl font-extrabold font-mono">
          Battery
        </h1>

        <img
          alt="Background"
          className="w-full md:w-[50%] lg:w-[450px] border-8 h-[400px] md:mr-20 md:ml-4 z-[1000] overflow-visible  sm:block hidden -translate-x-44"
          src={tya1}
        />
      </div>
      <div className="w-full md:w-[50%] lg:w-[50%] bg-gray-100 -translate-x-44">
        <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 hover:border-x-white hover:shadow-sm translate-x-44">
          <h1 className="text-black text-4xl md:text-5xl font-bold font-poppins">
            We’ll help <span className=" text-secondary">get you started</span>
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

export default Battery2;
