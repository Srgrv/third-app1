import { authAPI } from "../api/api";

const SET_ME = "SET_ME";
const SET_AUTH = "SET_AUTH";

const defaultState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const AuthReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ME:
      return { ...state, ...action.me };
    case SET_AUTH:
      return { ...state, isAuth: action.isAuth };
    default:
      return state;
  }
};

export const setMe = (me) => {
  return { type: SET_ME, me };
};

export const setAuth = (isAuth) => {
  return { type: SET_AUTH, isAuth };
};

export const getAuthMe = () => {
  return (dispatch) => {
    authAPI.getAuthMe().then((response) => {
      dispatch(setMe(response.data));
      if (response.resultCode === 0) {
        dispatch(setAuth(true));
      }
    });
  };
};

export default AuthReducer;
