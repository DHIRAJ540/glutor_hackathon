import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selectedNav, setSelectedNav] = useState("Dashboard");
  const navigate = useNavigate();

  const navList = [
    {
      title: "Dashboard",
      logo: <BiHomeAlt2 size={24} color={selectedNav === "Dashboard" ? "#1CBBD5" : "#91A0B7"} />,
    },
    {
      title: "Report",
      logo: <HiOutlineDocumentReport size={24} color={selectedNav === "Report" ? "#1CBBD5" : "#91A0B7"} />,
    },
    {
      title: "Support",
      logo: <BiSupport size={24} color={selectedNav === "Support" ? "#1CBBD5" : "#91A0B7"} />,
    },
  ];

  return (
    <div className="w-[300px] bg-white p-[2rem] min-h-screen hidden md:block">
      <div className="flex items-center ">
        <img src={logo} alt="logo" className="w-[4rem] object-contain " />
        <p className="ml-2 text-xl font-bold">Glutor</p>
      </div>
      <div className="mt-[50px]">
        {navList.map((item) => (
          <div
            className="flex items-center cursor-pointer mb-[32px] "
            onClick={() => {
              setSelectedNav(item.title);
              navigate("/");
            }}
          >
            {item.logo}
            <p className={`ml-[16px] ${selectedNav === item.title ? "font-bold text-black" : "text-gray-600"} `}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
