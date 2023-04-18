import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import myPageReducer from "./myPageReducer";
import myFriendsReducer from "./myFriensReducer";
import AuthReducer from "./authReducer";
import ThunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  page: myPageReducer,
  friends: myFriendsReducer,
  auth: AuthReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
