import { Navigate } from "react-router-dom";
import { useAuth } from "../../authcontext/AuthContext";

const GuestGaurd = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated: guest", isAuthenticated.isAuthenticated);

  if (isAuthenticated.isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default GuestGaurd;
