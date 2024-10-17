import { Outlet } from "react-router-dom";
import React from "react";

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout: React.FC = () => (
  <>
    <Outlet />
    {/* <Customization /> */}
  </>
);

export default MinimalLayout;
