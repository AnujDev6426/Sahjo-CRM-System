import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { REACT_APP_API_BASE } from "../config/api.config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const errors = {};
    if (phone.trim() === "") {
      errors.mobile = "Please enter a mobile number!";
    }
    if (pass.trim() === "") {
      errors.pass = "Please enter a password!";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    setError({}); // Clear previous errors
    const data = {
      phone,
      password: pass,
    };

    try {
      const res = await axios.post(`${REACT_APP_API_BASE}auth/login`, data);
      if (res?.data?.message) {
       toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
          navigate("/dash");
        },1000)
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white"
      style={backgroundStyle}
    >
      <div
        className="card p-4 rounded-4 shadow col-5"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.14)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "white",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ color: "aliceblue", fontFamily: "poppins" }}
        >
          Sahjo Workspace
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile number
            </label>
            <input
              type="tel"
              className="form-control bg-transparent text-white"
              id="mobile"
              
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <span style={{ color: "red" }}>{error.mobile}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control bg-transparent text-white"
              id="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <span style={{ color: "red" }}>{error.pass}</span>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

const backgroundStyle = {
  // backgroundImage: 'url("/assets/loginBG.jpg")',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
};

export default Login;
