import { Users } from "./components/Users";
import { NavbarTop } from "./components/NavbarTop";
import { NavbarLeft } from "./components/NavbarLeft";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
export const App = () => {
  return (
    <BrowserRouter basename="/users-dashboard">
      <div className="flex flex-col">
        <div className="w-screen h-[100px] z-10">
          <NavbarTop />
        </div>
        <div className="flex">
          <NavbarLeft />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
