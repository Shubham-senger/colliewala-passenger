// src/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Login({ onSwitchToMobileLogin, isActive }) {
  return (
    <>
      <div className="w-full max-w-[430px] h-auto sm:h-[700px] p-8 sm:p-[60px_35px_35px_35px] rounded-[40px] bg-[#ecf0f3] shadow-[13px_13px_20px_#cbced1,-13px_-13px_20px_#ffffff] mx-auto my-4 sm:my-0">
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Cooliewale Logo"
            className="w-[100px] h-[100px] rounded-full shadow-[0px_0px_2px_#5f5f5f,0px_0px_0px_5px_#ecf0f3,8px_8px_15px_#a7aaaf,-8px_-8px_15px_#ffffff]"
          />
        </div>
        <div className="text-center text-[28px] pt-[24px] tracking-[0.5px]">Porters Login</div>
        <div className="flex justify-center mt-4">
          <button
            onClick={onSwitchToMobileLogin}
            className={`outline-none border-none cursor-pointer w-full max-w-[200px] h-[40px] rounded-[20px] text-[16px] font-bold text-white shadow-[3px_3px_8px_#b1b1b1,-3px_-3px_8px_#ffffff] transition duration-500 mr-4 ${
              isActive ? 'bg-[#EC1C24]' : 'bg-[#7f1734] hover:bg-[#7f1734] active:bg-[#92000A]'
            }`}
          >
            Login with Number
          </button>
          <button className="outline-none border-none cursor-pointer w-full max-w-[200px] h-[40px] rounded-[20px] text-[16px] font-bold text-white bg-[#EC1C24] shadow-[3px_3px_8px_#b1b1b1,-3px_-3px_8px_#ffffff] transition duration-500 hover:bg-[#7f1734] active:bg-[#92000A]">
            Login
          </button>
        </div>
        <div className="fields w-full pt-10 sm:pt-[75px]">
          <div className="mb-8 sm:mb-[30px] rounded-[25px] shadow-inner shadow-[inset_8px_8px_8px_#cbced1,inset_-8px_-8px_8px_#ffffff] flex items-center">
            <svg
              fill="#999"
              viewBox="0 0 1024 1024"
              className="h-[22px] ml-[25px] mr-[10px]"
            >
              <path
                className="path1"
                d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.09c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.09c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"
              ></path>
            </svg>
            <input
              type="text"
              className="border-none outline-none bg-none text-[18px] text-[#555] p-[20px_10px_20px_5px] w-full"
              placeholder="username"
            />
          </div>
          <div className="mb-8 sm:mb-[30px] rounded-[25px] shadow-inner shadow-[inset_8px_8px_8px_#cbced1,inset_-8px_-8px_8px_#ffffff] flex items-center">
            <svg
              fill="#999"
              viewBox="0 0 1024 1024"
              className="h-[22px] ml-[25px] mr-[10px]"
            >
              <path
                className="path1"
                d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"
              ></path>
            </svg>
            <input
              type="password"
              className="border-none outline-none bg-none text-[18px] text-[#555] p-[20px_10px_20px_5px] w-full"
              placeholder="password"
            />
          </div>
        </div>
        <button className="outline-none border-none cursor-pointer w-full h-[60px] rounded-[30px] text-[20px] font-bold text-white bg-[#EC1C24] shadow-[3px_3px_8px_#b1b1b1,-3px_-3px_8px_#ffffff] transition duration-500 hover:bg-[#7f1734] active:bg-[#92000A]">
          Login
        </button>
        <div className="pt-5 text-center">
          <a href="/forgot" className="text-[#aaa] text-[15px] no-underline">
            Forgot password?
          </a>{" "}
          or{" "}
          <Link to="/register" className="text-[#aaa] text-[15px] no-underline">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
