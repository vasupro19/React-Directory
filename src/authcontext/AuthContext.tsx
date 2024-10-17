import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import api from "../utils/axios";

interface AuthContextType {
  isAuthenticated: {
    isAuthenticated: boolean;
  };
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated") || "false")
  );

  useEffect(() => {
    // Sync the auth state to localStorage whenever it changes
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const login = async (data: { email: string; password: string }) => {
    let res = await api.post("/auth/login", data);
    if (res.status === 200) {
      setIsAuthenticated({ isAuthenticated: true });
      localStorage.setItem("token", res.data.token);
    }
  };

  const logout = () => {
    setIsAuthenticated({ isAuthenticated: false });
    localStorage.removeItem("isAuthenticated");
    // Optionally clear any stored tokens or data
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  console.log(AuthContext);
  const context = useContext(AuthContext);
  console.log(context);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
