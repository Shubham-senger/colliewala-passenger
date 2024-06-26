// src/MultiStepLogin.js
import React, { useState } from 'react';
import Login from '../components/login and registration/Login.jsx';
import MobileLogin from '../components/login and registration/LoginWithNumber.jsx';
import Social from '../components/login and registration/Social.jsx';
import Authentication from '../components/login and registration/Authentication.js';

const MultiStepLogin = () => {
  const [step, setStep] = useState(0);

  const handleSwitchToMobileLogin = () => {
    setStep(1);
  };

  const handleSwitchToEmailLogin = () => {
    setStep(0);
  };

  return (
    <div className="App">
      <Social />
      {step === 0 && <Login onSwitchToMobileLogin={handleSwitchToMobileLogin} isActive={step === 0} />}
      {step === 1 && <Authentication onSwitchToEmailLogin={handleSwitchToEmailLogin} isActive={step === 1} />}
    </div>
  );
};

export default MultiStepLogin;
