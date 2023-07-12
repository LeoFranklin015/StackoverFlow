import React from "react";
import { useSelector } from "react-redux";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Bot from "../Bot/Bot";

const ChatBot = () => {
  const user = useSelector((state) => state.authReducer.authData);
  console.log(user);
  return (
    <div>
      <LeftSidebar />
      {!user.result.verified ? (
        <Bot />
      ) : (
        <>
          <h1>no</h1>
          <h1>no</h1>
          <h1>no</h1>
          <h1>no</h1>
        </>
      )}
    </div>
  );
};

export default ChatBot;
