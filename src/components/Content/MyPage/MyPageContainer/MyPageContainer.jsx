import React from "react";
import Page from "./Page/Page";
import { connect } from "react-redux";
import { add, setUser, getUser } from "../../../../redux/myPageReducer";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import withAuthNavigate from "../../../../hoc/withAuthNavigate";
import { compose } from "redux";
import {
  getProfileStatus,
  updateStatus,
} from "../../../../redux/myPageReducer";

class MyPageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.id;

    if (!userId) {
      userId = 28418;
    }

    this.props.getUser(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return (
      <>
        <Page {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    aboutMe: state.page.user.aboutMe,
    photos: state.page.user.photos.large,
    avatar: state.page.user.photos.small,
    inputValue: state.page.inputValue,
    posts: state.page.posts,
    status: state.page.status,
    isAuth: state.auth.isAuth,
  };
};

const withRouter = (Container) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();
    let navigate = useNavigate();
    let location = useLocation;
    return <Container {...props} router={{ params, navigate, location }} />;
  };
  return ComponentWithRouterProp;
};

export default compose(
  connect(mapStateToProps, {
    add,
    setUser,
    getUser,
    getProfileStatus,
    updateStatus,
  }),
  withRouter,
  withAuthNavigate
)(MyPageContainer);

// export default connect(mapStateToProps, { change, add, setUser, getUser })(
//   withRouter(withAuthNavigate(MyPageContainer))
// );
