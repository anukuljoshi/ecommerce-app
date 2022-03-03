import { Dispatch } from "redux";

import { ActionTypes } from "../types/ActionTypes";

import axiosInstance from "../../services/axiosInstance";

export const loginUserAction = (data: any) => {
	return (dispatch: Dispatch) => {
		dispatch({ type: ActionTypes.USER_LOGIN, payload: data });
	};
};

export const logoutUserAction = () => {
	return (dispatch: Dispatch) => {
		dispatch({ type: ActionTypes.USER_LOGOUT });
	};
};

export const getAuthUserAction = () => {
	return (dispatch: Dispatch) => {
		axiosInstance
			.get("/users/me/", {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				if (res.status === 200) {
					dispatch({
						type: ActionTypes.AUTH_USER_SUCCESS,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("get auth user error", error);
				dispatch({ type: ActionTypes.AUTH_USER_ERROR });
			});
	};
};
