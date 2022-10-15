import stateUpdateAndDelete from "./increment";
import { combineReducers } from "redux";
const combineReducer = combineReducers({
  stateUpdateAndDelete: stateUpdateAndDelete
});

export default combineReducer;
