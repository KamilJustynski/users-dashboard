import React, { useState } from "react";
import { Dashboard } from "../img/Dashboard";
import { User } from "../img/User";
import { Link } from "react-router-dom";

export const NavbarLeft = () => {
  const height = `calc(100vh - 100px)`;
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div
      style={{ height }}
      className="w-3/12 flex flex-col gap-10 pt-16 pl-5 bg-[#fff] shadow-right shadow-xl overflow-hidden shadow-black/20"
    >
      <Link
        className={`button-custom ${
          activeButton === "dashboard"
            ? "bg-[#F0F6FF] mr-0 rounded-none rounded-l-xl "
            : ""
        }`}
        onClick={() => handleButtonClick("dashboard")}
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
        onClick={() => handleButtonClick("users")}
        to="users"
      >
        <User />
        Users
      </Link>
    </div>
  );
};
