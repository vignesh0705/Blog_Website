"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminNavbar = () => {
  const router = useRouter();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const role = localStorage.getItem("role");
      setIsAdminLoggedIn(role === "admin");
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    setIsAdminLoggedIn(false);
    alert("Logged out");
    router.push("/loginB");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">One Piece</span>
        </div>

        <nav className="navbar-links">
          <button className="nav-link" onClick={() => router.push("/blogB")}>
            Blogs
          </button>
          <button className="nav-link" onClick={() => router.push("/createB")}>
            Create
          </button>

          {!isAdminLoggedIn ? (
            <>
              <button className="nav-link" onClick={() => router.push("/loginB")}>
                Login
              </button>
              <button className="nav-link" onClick={() => router.push("/signupB")}>
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

export default AdminNavbar;
