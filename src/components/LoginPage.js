import React from "react";
import {  useDispatch } from "react-redux";

import { startLogin } from "../features/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(startLogin());
  };
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">BlueDot Blogs</h1>
        <p>It's time to express your views.</p>
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
