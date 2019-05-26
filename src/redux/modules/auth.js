import { login as loginService } from "../../services/user";
import { NavigationActions } from "react-navigation";
import AppStorage from "../../utils/storage/AppStorage";

const AuthStorage = new AppStorage("Auth");

// login types
const LOGIN_FAIL = "login/LOGIN_FAIL";
const LOGIN_SUCESS = "login/LOGIN_SUCESS";
const LOGIN_START = "login/LOGIN_START";
const CLEAR = "login/CLEAR";

const setCurrentUser = (user, authData) => {
	AuthStorage.save({ user: user, authData: authData });
};

export function login(email, password) {
	return dispatch => {
		dispatch({ type: LOGIN_START });

		loginService(email, password)
			.then(response => {
				// console.log(JSON.stringify(response));
				const { user, token } = response.data;

				setCurrentUser(user, token);
				dispatch(loginSuccess(user, token));
				dispatch(NavigationActions.navigate({ routeName: "Dashboard" }));
			})
			.catch(error => {
				// console.log(error);
				// alert(error);
				dispatch(loginFail());
			});
	};
}
export function loginFail(error) {
	return { type: LOGIN_FAIL, payload: { error } };
}

export function loginSuccess(user, authData) {
	return {
		type: LOGIN_SUCESS,
		payload: { user, authData }
	};
}

export function clear() {
	return { type: CLEAR };
}

const initialState = {
	error: null,
	loading: false,
	loadingSignUp: false,
	authenticated: false,
	authData: null,
	user: null,
	avatarSaved: false,
	avatar: null
};

export default function loginReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_FAIL:
			const error = { shortMsg: "Error", msg: action.payload.error };
			return {
				...state,
				error,
				loading: false
			};
		case LOGIN_START:
			return {
				...state,
				loading: true,
				error: null
			};

		case LOGIN_SUCESS:
			const user = action.payload.user;
			const authData = action.payload.authData;
			return {
				...state,
				loading: false,
				error: null,
				authenticated: true,
				authData: { ...authData },
				user: { ...user }
			};

		case CLEAR:
			return {
				...state,
				...initialState
			};

		default:
			return state;
	}
}

export const actions = {
	loginFail,
	loginSuccess,
	login,
	clear
};
