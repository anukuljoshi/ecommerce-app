import { Dispatch } from "redux";

import { ActionTypes } from "../types/ActionTypes";

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
