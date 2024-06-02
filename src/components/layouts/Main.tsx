import React from "react";
import Navbar from "../fragments/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
