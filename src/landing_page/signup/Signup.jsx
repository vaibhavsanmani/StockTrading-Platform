import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // 🔥 stop reload

    try {
      await axios.post("http://127.0.0.1:3002/signup", form);
      alert("Signup Successful ✅");
      navigate("/"); // 🔥 go to login
    } catch (err) {
      alert("Signup Failed ❌");
    }
  };

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row align-items-center">
        
        {/* LEFT IMAGE */}
        <div className="col-6 text-center">
          <img
            src="/media/images/signup.png"
            alt="signup"
            style={{ width: "80%" }}
          />
        </div>

        {/* RIGHT FORM */}
        <div className="col-6">
          <h2 style={{ marginBottom: "20px" }}>Create your account</h2>

          <form onSubmit={handleSignup}>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control mb-3"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control mb-3"
              onChange={handleChange}
              required
            />

            <button className="btn btn-primary w-100" type="submit">
              Sign Up
            </button>
          </form>

          <p style={{ marginTop: "10px" }}>
            Already have an account?{" "}
            
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;