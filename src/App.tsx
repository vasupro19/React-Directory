import Header from "./layout/MainLayout/header/index";
import Sidebar from "./layout/MainLayout/sidebar/sidebar.tsx"; // Ensure Sidebar is imported
import "./App.css";
import { SidebarProvider } from "./layout/MainLayout/sidebar/index.tsx";
import MainRoutes from "./routes/MainRoutes.tsx";
import { AuthProvider } from "./authcontext/AuthContext.tsx";
import Routes from "./routes";

const App = () => (
  // <SidebarProvider>
  //   <div className="app-container">
  //     <div className="header">
  //       <Header />
  //     </div>

  //     <div className="app-layout">
  //       <Sidebar /> {/* Add Sidebar here */}
  //       <div className="main-content">
  //         <MainRoutes />
  //       </div>
  //     </div>
  //   </div>
  // </SidebarProvider>

  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
