import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <p className="text-4xl font-bold">Create Account</p>
        <label htmlFor="name" className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
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
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-6 mb-6 w-80 bg-cyan-600 text-white"
          type="submit"
          onClick={handleLogin}
        >
          Create Account
        </button>
        <p className="">
          Already have an account?
          <Link to={"/login"} className="text-purple-700 ml-3">
            Log In
          </Link>
        </p>
      </form>
    </>
  );
};
export default Signup;
