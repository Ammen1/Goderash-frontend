import { Button } from "@/components/ui/button";
import bgimg from "../assets/bgo.jpg";
import b from "../assets/b.png";
import logo_icon from "../assets/image/logo/logo-icon.svg";
import styles from "../style";
import { arrowUp } from "../assets";
import { show } from "../assets";
import HomeMain from "./HomeMain";
import NavBar from "./Navbar";

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

export default function Component() {
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
    <div className="relative font-sans bg-slate-950 overflow-hidden">
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
      <div className="relative  flex flex-col items-center justify-between px-10">
        <NavBar />
        {/*main*/}
        <HomeMain />
      </div>
    </div>
  );
}

{
  /* icon */
}

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
