import React, { useState } from "react";
import { useSelector } from "react-redux";

import { CheckOTP, generateOTP } from "../../api";
import "./OTPGenerationPage.css";
const OTPGenerationPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);

  const generateotp = async () => {
    const status = await generateOTP({ userId: user.result._id, email });
    if (status.data.status) {
      setShowOTPInput(true);
    }
  };
  const validateOTP = async () => {
    const status = await CheckOTP({ userId: user.result._id, otp });
    console.log(status.data.data);
  };

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="otpPage">
      <div className="container">
        <h2>OTP Generation</h2>
        {!showOTPInput ? (
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={generateotp}>Generate OTP</button>
          </div>
        ) : (
          <div className="input-group ">
            <p>
              The OTP has been sent to your mail: <b>{email}</b>
            </p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOTPChange}
            />
            <p>Haven't recieved the otp yet? Resend OTP</p>
            <button onClick={validateOTP}>Validate</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPGenerationPage;
