import { ActionTypes } from "../types/ActionTypes";

interface IAuthUser {
	pk: string | number;
	username: string;
	email: string;
}

interface IAuthUserState {
	loading: boolean;
	error: boolean;
	user: IAuthUser | null;
}

const authUserState: IAuthUserState = {
	loading: false,
	error: false,
	user: !!localStorage.getItem("auth-user")
		? JSON.parse(localStorage.getItem("auth-user")!)
		: null,
};

export const authUserReducer = (
	state = authUserState,
	action: any
): IAuthUserState => {
	switch (action.type) {
		case ActionTypes.USER_LOGIN:
			localStorage.setItem("auth-user", JSON.stringify(action.payload));
			localStorage.setItem("auth-token", action.payload.token);
			return {
				...state,
				error: false,
				user: action.payload,
			};
		case ActionTypes.AUTH_USER_LOADING:
			return {
				...state,
				loading: true,
				error: false,
			};
		case ActionTypes.AUTH_USER_ERROR:
		case ActionTypes.USER_LOGOUT:
			localStorage.removeItem("auth-token");
			localStorage.removeItem("auth-user");
			return {
				...state,
				error: true,
				user: null,
			};
		default:
			return state;
	}
};
