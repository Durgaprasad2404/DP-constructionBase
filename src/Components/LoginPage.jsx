import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Loader from "./Loader/Loader";

function LoginPage() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    // Simulate successful login for demonstration
    setIsLoading(true); // Show loader
    setTimeout(() => {
      setIsLoading(false); // Hide loader
      window.alert("Login Success");
      setSuccessMsg("Login successful!");
      Cookies.set("jwtoken", "dummyToken", {
        expires: new Date(Date.now() + 25892000000),
      });
      history("/user");

      // Clear form fields after successful login
      setEmail("");
      setPassword("");
    }, 1000); // Simulate network delay

    setErrorMsg(""); // Clear error message if validation passed
  };

  return (
    <div className="loginBG">
      {isLoading && <Loader />}
      <div className="main">
        <h4>Enter your login credentials</h4>
        <form onSubmit={handleSubmit} method="POST" id="login">
          {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
          {successMsg && <div style={{ color: "green" }}>{successMsg}</div>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="login-input"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                className="login-input"
                id="password"
                name="password"
                placeholder="Enter your Password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="true"
              />
              <i
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </i>
            </div>
          </div>
          <div className="wrap">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </form>
        <p>
          Not registered?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
