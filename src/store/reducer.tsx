// third-party
import { combineReducers } from "redux";
import userReducer from "./slices/user.slice";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  users: userReducer,
});

export default reducer;
