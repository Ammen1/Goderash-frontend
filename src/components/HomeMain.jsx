import { Button } from "@/components/ui/button";
import bgimg from "../assets/bgo.jpg";
import b from "../assets/b.png";
import logo_icon from "../assets/image/logo/logo-icon.svg";
import styles from "../style";
import { arrowUp } from "../assets";
import { show } from "../assets";

const HomeMain = () => {
  return (
    <main className="flex mt-32 flex-col items-center text-center mb-10 pt-4">
      <h2 className="text-6xl font-bold text-white mb-4">
        We give you the time to do the things that matter
      </h2>
      <p className="text-xl text-white mb-8">
        Fuel delivery and time-saving vehicle services
      </p>
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
          {/* <div className={`${styles.flexStart} flex-row `}>
                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                  <span className="text-gradient">Get</span>
                </p>
                <img
                  src={arrowUp}
                  alt="arrow-up"
                  className="w-[23px] h-[23px] object-contain"
                />
              </div> */}

          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <img
              src={show}
              alt="arrow-up"
              className="w-[170px] h-[170px] mt-7 object-contain"
            />
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomeMain;
