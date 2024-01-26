import { tya1, tya } from "../assets";

const Battery5 = () => {
  return (
    <div className="w-full min-h-screen bg-white mt-16  text-black flex flex-col md:flex-row space-y-px md:space-x-px">
      <div className="w-full md:w-[50%] lg:w-[50%] ">
        <div className="flex flex-col justify-center  items-center w-full h-full px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48">
          <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold  text-center  mb-4">
            <span className="text-secondary">On the App</span>
          </h1>
          <p className="leading-6 text-md text-center ">
            Ordering a Goderash battery service couldn’t be simpler. Just open
            up the Goderash app and follow these simple steps
          </p>
        </div>
      </div>
      <div className="bg-white lg:mr-10 w-full lg:-translate-x-20 space-x-12 lg:gap-10 md:w-[50%] lg:w-[50%] md:grid md:grid-cols-2">
        {[
          { src: tya, alt: "Carwash Image 1" },
          { src: tya1, alt: "Carwash Image 2" },
        ].map((image, index) => (
          <img
            key={index}
            alt={image.alt}
            className="w-full border-8 h-72 md:h-auto object-cover mb-4  lg:mb-0 rounded-md md:mx-4"
            src={image.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Battery5;
