import { Link } from "react-router-dom";

const Login = () => {
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL ?? `${window.location.protocol}//${window.location.hostname}:5173/`;

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = dashboardUrl;
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="h4 mb-3">Login</h1>
              <p className="text-muted">Use your credentials to sign in.</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="loginEmail" placeholder="you@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Sign In
                </button>
              </form>
              <div className="mt-3 text-center">
                <Link to="/signup">Create an account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
