import { Link } from "react-router-dom";

const Signup = () => {
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
              <h1 className="h4 mb-3">Sign Up</h1>
              <p className="text-muted">Create a new account to access the dashboard.</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="signupName" className="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control" id="signupName" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="signupEmail" placeholder="you@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="signupPassword" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="signupPassword" placeholder="Create a password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Create Account
                </button>
              </form>
              <div className="mt-3 text-center">
                <Link to="/login">Already have an account? Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
