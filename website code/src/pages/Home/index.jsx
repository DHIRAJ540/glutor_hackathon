import React from "react";
import Profile from "../../components/Profile";
import Sidebar from "../../components/Sidebar";
import CircularProgress from "@mui/material/CircularProgress";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f2f3f8] min-h-screen min-w-screen flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full px-[32px] py-[40px]">
        <Profile />
        <div>
          <h1 className="text-[24px] font-bold mt-[10px]">Tracking Overview</h1>
          <p className="text-[#596168] text-[17px]">Check your tracking here</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white px-[30px] py-[20px] mt-[20px] w-[250px] mx-auto ">
              <p className="text-[#1E364D] text-[20px] font-bold   ">Sugar level</p>
              <p className="tracking-[.5rem] text-[#596168] text-[12px] mt-[5px]">TRACKING</p>
              <div className="relative max-w-max mt-[1.5rem] mx-auto">
                <CircularProgress value={75} size={100} color="success" variant="determinate" />
                <p className="text-[#1E364D] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  font-bold text-[2rem] leading-[2rem] mb-[1rem]  ">
                  129
                </p>
              </div>
              <div>
                <p className="text-[#596168] text-[14px] mt-[10px] text-center">
                  Non-diabetic glucose <br /> Diabetes score
                </p>
              </div>
              <div className="mt-[1.5rem] mx-auto flex items-center px-[18px] py-[8px] bg-[#CEEBE5] max-w-max rounded-sm  ">
                <div className="bg-[#CEEBE5] border-[2px] border-[#3CCD9A] w-[12px] h-[12px] rounded-full mr-[10px] "></div>
                <p className="text-[14px]">Excellent</p>
              </div>
              <div className="h-[1px] mt-[0.75rem] w-full bg-gray-200"></div>
              <div className="mt-[0.75rem] max-w-max mx-auto cursor-pointer" onClick={() => navigate("/details")}>
                <div className="flex items-center">
                  <p className="text-[14px] text-[#596168] ">Explore More</p>
                  <AiOutlineRight size={16} color="#1CBBD5" className="ml-[5px]" />
                </div>
              </div>
            </div>
            <div className="bg-white px-[30px] py-[20px] mt-[20px] w-[250px] mx-auto ">
              <p className="text-[#1E364D] text-[20px] font-bold   ">Acetone</p>
              <p className="tracking-[.5rem] text-[#596168] text-[12px] mt-[5px]">TRACKING</p>
              <div className="relative max-w-max mt-[1.5rem] mx-auto">
                <CircularProgress value={75} size={100} color="warning" variant="determinate" />
                <p className="text-[#1E364D] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  font-bold text-[2rem] leading-[2rem] mb-[1rem]  ">
                  305
                </p>
              </div>
              <div className="min-h-[42px]">
                <p className="text-[#596168] text-[14px] mt-[10px] text-center">Acetone score</p>
              </div>
              <div className="mt-[1.5rem] mx-auto flex items-center px-[18px] py-[8px] bg-[#CEEBE5] max-w-max rounded-sm  ">
                <div className="bg-[#CEEBE5] border-[2px] border-[#3CCD9A] w-[12px] h-[12px] rounded-full mr-[10px] "></div>
                <p className="text-[14px]">Normal</p>
              </div>
              <div className="h-[1px] mt-[0.75rem] w-full bg-gray-200"></div>
              <div className="mt-[0.75rem] max-w-max mx-auto cursor-pointer">
                <div className="flex items-center" onClick={() => navigate("/details")}>
                  <p className="text-[14px] text-[#596168] ">Explore More</p>
                  <AiOutlineRight size={16} color="#1CBBD5" className="ml-[5px]" />
                </div>
              </div>
            </div>
            <div className="bg-white px-[30px] py-[20px] mt-[20px] w-[250px h-[382.5px] mx-auto flex flex-col justify-between   ">
              <div>
                <p className="text-[#1E364D] text-[20px] font-bold   ">Symptoms</p>
                <p className="tracking-[.5rem] text-[#596168] text-[12px] mt-[5px]">Suggestions</p>
                <div className="px-[15px] py-[10px] bg-[#9795F3] rounded-sm mt-[1.5rem]">
                  <p className="text-[28px] text-[#fff] font-bold  ">0</p>
                  <p className="text-[16px] text-[#fff] ">Symptoms</p>
                </div>
                <div className="px-[15px] py-[10px] bg-[#9795F3] rounded-sm mt-[.5rem]">
                  <p className="text-[28px] text-[#fff] font-bold  ">2</p>
                  <p className="text-[16px] text-[#fff] ">Suggestions</p>
                </div>
                <div className="mt-[1rem] flex flex-col gap-1">
                  <div className="flex items-center ">
                    <div className="rounded-full border-[2px] border-[#9795F3] w-[10px] h-[10px] "></div>
                    <p className="text-[12px] font-semibold ml-[5px]">Drink enough water</p>
                  </div>
                  <div className="flex items-center ">
                    <div className="rounded-full border-[2px] border-[#9795F3] w-[10px] h-[10px] "></div>
                    <p className="text-[12px] font-semibold ml-[5px]">Check insulin regularly</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white px-[30px] py-[20px] mt-[20px] w-[250px] mx-auto ">
              <p className="text-[#1E364D] text-[20px] font-bold   ">Recent test</p>
              <p className=" text-[#596168] text-[12px] mt-[5px]">09:30 PM 23-03-2023</p>
              <div className="px-[15px] py-[10px] bg-[#DBA370] rounded-sm mt-[.5rem]">
                <p className="text-[28px] text-[#fff] font-bold  ">135</p>
                <p className="text-[16px] text-[#fff] ">Sugar level</p>
              </div>
              <div className="px-[15px] py-[10px] bg-[#EC8383] rounded-sm mt-[.5rem]">
                <p className="text-[28px] text-[#fff] font-bold  ">343</p>
                <p className="text-[16px] text-[#fff] ">Acetone level</p>
              </div>

              <div className="mt-[1.5rem] mx-auto flex items-center px-[18px] py-[8px] bg-[#CEEBE5] max-w-max rounded-sm  ">
                <div className="bg-[#CEEBE5] border-[2px] border-[#3CCD9A] w-[12px] h-[12px] rounded-full mr-[10px] "></div>
                <p className="text-[14px]">Excellent</p>
              </div>
              <div className="h-[1px] mt-[0.75rem] w-full bg-gray-200"></div>
              <div className="mt-[0.75rem] max-w-max mx-auto cursor-pointer">
                <div className="flex items-center" onClick={() => navigate("/details")}>
                  <p className="text-[14px] text-[#596168] ">Explore More</p>
                  <AiOutlineRight size={16} color="#1CBBD5" className="ml-[5px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:relative   mt-5 font-bold ">
          <p>
            *This is only the representation of our Hardware device(Glutor) works and how it collects the data and says
            whether you are Diabetic or not.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
