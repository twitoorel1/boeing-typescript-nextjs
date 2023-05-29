import { combineReducers } from "redux";
import authReducer from "./slices/authenticationSlice"


const rootReducer = combineReducers({
    auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
