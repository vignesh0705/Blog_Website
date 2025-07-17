"use client";

const SignupPage = () => {
  return (
    <form className="login-form">
      <h1 className="login-title">Sign Up</h1>
      <p className="login-subtitle">Create a new account</p>

      <div className="input-group">
        <span className="input-icon">&#128100;</span>
        <input type="text" placeholder="Full Name" className="login-input" required />
      </div>

      <div className="input-group">
        <span className="input-icon">&#9993;</span>
        <input type="email" placeholder="Email id" className="login-input" required />
      </div>

      <div className="input-group">
        <span className="input-icon">&#128274;</span>
        <input type="password" placeholder="Password" className="login-input" required />
      </div>

      <div className="input-group">
        <span className="input-icon">&#128274;</span>
        <input type="password" placeholder="Confirm Password" className="login-input" required />
      </div>

      <button type="submit" className="login-button">Sign Up</button>

      <p className="login-footer">
        Already have an account? <a href="#">Login</a>
      </p>
    </form>
  );
};

export default SignupPage;
