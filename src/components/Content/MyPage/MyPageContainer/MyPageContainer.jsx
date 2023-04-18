import React from "react";
import Page from "./Page/Page";
import { connect } from "react-redux";
import { change, add, setUser, getUser } from "../../../../redux/myPageReducer";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import withAuthNavigate from "../../../../hoc/withAuthNavigate";

class MyPageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.id;

    if (!userId) {
      userId = 27731;
    }
    this.props.getUser(userId);
  }

  render() {
    return (
      <>
        <Page {...this.props} />
      </>
    );
  }
}

let AuthNavigateComponent = withAuthNavigate(MyPageContainer);

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

AuthNavigateComponent = connect(mapStateToPropsForRedirect)(
  AuthNavigateComponent
);

const mapStateToProps = (state) => {
  return {
    aboutMe: state.page.user.aboutMe,
    photos: state.page.user.photos.large,
    avatar: state.page.user.photos.small,
    inputValue: state.page.inputValue,
    posts: state.page.posts,
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

export default connect(mapStateToProps, { change, add, setUser, getUser })(
  withRouter(AuthNavigateComponent)
);
