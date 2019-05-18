import { combineReducers } from "redux";
import viewConfigReducer from './viewConfigReducer';
import tabReducer from './tabReducer';

const rootReducer = combineReducers({
    tab: tabReducer,
    viewConfig: viewConfigReducer});

export default rootReducer;