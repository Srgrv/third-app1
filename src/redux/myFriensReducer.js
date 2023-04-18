import { userAPI, followAPI } from "../api/api";

const ADD_USERS = "ADD_USERS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_FOLLOWED = "SET_FOLLOWED";
const SET_UNFOLLOWED = "SET_UNFOLLOWED";
const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";

const defaultState = {
  users: [
    {
      aboutMe: "Халоу",
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/9/user-small.jpg?v=0",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/9/user.jpg?v=0",
      },
      followed: true,
      id: 1,
    },
    {
      aboutMe: "Очень хороший программист",
      photos: {
        small:
          "https://social-network.samuraijs.com/activecontent/images/users/10/user-small.jpg?v=0",
        large:
          "https://social-network.samuraijs.com/activecontent/images/users/10/user.jpg?v=0",
      },
      followed: false,
      id: 2,
    },
  ],
  count: 100,
  page: 1,
  following: [],
};

const myFriendsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOWING:
      return {
        ...state,
        following: action.following
          ? [...state.following, action.userId]
          : state.following.filter((id) => id !== action.userId),
      };
    case SET_UNFOLLOWED:
      return {
        ...state,
        users: state.users.map((item) => {
          if (action.userId === item.id) {
            return { ...item, followed: true };
          }
          return item;
        }),
      };
    case SET_FOLLOWED:
      return {
        ...state,
        users: state.users.map((item) => {
          if (action.userId === item.id) {
            return { ...item, followed: false };
          }
          return item;
        }),
      };
    case ADD_USERS:
      return { ...state, users: action.users };
    case CHANGE_PAGE:
      return { ...state, page: action.page };
    default:
      return state;
  }
};

export const setUnFollowed = (userId) => {
  return { type: SET_UNFOLLOWED, userId };
};

export const setFollowed = (userId) => {
  return { type: SET_FOLLOWED, userId };
};

export const addUsers = (users) => {
  return { type: ADD_USERS, users };
};

export const changePage = (page) => {
  return { type: CHANGE_PAGE, page };
};

export const toggleFollowing = (following, userId) => {
  return { type: TOGGLE_FOLLOWING, following, userId };
};

export const getUsers = (count, page) => {
  return (dispatch) => {
    userAPI.getUsers(count, page).then((response) => {
      dispatch(addUsers(response.items));
    });
  };
};

export const unfollowThunk = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowing(true, id));

    followAPI.deleteFollow(id).then((response) => {
      if (response.resultCode === 0) {
        dispatch(setFollowed(id));
      }
      dispatch(toggleFollowing(false, id));
    });
  };
};

export const followThunk = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowing(true, id));

    followAPI.postFollow(id).then((response) => {
      if (response.resultCode === 0) {
        dispatch(setUnFollowed(id));
      }
      dispatch(toggleFollowing(false, id));
    });
  };
};

export default myFriendsReducer;
