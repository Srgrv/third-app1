import React from "react";
import Login from "./Login/Login";
import { connect } from "react-redux";

class LoginContainer extends React.Component {
  render() {
    return (
      <>
        <Login {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {})(LoginContainer);
