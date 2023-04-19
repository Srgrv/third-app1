import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import myPageReducer from "./myPageReducer";
import myFriendsReducer from "./myFriensReducer";
import AuthReducer from "./authReducer";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  page: myPageReducer,
  friends: myFriendsReducer,
  auth: AuthReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;
