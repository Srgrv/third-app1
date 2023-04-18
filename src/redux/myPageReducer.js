import { profileAPI } from "../api/api";

const ADD = "ADD";
const CHANGE = "CHANGE";
const SET_USER = "SET_USER";

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
    userId: 9,
    photos: {
      small:
        "https://social-network.samuraijs.com/activecontent/images/users/9/user-small.jpg?v=0",
      large:
        "https://social-network.samuraijs.com/activecontent/images/users/9/user.jpg?v=0",
    },
  },
  inputValue: "",
  posts: ["Hello", "world"],
};

const myPageReducer = (state = defaultState, action) => {
  switch (action.type) {
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

export const getUser = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUser(response));
    });
  };
};

export default myPageReducer;
