import { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${apiUrl}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        setError(data.message || data.error || "Could not register user");
        return;
      }

      navigate("/login");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Network error");
    }
  };

  return (
    <div className="d-flex min-vh-100 align-items-center justify-content-center bg-light py-5">
      <div className="card shadow-sm rounded-4 p-4" style={{ minWidth: 320, maxWidth: 480, width: "100%" }}>
        <div className="text-center mb-4">
          <h2 className="h4 mb-1">Create your account</h2>
          <p className="text-muted mb-0">Sign up and start using the dashboard.</p>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-12">
            <label htmlFor="signupName" className="form-label">
              Full name
            </label>
            <input
              type="text"
              id="signupName"
              className="form-control"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="signupEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="signupEmail"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="signupPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="signupPassword"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Create a password"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="signupConfirmPassword" className="form-label">
              Confirm password
            </label>
            <input
              type="password"
              id="signupConfirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Repeat your password"
              required
            />
          </div>

          <div className="col-12 d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              Create Account
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <span className="text-muted">Already have an account?</span>{" "}
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
