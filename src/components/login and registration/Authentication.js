// src/Authentication.js
import React, { useState } from 'react';
import MobileLogin from './LoginWithNumber';
import OtpForm from './otpform';

const Authentication = () => {
  const [verificationId, setVerificationId] = useState(null);

  const handleSwitchToEmailLogin = () => {
    setVerificationId(null);
  };

  return (
    <div>
      {!verificationId ? (
        <MobileLogin setVerificationId={setVerificationId} />
      ) : (
        <OtpForm verificationId={verificationId} />
      )}
    </div>
  );
};

export default Authentication;
