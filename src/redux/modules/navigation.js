import AppNavigation from "../../navigation/MainStack";

export default (state, action) => {
	const newState = AppNavigation.router.getStateForAction(action, state);

	return newState || state;
};
