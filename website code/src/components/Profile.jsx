import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="w-[100%] flex justify-end">
      <div className="flex items-center">
        <div className="text-right">
          <p>Dhiraj</p>
          <p className="text-gray-600 text-sm">1234123412</p>
        </div>
        <div className="flex items-center justify-center bg-gray-300 rounded-md ml-[10px] h-[3rem] w-[3rem] ">
          <BsFillPersonFill size={24} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
