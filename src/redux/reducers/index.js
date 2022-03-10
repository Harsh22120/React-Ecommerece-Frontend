import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import login from "./LoginReducer";
import register from "./RegisterReducer";

export default combineReducers({
   form: formReducer,
   login,
  register
 
});
