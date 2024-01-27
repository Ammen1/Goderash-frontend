import b from "../assets/b.png";
import styles from "../style";
import { show, rote } from "../assets";
import Footer from "@/components/Footer";
import EngineOil1 from "./EngineOil1";
import EngineOil2 from "./EngineOil2";
import EngineOil3 from "./EngineOil3";
import EngineOil4 from "./EngineOil4";
import EngineOil5 from "./EngineOil5";
import EngineOil6 from "./EngineOil6";
import EngineOil7 from "./EngineOil7";
import NavBar from "@/components/NavBar";

const EngineOil = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative bg-[#011730] overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Background"
            className="w-full h-full object-cover "
            height="2048"
            src={b}
            style={{
              aspectRatio: "581/2048",
              objectFit: "cover",
            }}
            width="581"
          />
        </div>
        <div className="relative flex flex-col items-center justify-between px-10">
          <NavBar />
          {/*main*/}
          <main className="flex mt-32 flex-col items-center text-center mb-10 pt-4">
            <h2 className="text-6xl font-bold text-white mb-4">
              Save time, every time you refuel
            </h2>
            <p className="text-3xl text-white mb-8">
              Fuel delivery <span className=" text-amber-400"> Order Now</span>{" "}
            </p>
            <div
              className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full  p-[2px] cursor-pointer `}
            >
              <div
                className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
              >
                <img
                  src={rote}
                  alt="arrow-up"
                  className="w-[160px] h-[160px]  object-contain"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
      <EngineOil1 />
      <EngineOil2 />
      <EngineOil3 />
      <EngineOil4 />
      <EngineOil5 />
      <EngineOil7 />
      <EngineOil6 />

      <div className="mt-24">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default EngineOil;
