import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from './logo.svg';
import OtpForm from "./otpform";

const MobileLogin = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleMobileSubmit = (event) => {
    event.preventDefault();

    // Basic mobile number validation
    if (!/^\d{10}$/.test(mobileNumber)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Simulate sending OTP
    console.log('Mobile number submitted:', mobileNumber);
    console.log('Sending OTP to:', mobileNumber);

    // Hide mobile form and show OTP container
    setIsOtpSent(true);
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    console.log('OTP submitted:', otp);
    // Handle OTP verification logic here
  };

  return (
    <div className="w-full max-w-[430px] h-[700px] p-[60px_35px_35px_35px] rounded-[40px] bg-[#ecf0f3] shadow-[13px_13px_20px_#cbced1,-13px_-13px_20px_#ffffff] mx-auto my-8">
      <div className="flex justify-center">
        <img src={logo} alt="Cooliewale Logo" className="w-[100px] h-[100px] rounded-full shadow-[0px_0px_2px_#5f5f5f,0px_0px_0px_5px_#ecf0f3,8px_8px_15px_#a7aaaf,-8px_-8px_15px_#ffffff]" />
      </div>
      <div className="text-center text-[28px] pt-[24px] tracking-[0.5px]">Passenger Login</div>
      <div id="login-container">
        
          <form id="mobile-form" onSubmit={handleMobileSubmit} className="mt-10">
            <div className="text-center mb-4">
              <p>Enter your Mobile Number</p>
              <p>A verification code will be sent to your phone.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-[30px] rounded-[25px] shadow-inner shadow-[inset_8px_8px_8px_#cbced1,inset_-8px_-8px_8px_#ffffff] flex items-center">
                <i className="fas fa-mobile-alt text-[#999] mx-6"></i>
                <input
                  type="tel"
                  className="border-none outline-none bg-none text-[18px] text-[#555] p-[20px_10px_20px_5px]"
                  placeholder="9876543210"
                  maxLength="10"
                  required
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
            </div>
            <Link to="/otpform">
            <button className="outline-none border-none cursor-pointer w-full h-[60px] rounded-[30px] text-[20px] font-bold text-white bg-[#EC1C24] shadow-[3px_3px_8px_#b1b1b1,-3px_-3px_8px_#ffffff] transition duration-500 hover:bg-[#7f1734] active:bg-[#92000A]">
              Login with number
            </button>
            </Link>
          </form>
        
      </div>
      
      <Link to="/login" className="block mt-4">
        <button className="outline-none border-none cursor-pointer w-full h-[60px] rounded-[30px] text-[20px] font-bold text-white bg-[#EC1C24] shadow-[3px_3px_8px_#b1b1b1,-3px_-3px_8px_#ffffff] transition duration-500 hover:bg-[#7f1734] active:bg-[#92000A] flex items-center justify-center">
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </Link>
      <div className="pt-5 text-center">
        <a href="/forgot" className="text-[#aaa] text-[15px] no-underline">Forgot password?</a> or{" "}
        <Link to="/register/1" className="text-[#aaa] text-[15px] no-underline">Sign up</Link>
      </div>
    </div>
  );
};

export default MobileLogin;
