import Home from "../views/dashboard/homepage.tsx";
import About from "../views/dashboard/aboutpage.tsx";

import ProtectedRoute from "../utils/route-gaurd//ProtectedRoute";

import MainLayout from "../layout/MainLayout/index.tsx";
import { SidebarProvider } from "../layout/MainLayout/sidebar/index.tsx";
const MainRoutes = {
  path: "/",
  element: (
    <ProtectedRoute>
      <SidebarProvider>
        <MainLayout />
      </SidebarProvider>
    </ProtectedRoute>
  ),
  children: [
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ],
};

export default MainRoutes;
