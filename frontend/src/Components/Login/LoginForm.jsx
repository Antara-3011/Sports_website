import React, { useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Admin");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (selectedRole === "Admin") {
      navigate("/admin");
    } else if (selectedRole === "Coach") {
      navigate("/coach");
    } else if (selectedRole === "Athlete") {
      navigate("/athlete");
    }
  };
  return (
    <>
      <form id="loginForm">
        <p className="text-4xl font-bold">Login</p>
        <p className="text-gray-400 mt-3 mb-3">
          Please enter your login details to signin
        </p>
        <label htmlFor="email" className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="email" className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <label htmlFor="role" className="label-text ">
            Select Role:
          </label>
          <select
            id="role"
            className="w-32 ml-10 mt-5  border border-gray-300 rounded-md"
            name="role"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Coach">Coach</option>
            <option value="Athlete">Athlete</option>
          </select>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <label htmlFor="keepLoggedIn">
              <input
                type="checkbox"
                className="mr-1"
                id="keepLoggedIn"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
              />
              Keep me logged in
            </label>
          </div>
          <div>
            <a href="/forgot-password" className="text-purple-600">
              Forgot Password?
            </a>
          </div>
        </div>

        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-6 mb-6 w-80 bg-cyan-600 text-white"
          type="submit"
          onClick={handleLogin}
        >
          Log In
        </button>

        <p className="">
          Don't have an account?
          <Link to={"/signup"} className="text-purple-700 ml-3">
            Sign Up
          </Link>
        </p>

        <div className="social-login mt-5">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
            Google
          </button>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300">
            Facebook
          </button>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
