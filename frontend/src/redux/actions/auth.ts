import { AppDispatch } from "../store";
import { ActionTypes } from "../types/ActionTypes";

export const loginUserAction = (data: any) => {
	return (dispatch: AppDispatch) => {
		dispatch({ type: ActionTypes.USER_LOGIN, payload: data });
	};
};

export const logoutUserAction = () => {
	return (dispatch: AppDispatch) => {
		dispatch({ type: ActionTypes.USER_LOGOUT });
	};
};
