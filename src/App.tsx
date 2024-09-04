import React from "react";
import { Home } from "./components/Home";
import { NavbarTop } from "./components/NavbarTop";
import { NavbarLeft } from "./components/NavbarLeft";

export const App = () => {
  return (
    <div className="flex flex-col">
      <div className="w-screen h-[100px] z-10">
        <NavbarTop />
      </div>
      <div className="flex">
        <NavbarLeft />
        <Home />
      </div>
    </div>
  );
};
