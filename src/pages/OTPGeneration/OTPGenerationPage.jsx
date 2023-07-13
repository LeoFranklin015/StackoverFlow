import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GenerateOTP } from "../../actions/OTP";
import { generateOTP } from "../../api";
import "./OTPGenerationPage.css";
const OTPGenerationPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);

  const generateotp = async () => {
    const status = await generateOTP({ userId: user.result._id, email });
    console.log(status);
    setShowOTPInput(true);
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
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOTPChange}
            />
            <button>Validate</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPGenerationPage;
