import React from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              required
              placeholder="Username"
              type="text"
              className="loginInput"
            />
            <input
              required
              placeholder="Email"
              type="email"
              className="loginInput"
            />
            <input
              required
              placeholder="Password"
              type="password"
              minLength="6"
              className="loginInput"
            />
            <input
              required
              placeholder="Password Again"
              type="password"
              minLength="6"
              className="loginInput"
            />
            <button type="submit" className="loginButton">
              Sign Up
            </button>
            <button className="loginRegisterButton">
              <Link to="/login">Log into Account</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
