import React from "react";
import "./Auth.css";
import AboutAuth from "./AboutAuth";
import { useState } from "react";
import icon from "../../assets/favicon.ico";
import { signup, login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [Issigned, setIssigned] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIssigned(!Issigned);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter the email and password");
    }
    if (Issigned) {
      if (!name) {
        alert("Enter the name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
    // console.log({ name, email, password });
  };
  return (
    <div className="Auth-section">
      {Issigned && <AboutAuth />}
      <div className="Auth-container">
        {!Issigned && <img src={icon} alt="Logo" className="auth-logo" />}

        <form onSubmit={handleSubmit}>
          {Issigned && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <div className="pass">
              <h4>password</h4>
              {!Issigned ? (
                <p style={{ color: "#007ac6" }}>forgot password?</p>
              ) : null}
            </div>

            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => SetPassword(e.target.value)}
            />
            {Issigned && (
              <p className="terms">
                Passwords must contain at least eight <br />
                characters, including at least 1<br /> letter and 1 number.
              </p>
            )}
          </label>
          {Issigned && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "12px" }}>
                Opt-in to receive occasional product
                <br />
                updates, user research invitations,
                <br /> company announcements, and digests.
              </p>
            </label>
          )}

          <button type="submit" className="auth-btn">
            {Issigned ? "sign up" : "Log in"}
          </button>
          {Issigned && (
            <p className="terms">
              By clicking “Sign up”, you agree to our{" "}
              <span>
                terms of <br /> service
              </span>
              and acknowledge that you have read <br /> and understand our
              <span>privacy policy</span> and{" "}
              <span>
                code of <br /> conduct
              </span>
              .
            </p>
          )}
        </form>
        <p>
          {!Issigned ? "Don't have an account?" : "already have an account ?"}
          <button type="button" className="switch-btn" onClick={handleSwitch}>
            {Issigned ? "Log in " : "Sign up!"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
