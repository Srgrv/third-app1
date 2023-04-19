import React from "react";
import classes from "./Login.module.css";

const Login = (props) => {
  return <LoginForm {...props} />;
};

const LoginForm = (props) => {
  return (
    <div>
      <h1>{props.isAuth ? props.email : "Login"}</h1>
      <form>
        <div>
          <input placeholder="login" />
        </div>
        <div>
          <input placeholder="passoword" />
        </div>
        <div>
          <input className={classes.checkbox} type="checkbox" />
          remember me
        </div>
        <div>
          <input type="submit" value="add" />
        </div>
      </form>
    </div>
  );
};

export default Login;
