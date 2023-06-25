import React from "react";
import { Link, useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import logo from "../../assets/stackoverflow.png";
import search from "../../assets/search.png";

import Avatar from "../../components/Avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import "./Navbar.css";
import { useEffect } from "react";
const Navbar = () => {
  const dispatch = useDispatch();
  var user = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken * 1000 < new Date().getTime()) {
        handleLogut();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  const handleLogut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };
  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-logo nav-btn">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Seacrh..." />
          <img src={search} alt="search" width="18" className="search-icon" />
        </form>
        {user === null ? (
          <>
            <Link to="/Auth" className="nav-item nav-link">
              Log in
            </Link>
            {/* <Link to ='/Auth'>SignIn</Link> */}
          </>
        ) : (
          <>
            <Avatar
              backgroundColor="#000000"
              px="14px"
              py="10px"
              borderRadius="50%"
              color="lightblue"
            >
              <Link
                to="/Profile"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {user.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>
            <button className="nav-link" onClick={handleLogut}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
