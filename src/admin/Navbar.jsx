import React from "react";
import log_icon from "../assets/image/logo/logo-icon.svg";
import { NavLink } from "react-router-dom";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DripdownNotification from "./DripdownNotification";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ title }) => {
  return (
    <nav className="fixed-navbar w-full bg-white p-5 shadow-md flex justify-between items-center">
      <div className="text-white text-2xl font-semibold">{title}</div>

      <div className="rounded-full items-start justify-start mr-auto ">
        <NavLink to={"/"} className="link items-start">
          <img
            alt="Logo"
            className="w-[70] h-[40] object-cover rounded-full"
            height="40"
            src={log_icon}
            width="50"
          />
        </NavLink>
      </div>
      <DripdownNotification />
      <DarkModeSwitcher />
      <div class="flex-shrink-0">
        <img className="h-8 w-8" src={log_icon} alt="Your Company" />
      </div>
    </nav>
  );
};

export default Navbar;
