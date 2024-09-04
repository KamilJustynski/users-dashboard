import React from "react";
import { Dashboard } from "../img/Dashboard";
import { User } from "../img/User";

export const NavbarLeft = () => {
  const height = `calc(100vh - 100px)`;
  return (
    <div
      style={{ height }}
      className="w-3/12 flex flex-col gap-10 pt-16 pl-5 bg-[#fff] shadow-right shadow-xl overflow-hidden shadow-black/20"
    >
      <button className="button-custom">
        <Dashboard />
        Dashboard
      </button>
      <button className="button-custom">
        <User />
        Users
      </button>
    </div>
  );
};
