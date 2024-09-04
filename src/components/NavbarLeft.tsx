import React from "react";

export const NavbarLeft = () => {
  const height = `calc(100vh - 100px)`;
  return (
    <div
      style={{ height }}
      className="w-3/12 flex flex-col gap-10 pt-16 pl-5 bg-[#fff] shadow-right shadow-xl overflow-hidden shadow-black/20"
    >
      <button className="button-custom">Users</button>
      <button className="button-custom">Users</button>
      <button className="button-custom">Users</button>
      <button className="button-custom">Users</button>
      <button className="button-custom">Users</button>
    </div>
  );
};
