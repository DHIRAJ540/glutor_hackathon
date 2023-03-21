import React from "react";
import logo from "../assets/logo.png";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#E6E6E4] px-[1.5rem] py-[.8rem] rounded-sm">
      <img src={logo} alt="logo" className="w-[5rem] object-contain" />
      <Profile />
    </div>
  );
};

export default Navbar;
