import React from "react";
import { useLocation } from "react-router-dom";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./Users.css";
import UserList from "./UserList";
const Users = () => {
  const location = useLocation();

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        {location.pathname === "/Users" ? <UserList /> : <></>}
      </div>
    </div>
  );
};

export default Users;
