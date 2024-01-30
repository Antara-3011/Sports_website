import Header from "./Header";
import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Shared/Input";
import Footer from "../Footer/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/coach");
  };
  return (
    <>
      <Header />
      <div className="bg-gray-100 p-5 m-10 flex flex-col justify-center items-center">
        <p className="font-bold text-2xl mt-1 mb-3">My Personal Details...</p>
        <div className="">
          {/* <span className="label-text">Name: </span> */}

          <Input type="text" placeholder="Type here" label="Name" />
        </div>
        <div className="mt-4">
          <Input type="email" placeholder="Type here" label="Email" />
        </div>
        <div className="mt-4">
          <Input type="number" placeholder="Type here" label="Contact" />
        </div>
        <div className="mt-4">
          <Input type="text" placeholder="Type here" label="Club Name" />
        </div>
        <div>
          <button
            type="submit"
            className="p-3 m-2 bg-gray-500 rounded-xl text-white"
            onClick={handleLogin}
          >
            Edit
          </button>
          <button
            type="submit"
            className="p-3 m-2 bg-green-500 rounded-xl text-white"
            onClick={handleLogin}
          >
            Save
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Profile;
