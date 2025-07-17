"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "admin@example.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "admin");
      alert("Admin login successful!");
      router.push("/blogB");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "user");
      localStorage.setItem("currentUser", foundUser.name);
      alert("User login successful!");
      router.push("/blogA");
    } else {
      alert(
        "Invalid credentials.\nAdmin: admin@example.com / 123456\nOr signup as a new user."
      );
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h1 className="login-title">Login</h1>
      <p className="login-subtitle">Please sign in to continue</p>

      <div className="input-group">
        <span className="input-icon">&#9993;</span>
        <input
          type="email"
          placeholder="Email id"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <span className="input-icon">&#128274;</span>
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="forgot-password">
        <a href="#">Forgot password?</a>
      </div>

      <button type="submit" className="login-button">
        Login
      </button>

      <p className="login-footer">
        Don’t have an account?{" "}
        <a href="/signupA" style={{ color: "#e63946", textDecoration: "underline" }}>
          Sign up
        </a>
      </p>
    </form>
  );
};

export default LoginPage;
