import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isStrongPassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { Username, email, password } = formData;

    // Basic validation
    if (!Username || !email || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    // Password strength validation
    if (!isStrongPassword(password)) {
      setErrorMsg(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    // Clear error message if validation passed
    setErrorMsg("");
    setSuccessMsg("Form validation passed! (No API call will be made)");

    // Clear form fields after successful validation
    setFormData({
      Username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} method="POST" id="register">
        {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
        {successMsg && <div style={{ color: "green" }}>{successMsg}</div>}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="Username"
            value={formData.Username}
            onChange={handleInputChange}
            autoComplete="true"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="true"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="true"
              required
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
        <button type="submit">Register</button>
        <p>
          If registered?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
