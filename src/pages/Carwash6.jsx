import styles from "../style";
import { carwash6 } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Carwash6 = () => {
  const checklist = [
    {
      text: "Deep exterior & interior cleaning with best-in-class steamers",
      isChecked: true,
    },
    {
      text: "Cleans stains, oils, grease, dirt and odours ",
      isChecked: true,
    },
    {
      text: "Includes vacuuming, tyre polishing, AC vent fumigation and surface disinfection",
      isChecked: true,
    },
    {
      text: "40-60 mins  1000 birr ",
      isChecked: true,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white lg:-translate-y-56  text-black flex flex-col md:flex-row space-y-px md:space-x-px">
      <div className="w-full md:w-[50%] lg:w-[50%] translate-x-5 lg:-translate-y-44 ">
        <div className="flex flex-col justify-center lg:-translate-x-32 items-center lg:ml-44 w-full h-screen hover:border-x-white hover:shadow-sm  ">
          <h1 className="text-black text-3xl md:text-2xl lg:-translate-x-20  font-bold font-poppins">
            <span className="  text-secondary lg:ml-20">
              Premium Wash + Sanitisation
            </span>
          </h1>
          <h1 className="text-black text-xl md:text-xl lg:-translate-x-20 font-poppins">
            With an everyday car wash, delivered at your <br /> convenience.
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
      <div className="bg-white flex flex-col md:flex-row space-y-px md:space-y-0 md:space-x-px mt-10 ">
        <img
          alt="Background"
          className="w-full md:w-[50%] lg:w-[800px] h-[350px] -translate-x-8 md:mb-0 md:ml-20 md:mr-4"
          src={carwash6}
        />
      </div>
    </div>
  );
};

export default Carwash6;
