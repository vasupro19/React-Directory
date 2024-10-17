import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "./sidebar/sidebar";
import Header from "./header";

// ==============================|| MINIMAL LAYOUT ||============================== //

const MainLayout: React.FC = () => (
  <>
    <div>
      <Header />
    </div>
    <div>
      <Sidebar />
    </div>
    <Outlet />
    {/* <Customization /> */}
  </>
);

export default MainLayout;
