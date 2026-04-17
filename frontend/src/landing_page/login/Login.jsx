import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container mb-5 m-5">
      <div className="row h-100 align-items-center">

        <div className="col-1"></div>
        {/* LEFT SIDE - IMAGE */}
        <div className="col-md-5 d-none d-md-block p-0">
          <img
            src="/media/images/signup.png"
            alt="login"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="col-md-5 d-flex " style={{marginLeft:"90px"}}>
          <div style={{ width: "350px" }}>
            
            <h2 className="mb-4 fw-bold text-center">Welcome Back</h2>

            <form onSubmit={handleLogin}>
              
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  className="form-control"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>

            <p className="mt-3 text-center">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-primary">
                Signup
              </Link>
            </p>

          </div>
        </div>
        <div className="col-1"></div>

      </div>
    </div>
  );
}

export default Login;