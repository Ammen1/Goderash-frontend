import { Button } from "@/components/ui/button";
import bgimg from "../assets/bgo.jpg";
import b from "../assets/b.png";
import logo_icon from "../assets/image/logo/logo-icon.svg";
import styles from "../style";
import { arrowUp } from "../assets";
import { show } from "../assets";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Fuel Delivery",
    description: "Get a better ",
    href: "/fuel",
    icon: ChartPieIcon,
  },
  {
    name: "Car Wash",
    description: "Speak directly ",
    href: "/carwash",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Trye",
    description: "Your customers’ ",
    href: "/tyre",
    icon: FingerPrintIcon,
  },
  {
    name: "Battery",
    description: "Connect with ",
    href: "battery",
    icon: SquaresPlusIcon,
  },
  {
    name: "Engie OiL",
    description: "Build strategic ",
    href: "engineoil",
    icon: ArrowPathIcon,
  },
  {
    name: "Emrgency ",
    description: "Build strategic ",
    href: "emergance",
    icon: ArrowPathIcon,
  },
];
const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollingDown(prevScrollY > currentScrollY);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const shouldHideNav = scrollingDown && prevScrollY > 80;
  return (
    <header
      className={`w-screen fixed flex bg-[#143464]   justify-between items-center transition-all  ${
        shouldHideNav ? "-translate-y-16" : "translate-y-0"
      }`}
    >
      <nav className="flex ml-48 justify-between items-center font-sans  w-full px-10 py-5 space-x-10">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center text-white font-medium rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only text-white font-medium">
              Open main menu
            </span>
            <Bars3Icon className="h-6 w-6 text-white " aria-hidden="true" />
          </button>
        </div>
        <div className="flex items-center -translate-x-44 ">
          <h1 className="text-3xl  space-x-2 shadow-lg">
            <span className=" text-white font-poppins ">GO</span>
            <span className=" text-white font-sans-serif">DERASH</span>
          </h1>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white font-medium"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-[#143464]  mt-3 h-60  rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2 flex">
                  {/* First Column */}
                  <div className="flex flex-auto   ">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative text-white flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-emerald-900"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 ">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-white"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-white">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-white ">
            Features
          </a>
          <a
            href="/orderpage"
            className="text-sm font-semibold leading-6 text-white"
          >
            Order Now
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white ">
            Company
          </a>
        </Popover.Group>
        <div className="hidden lg:ml-10 lg:flex -translate-x-14  lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className="text-sm font-semibold leading-6 text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button className=" bg-white border-dotted shadow-2xl hover:shadow-white hover:bg-white flex items-center px-4 py-2  rounded-md">
            <span className="mr-2 text-black font-semibold">Download Now</span>
            <AppleIcon className="text-black mr-1" />
            <SmartphoneIcon className="text-black" />
          </Button>
          <div className="md:hidden">
            <MenuIcon className="text-white" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function AppleIcon(props) {
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
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
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
