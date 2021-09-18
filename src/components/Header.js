import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { startLogout } from "../features/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
    window.location.reload();
  };
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <NavLink to="/dashboard" className="header__title">
            <h1>BlueDot Blogs</h1>
          </NavLink>

          <button className="button button--link" onClick={handleLogout}>
            LogOut
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
