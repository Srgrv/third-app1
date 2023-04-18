import React from "react";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <HeaderContainer />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
