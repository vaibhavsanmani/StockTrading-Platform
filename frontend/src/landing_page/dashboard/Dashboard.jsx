import { useEffect } from "react";

const Dashboard = () => {
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL ?? `${window.location.protocol}//${window.location.hostname}:5173/`;

  useEffect(() => {
    window.location.href = dashboardUrl;
  }, [dashboardUrl]);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="h4">Redirecting...</h1>
              <p className="text-muted">You are being redirected to the dashboard app.</p>
              <p>
                If the redirect does not happen automatically, <a href={dashboardUrl}>click here</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
