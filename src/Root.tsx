import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Root: React.FC = () => (
  <>
    <Navbar />
    <main className="container">
      <Outlet />
    </main>
  </>
);

export default Root;
