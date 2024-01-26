import styles from "../style";
export default function HowTo() {
  return (
    <div className="flex justify-center  items-center py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold  text-center  text-white  mb-16">
          It’s As Easy As 1- 2 - GODERASH{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <SmartphoneIcon className="mx-auto h-12 w-12 text-white" />
            <h3 className="mt-5 text-lg leading-6 font-medium text-gradient">
              Get the app
            </h3>
            <p className="mt-2 leading-6 font-medium text-white">
              Download the app and start saving time with Goderash.
            </p>
          </div>
          <div className="text-center">
            <CalendarCheckIcon className="mx-auto h-12 w-12 text-white" />
            <h3 className="mt-5 text-lg leading-6 font-medium text-gradient">
              Book and checkout
            </h3>
            <p className="mt-2 text-base leading-6 font-medium text-white">
              Open the app, anytime. Order and pay for a fuel delivery, car
              wash, oil or tyre change, or battery service.
            </p>
          </div>
          <div className="text-center">
            <CarIcon className="mx-auto h-12 w-12 text-white" />
            <h3 className="mt-5 text-lg leading-6 font-medium text-gradient">
              Get your car ready
            </h3>
            <p className="mt-2 text-base leading-6 font-medium text-white">
              Make sure your car is easily accessible (and don’t forget to open
              your fuel cap if you’ve ordered a fuel delivery).
            </p>
          </div>
          <div className="text-center">
            <ThumbsUpIcon className="mx-auto h-12 w-12 text-white" />
            <h3 className="mt-5 text-lg leading-6 font-medium text-gradient">
              You’re all set
            </h3>
            <p className="mt-2 text-base leading-6 font-medium text-white">
              And we’re on our way. No queues, no hassle. Simpler. Smarter.
              Goderash.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
