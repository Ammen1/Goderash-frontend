import { tya1, tya } from "../assets";

const EngineOil7 = () => {
  return (
    <div className="w-full mt-20 bg-white  text-black flex flex-col md:flex-row space-y-px md:space-x-px">
      <div className="w-full md:w-[50%] lg:w-[50%] ">
        <div className="flex flex-col mt-20 mr-10     px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48">
          <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold font-poppins text-center lg:ml-20 mb-4">
            <span className="text-secondary">On the App</span>
          </h1>
          <p className="leading-6 text-base text-center font-poppins">
            Ordering a Goderash oil change service couldn’t be simpler. Just
            open the Goderash app and follow these simple steps.
          </p>
        </div>
      </div>
      <div className="bg-white lg:mr-10 w-full lg:-translate-x-20 space-x-12 lg:gap-10 md:w-[50%] lg:w-[50%] md:grid md:grid-cols-2 ">
        {[
          { src: tya, alt: "Carwash Image 1" },
          { src: tya1, alt: "Carwash Image 2" },
        ].map((image, index) => (
          <img
            key={index}
            alt={image.alt}
            className=" border-8 h-96  object-cover rounded-md md:mx-4"
            src={image.src}
          />
        ))}
      </div>
    </div>
  );
};

export default EngineOil7;
