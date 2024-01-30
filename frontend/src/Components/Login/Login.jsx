import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};
export default Login;
