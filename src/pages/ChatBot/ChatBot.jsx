import React, { useState } from "react";
import { useSelector } from "react-redux";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Bot from "../Bot/Bot";
import OTPGenerationPage from "../OTPGeneration/OTPGenerationPage";

const ChatBot = () => {
  const user = useSelector((state) => state.authReducer.authData);
  const [verified, setVerified] = useState(user.result.verified);
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-3">
        {verified ? <Bot /> : <OTPGenerationPage setVerified={setVerified} />}
      </div>
    </div>
  );
};

export default ChatBot;
