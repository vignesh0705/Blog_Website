"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Password match check
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      alert("Email already registered. Please login.");
      return;
    }

    // Save user to localStorage
    const newUser = { name, email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    alert("Signup successful!");
    router.push("/loginA"); // Redirect to login page
  };

  return (
    <form className="login-form" onSubmit={handleSignup}>
      <h1 className="login-title">Sign Up</h1>
      <p className="login-subtitle">Create a new account</p>

      <div className="input-group">
        <span className="input-icon">&#128100;</span>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="login-input"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <span className="input-icon">&#9993;</span>
        <input
          type="email"
          name="email"
          placeholder="Email id"
          className="login-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <span className="input-icon">&#128274;</span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="login-input"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <span className="input-icon">&#128274;</span>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="login-input"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="login-button">Sign Up</button>

      <p className="login-footer">
        Already have an account?{" "}
        <a href="/loginA" style={{ color: "#e63946", textDecoration: "underline" }}>Login</a>
      </p>
    </form>
  );
};

export default SignupPage;
