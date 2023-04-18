import React from "react";
import Friends from "./Friends/Friends";
import { connect } from "react-redux";
import {
  changePage,
  setFollowed,
  setUnFollowed,
  toggleFollowing,
  getUsers,
  followThunk,
  unfollowThunk,
} from "../../../../redux/myFriensReducer";
import withAuthNavigate from "../../../../hoc/withAuthNavigate";
import classes from "./MyFriendsContainer.module.css";

class MyFriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.count, this.props.page);
  }

  change(page) {
    this.props.changePage(page);
    this.props.getUsers(this.props.count, page);
  }

  render() {
    return (
      <>
        <div className={classes.pages}>
          {this.props.pages.map((item, index) => {
            return (
              <span
                className={item === this.props.page ? classes.span : undefined}
                key={index}
                onClick={() => {
                  this.change(item);
                }}
              >
                {item}
              </span>
            );
          })}
        </div>

        <Friends {...this.props} />
      </>
    );
  }
}

const pages = [];
for (let i = 1; i <= 20; i++) {
  pages.push(i);
}

const mapStateToProps = (state) => {
  return {
    count: state.friends.count,
    page: state.friends.page,
    users: state.friends.users,
    pages: pages,
    followed: state.friends.followed,
    following: state.friends.following,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  changePage,
  setFollowed,
  setUnFollowed,
  toggleFollowing,
  getUsers,
  followThunk,
  unfollowThunk,
})(withAuthNavigate(MyFriendsContainer));
