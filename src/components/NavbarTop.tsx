import React from "react";
import { Button } from "primereact/button";
import logotype from "../img/Logotype.png";
import { Logout } from "../img/logout";

export const NavbarTop = () => {
  return (
    <div className="w-screen h-full z-50  bg-[#fff] shadow-bottom shadow-xl shadow-black/5">
      <div className="flex justify-between items-center h-full">
        <img src={logotype} alt="logotype" className="h-[200px] w-[200px]" />
        <div className="pr-10">
          <Button className="bg-blue-300 w-12 h-12 hover:bg-blue-400 duration-200 rounded-full flex justify-center items-center">
            <Logout />
          </Button>
        </div>
      </div>
    </div>
  );
};
