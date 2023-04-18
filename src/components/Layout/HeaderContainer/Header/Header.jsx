import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <NavLink to="/">Main</NavLink>
      <NavLink to="page">Page</NavLink>
      <NavLink to="friends">Friends</NavLink>
      <NavLink to="login">{props.isAuth ? props.login : "Login"}</NavLink>
    </div>
  );
};

export default Header;
