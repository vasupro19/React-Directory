import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useAuth } from "../../authcontext/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null); // Clear any existing error messages
    let data = { email, password };

    try {
      await login(data);
      navigate("/home");
    } catch (err) {
      // Set the error message when login fails
      setError("User unauthorized. Please check your credentials.");
    }
  };

  const handleRegister = () => navigate("/register");

  return (
    <div className="main-container">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="register-button">
          <button onClick={handleRegister}>Register Here</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
