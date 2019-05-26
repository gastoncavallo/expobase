import { combineReducers } from "redux";

import auth from "./modules/auth";

// navigation helpers
import nav from "./modules/navigation";

const appReducer = combineReducers({
	nav,
	auth
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
