import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h2>Welcome to Dashboard</h2>
          <p>You have successfully logged in!</p>
          <div className="mt-4">
            <button 
              className="btn btn-danger"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
