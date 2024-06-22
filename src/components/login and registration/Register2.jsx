import React from "react";
import {
  AiOutlineHome,
  AiOutlineMobile,
  AiOutlineIdcard,
  AiOutlineBank,
} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaArrowLeftLong } from "react-icons/fa6";
import { v4 as uuid } from 'uuid';
import logo from './logo.svg';
import { Link } from "react-router-dom";

const Register2 = () => {
  const coolieId = uuid();

  return (
    <div className="w-full max-w-[430px] h-auto sm:h-[750px] p-8 sm:p-[60px_35px_35px_35px] rounded-[40px] bg-[#ecf0f3] shadow-[13px_13px_20px_#cbced1,-13px_-13px_20px_#ffffff] mx-auto my-4 sm:my-0 overflow-auto">
      
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Cooliewale Logo" className="w-24 h-24 rounded-full shadow-inner" />
        </div>
        <div className="text-center text-3xl font-bold mb-6">Register User</div>
        <div className="space-y-6">
          <div>
            <input type="hidden" value={coolieId} />
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
            <AiOutlineHome className="text-2xl"/>
            <input type="text" placeholder="Address" className="w-full bg-transparent outline-none text-lg text-gray-600"/>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
            <AiOutlineMobile className="text-2xl"/>
            <input type="tel" placeholder="Mobile No" className="w-full bg-transparent outline-none text-lg text-gray-600"/>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
            <AiOutlineIdcard className="text-2xl"/>
            <input type="text" placeholder="Aadhar Card Number" className="w-full bg-transparent outline-none text-lg text-gray-600"/>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
            <AiOutlineBank className="text-2xl"/>
            <input type="text" placeholder="Account Number" className="w-full bg-transparent outline-none text-lg text-gray-600"/>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
            <AiOutlineBank className="text-2xl"/>
            <input type="text" placeholder="IFSC Code" className="w-full bg-transparent outline-none text-lg text-gray-600"/>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
            <RiLockPasswordLine className="text-2xl"/>
            <input type="password" placeholder="Password" className="w-full bg-transparent outline-none text-lg text-gray-600"/>
          </div>
        </div>
        <Link to="/">
          <button className="w-full h-14 mt-6 rounded-full bg-red-600 text-white font-semibold text-lg flex items-center justify-center transition duration-500 shadow-md hover:bg-red-700 active:bg-red-800">
            Register
          </button>
        </Link>
        <Link to="/register/1" className="flex justify-center mt-4">
          <button className="w-full h-14 rounded-full bg-red-600 text-white font-semibold text-lg flex items-center justify-center transition duration-500 shadow-md hover:bg-red-700 active:bg-red-800">
            <FaArrowLeftLong className="mr-2"/> Back
          </button>
        </Link>
        <div className="text-center mt-6 text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </div>
      
    </div>
  );
};

export default Register2;
