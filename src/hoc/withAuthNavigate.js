import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

let withAuthNavigate = (Component) => {
  let ContainerComponent = (props) => {
    if (!props.isAuth) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };
  let connectContainerComponent = connect(mapStateToPropsForRedirect)(
    ContainerComponent
  );
  return connectContainerComponent;
};

export default withAuthNavigate;
