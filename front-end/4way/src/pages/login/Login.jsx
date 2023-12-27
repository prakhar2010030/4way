import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const apiCall = async () => {
    const data = {
      email,
      password,
      token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTZhZmEwY2M3NTc3OTI5MjdlYjFlMDciLCJpYXQiOjE3MDE1MDk2NDQsImV4cCI6MTcwMjgwNTY0NH0.vdntMwPLkVFjdojFx0eLghboq1bSnpjr-3DJkw0d0G0"
    };
    let res = await axios.post("http://localhost:5000/api/login", data);
    console.log(res.data);
    toast.success("Logged in Successfully");
  };

  const submit = () => {
    apiCall();
  };

  const seen = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="login">
        <div className="leftContainer">
          {/* <h3>4way</h3> */}
        </div>
        <div className="rightContainer">
          <div className="formContainer">
            <h2>Login</h2>
            <div className={`input `}>
              <input
                type="email"
                placeholder="work email id"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className={`input passwordField `}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {showPassword ? (
                <AiFillEye className="invisibleIcon" onClick={seen} />
              ) : (
                <AiFillEyeInvisible className="invisibleIcon" onClick={seen} />
              )}
            </div>

            <div className="linkContainer">
              <p className="link">forgot password?</p>
            </div>

            <button className="loginBtn" onClick={submit}>
              Login
            </button>
            <div className="splitter">
              <span className="line"></span>
              <span>or</span>
              <span className="line"></span>
            </div>
            <button className="googleBtn">
              <FcGoogle />
              <span>Login with Google</span>
            </button>
          </div>
          <div className="signupDescription">
            <p>
              New to 4way?<span className="signUp">Signup here </span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
