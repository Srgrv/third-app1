import React from "react";
import Main from "./Main/Main";
import { connect } from "react-redux";

class MainPageContainer extends React.Component {
  render() {
    return (
      <>
        <Main />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(MainPageContainer);
