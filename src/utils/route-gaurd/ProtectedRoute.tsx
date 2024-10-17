import { Navigate } from "react-router-dom";
import { useAuth } from "../../authcontext/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated:", isAuthenticated.isAuthenticated);

  if (!isAuthenticated.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
