import { ActionTypes } from "../types/ActionTypes";

interface IAuthUser {
	pk: string | number;
	username: string;
	email: string;
}

interface IAuthUserState {
	error: boolean;
	user: IAuthUser | null;
	token: string;
}

const authUserState: IAuthUserState = {
	error: false,
	user: null,
	token: "",
};

export const authUserReducer = (
	state = authUserState,
	action: any
): IAuthUserState => {
	let token;
	switch (action.type) {
		case ActionTypes.USER_LOGIN:
			localStorage.setItem("auth-token", action.payload.token);
			return {
				...state,
				error: false,
				user: {
					pk: action.payload.pk,
					username: action.payload.username,
					email: action.payload.email,
				},
				token: action.payload.token,
			};
		case ActionTypes.AUTH_USER_SUCCESS:
			token = localStorage.getItem("auth-token") || "";
			return {
				...state,
				error: false,
				user: action.payload,
				token: token,
			};
		case ActionTypes.AUTH_USER_ERROR:
		case ActionTypes.USER_LOGOUT:
			localStorage.removeItem("auth-token");
			return {
				...state,
				error: true,
				user: null,
				token: "",
			};
		default:
			return state;
	}
};
