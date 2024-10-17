import { useRoutes } from "react-router-dom";

// routes
import MainRoutes from "./MainRoutes";
import LoginRoutes from "./LoginRoutes";
import Login from "../views/login/index";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    LoginRoutes,
    MainRoutes,
  ]);
}
