"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserNavbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully.");
    router.push("/loginA");
    setIsLoggedIn(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">One Piece</span>
        </div>

        <nav className="navbar-links">
          <button className="nav-link" onClick={() => router.push("/blogA")}>
            Blogs
          </button>

          {!isLoggedIn ? (
            <>
              <button className="nav-link" onClick={() => router.push("/loginA")}>
                Login
              </button>
              <button className="nav-link" onClick={() => router.push("/signupA")}>
                Signup
              </button>
            </>
          ) : (
            <button className="nav-link logout" onClick={handleLogout}>
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default UserNavbar;
