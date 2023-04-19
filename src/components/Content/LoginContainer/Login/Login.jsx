import React from "react";
import classes from "./Login.module.css";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <div>
      <h1>{props.isAuth ? props.email : "Login"}</h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"login"} name={"login"} component={"input"} />
        </div>
        <div>
          <Field
            placeholder={"passoword"}
            name={"password"}
            component={"input"}
          />
        </div>
        <div>
          <Field
            className={classes.checkbox}
            type={"checkbox"}
            component={"input"}
            name={"rememberMe"}
          />
          remember me
        </div>
        <div>
          <input type="submit" value="add" />
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const onSubmit = (formData) => {
  console.log(formData);
};

const Login = (props) => {
  return <LoginReduxForm {...props} onSubmit={onSubmit} />;
};

export default Login;
