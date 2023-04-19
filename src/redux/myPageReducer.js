import { profileAPI } from "../api/api";

const ADD = "ADD";
const CHANGE = "CHANGE";
const SET_USER = "SET_USER";
const SET_STATUS = "SET_STATUS";

const defaultState = {
  user: {
    aboutMe: "Халоу",
    contacts: {
      facebook: "",
      website: "electronic.by",
      vk: "",
      twitter: "https://twitter.com/@sdf",
      instagram: "www.instagram.com/posledni_prorok/",
      youtube: null,
      github: "github.com/zalash333",
      mainLink: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: "Ищуууу чесн слово",
    fullName: "Jak Zigil`man",
    userId: 28418,
    photos: {
      small:
        "https://social-network.samuraijs.com/activecontent/images/users/9/user-small.jpg?v=0",
      large:
        "https://social-network.samuraijs.com/activecontent/images/users/9/user.jpg?v=0",
    },
  },
  inputValue: "",
  posts: ["Hello", "world"],
  status: "",
};

const myPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_USER:
      return { ...state, user: action.user };
    case CHANGE:
      return { ...state, inputValue: action.value };
    case ADD:
      return {
        ...state,
        posts: [...state.posts, state.inputValue],
        inputValue: "",
      };
    default:
      return state;
  }
};

export const setUser = (user) => {
  return { type: SET_USER, user };
};

export const change = (value) => {
  return { type: CHANGE, value };
};

export const add = () => {
  return { type: ADD };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const getUser = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUser(response));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export const getProfileStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export default myPageReducer;
