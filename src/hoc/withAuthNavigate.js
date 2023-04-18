import React from "react";
import { Navigate } from "react-router-dom";

let withAuthNavigate = (Component) => {
  let ContainerComponent = (props) => {
    if (!props.isAuth) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };
  return ContainerComponent;
};

export default withAuthNavigate;
