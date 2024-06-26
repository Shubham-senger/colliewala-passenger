import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, PhoneAuthProvider, signInWithCredential, RecaptchaVerifier, signInWithPhoneNumber } from '../../firebase/firebase.js';

const OtpForm = ({ verificationId, mobileNumber }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [newVerificationId, setNewVerificationId] = useState(verificationId);
  const navigate = useNavigate();

  const handleOtpSubmit = (event) => {
    event.preventDefault();

    const credential = PhoneAuthProvider.credential(newVerificationId, otp);
    signInWithCredential(auth, credential)
      .then((result) => {
        console.log("User signed in successfully:", result.user);
        navigate('/');  // Redirect to the home page upon successful sign-in
      })
      .catch((error) => {
        console.error('Error signing in:', error);
        setError('Incorrect OTP. Please try again.');
      });
  };

  const resendOtp = () => {
    // Setup reCAPTCHA
    const setupRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      });
    };

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, mobileNumber, appVerifier)
      .then((confirmationResult) => {
        alert('A new OTP has been sent to your phone.');
        setNewVerificationId(confirmationResult.verificationId);
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
        alert('Failed to send OTP. Please try again.');
      });
  };

  useEffect(() => {
    const form = document.getElementById("otp-form");
    const inputs = Array.from(form.querySelectorAll("input[type=text]"));
    const submit = form.querySelector("button[type=submit]");

    const handleKeyDown = (e) => {
      const index = inputs.indexOf(e.target);

      if (!/^[0-9]{1}$/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab" && !e.metaKey) {
        e.preventDefault();
      }

      if ((e.key === "Delete" || e.key === "Backspace") && e.target.value === "") {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }
    };

    const handleInput = (e) => {
      const { target } = e;
      const index = inputs.indexOf(target);

      if (target.value) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        } else {
          submit.focus();
        }
      }
    };

    const handleFocus = (e) => {
      e.target.select();
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData("text");
      if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
        return;
      }
      const digits = text.split("");
      inputs.forEach((input, index) => (input.value = digits[index]));
      submit.focus();
    };

    inputs.forEach((input) => {
      input.addEventListener("input", handleInput);
      input.addEventListener("keydown", handleKeyDown);
      input.addEventListener("focus", handleFocus);
      input.addEventListener("paste", handlePaste);
    });

    // Cleanup event listeners on component unmount
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("input", handleInput);
        input.removeEventListener("keydown", handleKeyDown);
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("paste", handlePaste);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex justify-center">
          <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
            <header className="mb-8">
              <h1 className="text-2xl font-bold mb-1">
                Mobile Phone Verification
              </h1>
              <p className="text-[15px] text-slate-500">
                Enter the 6-digit verification code that was sent to your phone number.
              </p>
            </header>
            {error && <p className="text-red-500">{error}</p>}
            <form id="otp-form" onSubmit={handleOtpSubmit}>
              <div className="flex items-center justify-center gap-3">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-red-400 focus:ring-2 focus:ring-redfocus:ring-2 focus:ring-red-100"
                    maxLength="1"
                    value={otp[index] || ''}
                    onChange={(e) => {
                      const newOtp = [...otp];
                      newOtp[index] = e.target.value;
                      setOtp(newOtp.join(''));
                    }}
                  />
                ))}
              </div>
              <div className="max-w-[260px] mx-auto mt-4">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-red-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-red-950/10 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-red-300 transition-colors duration-150"
                >
                  Verify Account
                </button>
              </div>
            </form>
            <div className="text-sm text-slate-500 mt-4">
              Didn't receive code?{" "}
              <a
                className="font-medium text-red-500 hover:text-#EC1C24-600 cursor-pointer"
                onClick={resendOtp}
              >
                Resend
              </a>
            </div>
            <div id="recaptcha-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
