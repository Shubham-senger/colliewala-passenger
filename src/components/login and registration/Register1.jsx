import React from "react";
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineIdcard,
} from "react-icons/ai";
import { FaGenderless } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { v4 as uuid } from 'uuid';
import { Link } from "react-router-dom";
import logo from './logo.svg';

const Register1 = () => {
  const coolieId = uuid();

  return (
    <div className="w-full max-w-[430px] h-auto sm:h-[700px] p-8 sm:p-[60px_35px_35px_35px] rounded-[40px] bg-[#ecf0f3] shadow-[13px_13px_20px_#cbced1,-13px_-13px_20px_#ffffff] mx-auto my-4 sm:my-0 overflow-auto">
      
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Cooliewale Logo" className="w-24 h-24 rounded-full shadow-inner" />
        </div>
        <div className="text-center text-2xl font-semibold mb-6">Register User</div>
        <div className="space-y-6">
          <div>
            <input type="hidden" value={coolieId}/>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-[#ecf0f3] rounded-full shadow-inner">
            <AiOutlineUser className="text-2xl"/>
            <input type="text" placeholder="First Name" className="w-full bg-transparent outline-none text-lg text-gray-600"/>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-[#ecf0f3] rounded-full shadow-inner">
            <AiOutlineUser className="text-2xl"/>
            <input type="text" placeholder="Last Name" className="w-full bg-transparent outline-none text-lg text-gray-600"/>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-[#ecf0f3] rounded-full shadow-inner">
            <AiOutlineIdcard className="text-2xl"/>
            <input type="text" placeholder="Badge ID" className="w-full bg-transparent outline-none text-lg text-gray-600"/>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-[#ecf0f3] rounded-full shadow-inner">
            <AiOutlineCalendar className="text-2xl"/>
            <input type="number" placeholder="Age" className="w-full bg-transparent outline-none text-lg text-gray-600"/>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-[#ecf0f3] rounded-full shadow-inner">
            <FaGenderless className="text-2xl"/>
            <input type="text" placeholder="Gender" className="w-full bg-transparent outline-none text-lg text-gray-600"/>
          </div>
        </div>
        <Link to="/register/2" className="flex justify-center mt-6">
          <button className="w-full h-14 rounded-full bg-[#EC1C24] text-white font-semibold text-lg flex items-center justify-center transition duration-500 shadow-md hover:bg-[#7f1734] active:bg-[#92000A]">
            Next <FaArrowRightLong className="ml-2"/>
          </button>
        </Link>
        <div className="text-center mt-6 text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </div>
      
    </div>
  );
};

export default Register1;
