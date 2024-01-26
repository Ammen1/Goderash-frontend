import { tya1, tya } from "../assets";

const Carwash8 = () => {
  return (
    <div className="w-full min-h-screen bg-white lg:-translate-y-56  text-black flex flex-col md:flex-row space-y-px md:space-x-px">
      <div className="w-full md:w-[50%] lg:w-[50%] lg:-translate-y-44">
        <div className="flex flex-col justify-center lg:-translate-x-32 lg:-translate-y-36 items-center lg:ml-20 w-full h-full px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48">
          <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold font-poppins text-center lg:ml-20 mb-4">
            <span className="text-secondary">On the App</span>
          </h1>
          <p className="leading-6 text-base text-center font-poppins">
            Ordering a Goderash car wash is simple. Just open the Goderash app
            and choose your preferred car wash from our full range of services,
            ranging from essential cleaning to deep cleaning.
          </p>
        </div>
      </div>
      <div className="bg-white lg:mr-10 w-full lg:-translate-x-20 space-x-12 lg:gap-10 md:w-[50%] lg:w-[50%] md:grid md:grid-cols-2 lg:-translate-y-36">
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

export default Carwash8;
