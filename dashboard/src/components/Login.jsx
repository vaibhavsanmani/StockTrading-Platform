import { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" replace />;
  }

  const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:3002";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        setError(data.message || data.error || "Invalid email or password");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail", data.user.email);
      localStorage.setItem("userName", data.user.name);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Network error");
    }
  };

  return (
    <div className="d-flex min-vh-100 align-items-center justify-content-center bg-light py-5">
      <div className="card shadow-sm rounded-4 p-4" style={{ minWidth: 320, maxWidth: 420, width: "100%" }}>
        <div className="text-center mb-4">
          <h2 className="h4 mb-1">Welcome back</h2>
          <p className="text-muted mb-0">Sign in to access your dashboard</p>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-12">
            <label htmlFor="loginEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="loginEmail"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="loginPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="loginPassword"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="col-12 d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <span className="text-muted">Don't have an account?</span>{" "}
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
