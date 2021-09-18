import React from "react";
import loader from "../images/loader.gif";

const LoadingPage = () => (
  <div className="loader">
    <img className="loader__image" src={loader} alt="loading-page" />
  </div>
);

export default LoadingPage;
