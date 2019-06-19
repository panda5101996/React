import { combineReducers } from "redux";
import HomeReducer from './HomeReducer';

const initReducer = combineReducers({
    home: HomeReducer
});

export default initReducer;