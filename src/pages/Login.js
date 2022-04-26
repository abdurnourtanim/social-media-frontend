import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();

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
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              required
              placeholder="Password"
              type="password"
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button type="submit" className="loginRegisterButton">
              <Link to="/signup">Create a New Account</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
