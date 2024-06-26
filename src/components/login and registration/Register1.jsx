import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineIdcard,
  AiOutlineHome,
  AiOutlineMobile,
  AiOutlineBank,
} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGenderless } from "react-icons/fa";
import logo from './logo.svg';  // Adjust the import as per your project structure
import './register.css';

const Step1 = ({ control }) => (
  <div className="flex flex-col items-center space-y-4">
    <div className="flex justify-center mb-8">
      <img src={logo} alt="Cooliewale Logo" className="w-24 h-24 rounded-full shadow-inner" />
    </div>
    <Controller
      name="firstName"
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
          <AiOutlineUser className="text-2xl" />
          <input {...field} type="text" placeholder="First Name" className="w-full bg-transparent outline-none text-lg text-gray-600" />
        </div>
      )}
    />
    <Controller
      name="lastName"
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
          <AiOutlineUser className="text-2xl" />
          <input {...field} type="text" placeholder="Last Name" className="w-full bg-transparent outline-none text-lg text-gray-600" />
        </div>
      )}
    />
    <Controller
      name="badgeId"
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
          <AiOutlineIdcard className="text-2xl" />
          <input {...field} type="text" placeholder="Badge ID" className="w-full bg-transparent outline-none text-lg text-gray-600" />
        </div>
      )}
    />
    <Controller
      name="age"
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
          <AiOutlineCalendar className="text-2xl" />
          <input {...field} type="number" placeholder="Age" className="w-full bg-transparent outline-none text-lg text-gray-600" />
        </div>
      )}
    />
    <Controller
      name="gender"
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
          <FaGenderless className="text-2xl" />
          <input {...field} type="text" placeholder="Gender" className="w-full bg-transparent outline-none text-lg text-gray-600" />
        </div>
      )}
    />
  </div>
);

const Step2 = ({ control }) => (
  <div className="flex flex-col items-center space-y-4">
    <div className="flex justify-center mb-8">
      <img src={logo} alt="Cooliewale Logo" className="w-24 h-24 rounded-full shadow-inner" />
    </div>
    <Controller
      name="address"
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
          <AiOutlineHome className="text-2xl" />
          <input {...field} type="text" placeholder="Address" className="w-full bg-transparent outline-none text-lg text-gray-600" />
        </div>
      )}
    />
    <Controller
      name="mobile"
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
          <AiOutlineMobile className="text-2xl" />
          <input {...field} type="tel" placeholder="Mobile No" className="w-full bg-transparent outline-none text-lg text-gray-600" />
        </div>
      )}
    />
    <Controller
      name="aadhar"
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
          <AiOutlineIdcard className="text-2xl" />
          <input {...field} type="text" placeholder="Aadhar Card Number" className="w-full bg-transparent outline-none text-lg text-gray-600" />
        </div>
      )}
    />
  </div>
);

const Step3 = ({ control }) => (
  <div className="flex flex-col items-center space-y-4">
    <div className="flex justify-center mb-8">
      <img src={logo} alt="Cooliewale Logo" className="w-24 h-24 rounded-full shadow-inner" />
    </div>
    <Controller
      name="accountNumber"
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
          <AiOutlineBank className="text-2xl" />
          <input {...field} type="text" placeholder="Account Number" className="w-full bg-transparent outline-none text-lg text-gray-600" />
        </div>
      )}
    />
    <Controller
      name="ifscCode"
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
          <AiOutlineBank className="text-2xl" />
          <input {...field} type="text" placeholder="IFSC Code" className="w-full bg-transparent outline-none text-lg text-gray-600" />
        </div>
      )}
    />
  </div>
);

const Step4 = ({ control }) => (
  <div className="flex flex-col items-center space-y-4">
    <div className="flex justify-center mb-8">
      <img src={logo} alt="Cooliewale Logo" className="w-24 h-24 rounded-full shadow-inner" />
    </div>
    <Controller
      name="password"
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-full shadow-inner">
          <RiLockPasswordLine className="text-2xl" />
          <input {...field} type="password" placeholder="Password" className="w-full bg-transparent outline-none text-lg text-gray-600" />
        </div>
      )}
    />
  </div>
);

const steps = [
  { component: Step1, label: "Tell us about yourself" },
  { component: Step2, label: "Contact Information" },
  { component: Step3, label: "Bank Information" },
  { component: Step4, label: "Set a Password" }
];

const MultiStepForm = () => {
  const { control, handleSubmit } = useForm();
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <div className="text-center text-lg font-semibold">{steps[step].label}</div>
        <div className="h-1 w-full bg-gray-200 rounded mt-2">
          <div className="h-full bg-blue-500 rounded" style={{ width: `${(step + 1) / steps.length * 100}%` }}></div>
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}  // Smooth transition with ease-in-out
        >
          {React.createElement(steps[step].component, { control })}
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between mt-6">
        {step > 0 && (
          <button type="button" onClick={prevStep} className="btn">
            <FaArrowLeft /> Back
          </button>
        )}
        {step <steps.length - 1 ? (
          <button type="button" onClick={nextStep} className="btn">
            Next <FaArrowRight />
          </button>
        ) : (
          <button type="submit" className="btn">
            Register
          </button>
        )}
      </div>
      <div className="text-center mt-6 text-gray-600">
        Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
      </div>
    </form>
  );
};

export default MultiStepForm;
