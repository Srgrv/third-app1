import React from "react";

const Login = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.isAuth ? props.email : "Login"}</h1>
    </div>
  );
};

export default Login;
