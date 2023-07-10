import React from "react";
import "./LeftSidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import Globe from "../../assets/globe.png";
import { useSelector } from "react-redux";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.authReducer.authData);
  const handleSocio = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Login first to enter socio");
      navigate("/Auth/");
    } else {
      navigate("/socio");
    }
  };
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClassName="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink
            to="/Questions"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "30px" }}
          >
            <img src={Globe} alt="globe" className="globe" />
            <p style={{ paddingLeft: "10px" }}>Questions</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "30px" }}
          >
            <p style={{ paddingLeft: "25px" }}>Tags</p>
          </NavLink>
          <NavLink
            to="/Users"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "30px" }}
          >
            <p style={{ paddingLeft: "25px" }}>Users</p>
          </NavLink>
          <NavLink
            to="/Socio"
            className="side-nav-links"
            activeClassName="active"
            style={{ paddingLeft: "30px" }}
            onClick={handleSocio}
          >
            <p style={{ paddingLeft: "25px" }}>Socio</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
