import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const navigationMiddleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav
);

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk),
		applyMiddleware(navigationMiddleware)
	)
);

export default store;
