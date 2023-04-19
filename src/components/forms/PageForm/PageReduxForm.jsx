import React from "react";
import { Field, reduxForm } from "redux-form";

const PageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"post"}
        component={"input"}
        placeholder="enter new post"
        // value={props.inputValue}
        // // onChange={(e) => props.change(e.target.value)}
      />
      <button>add</button>
    </form>
  );
};

const PageReduxForm = reduxForm({ form: "pageForm" })(PageForm);

export default PageReduxForm;
