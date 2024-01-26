import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import { NavLink } from "react-router-dom";

const Register = () => {
  const history = useNavigate();
  const initialFormData = Object.freeze({
    email: "",
    phone: "",
    password1: "", // Field name for password
    password2: "", // Field name for password confirmation
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });

    if (e.target.name === "password2") {
      const match = e.target.value === formData.password1;
      setPasswordsMatch(match);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordsMatch) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    axiosInstance
      .post(`user/create/`, {
        email: formData.email,
        phone: formData.phone,
        password1: formData.password1,
        password2: formData.password2,
      })
      .then((res) => {
        history("/dashboard");
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        setErrorMessage("Phone or Email is already taken.");
      });
  };

  return (
    <section className="overflow-y-hidden bg-[#011730]">
      <div className="grid-cols-3 h-screen w-full">
        <div className="bg-gray-800 relative flex w-full h-full mr-9 mt-3  flex-col justify-center ">
          <form className="max-w-[400px] w-full  mx-auto rounded-lg  bg-[#011730] p-8 px-8">
            <h2 className="text-3xl text-white font-bold text-center">
              Sign Up
            </h2>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}
            {!passwordsMatch && (
              <p className="text-red-500 text-center">
                Passwords do not match.
              </p>
            )}
            <div className="flex flex-col text-gray-400 py-2">
              <label>Email</label>
              <input
                className="rounded-lg bg-gray-800 mt-2 p-2  focus:bg-gray-800 focus:outline-none"
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>phone</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-white focus:bg-gray-800 focus:outline-none"
                variant="outlined"
                type="text"
                id="phone"
                label="phone"
                name="phone"
                autoComplete="phone"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                name="password1" // Field name for password
                label="Password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col text-gray-400 py-2">
              <label>Confirm Password</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                name="password2" // Field name for password confirmation
                label="Confirm Password"
                id="passwordConfirmation"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center text-gradient font-bold">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
            </div>
            <button
              className="w-full my-5 py-2 bg-teal-500 shadow-lg text-gradient hover:animate-pulse shadow-teal-500/50 text-white font-bold rounded-lg"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <NavLink to={"/login"} className="link hover:animate-bounce">
              <div className="flex items-center text-gradient font-bold">
                <h1 className=" font-bold ">
                  Already have an account? Sign in
                </h1>
              </div>
            </NavLink>
          </form>
        </div>
        {/* gradient start */}
        <div className="absolute z-[999] duration-300 w-[20%] h-[10%]  pink__gradient" />
        <div className="absolute z-[300] w-[10%] h-[10%] duration-300 rounded-full yellow__gradient bottom-40 " />
        <div className="absolute z-[100] w-[10%] h-[10%]  duration-300  blue__gradient animate-pulse" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Register;
