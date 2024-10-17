import Login from "../views/login/index";
import RegisterForm from "../views/register/RegisterForm";
import "../App.css";
import GuestGaurd from "../utils/route-gaurd/GuestGaurd.tsx";

import MinimalLayout from "../layout/LoginLayout";

const LoginRoutes = {
  path: "/",
  element: (
    <GuestGaurd>
      <MinimalLayout />
    </GuestGaurd>
  ),
  children: [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <RegisterForm />,
    },
  ],
};

export default LoginRoutes;
