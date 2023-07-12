import React, { useState } from "react";

const OTPGenerationPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);

  const generateOTP = () => {
    // Here, you can implement your logic to generate the OTP and send it to the provided email address
    // For the sake of this example, let's assume the OTP is generated and received successfully
    setShowOTPInput(true);
  };

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  return (
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
          <button className="btn" onClick={generateOTP}>
            Generate OTP
          </button>
        </div>
      ) : (
        <div className="input-group otp-input">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOTPChange}
          />
        </div>
      )}
    </div>
  );
};

export default OTPGenerationPage;
