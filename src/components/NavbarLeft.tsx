import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Dashboard } from "../svg/Dashboard";
import { User } from "../svg/User";
import { Link } from "react-router-dom";

export const NavbarLeft = () => {
  const location = useLocation();
  const height = `calc(100vh - 100px)`;
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/dashboard" || path === "/") {
      setActiveButton("dashboard");
    } else if (path === "/users") {
      setActiveButton("users");
    }
  }, [location.pathname]);

  return (
    <div
      style={{ height }}
      className="w-3/12 flex flex-col gap-5 pt-16 pl-5 bg-[#fff] shadow-right shadow-xl overflow-hidden shadow-black/20"
    >
      <Link
        className={`button-custom ${
          activeButton === "dashboard"
            ? "bg-[#F0F6FF] mr-0 rounded-none rounded-l-xl "
            : ""
        }`}
        to="dashboard"
      >
        <Dashboard />
        Dashboard
      </Link>
      <Link
        className={`button-custom ${
          activeButton === "users"
            ? "bg-[#F0F6FF] mr-0 rounded-none rounded-l-xl "
            : ""
        }`}
        to="users"
      >
        <User />
        Users
      </Link>
    </div>
  );
};
