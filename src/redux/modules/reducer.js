import { combineReducers } from "redux";
import mode from "./mode";
import word from "./word";

const reducer = combineReducers({
  mode,
  word,
});

export default reducer;
