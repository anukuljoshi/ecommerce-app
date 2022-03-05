import { AppDispatch } from "../store";

import { ActionTypes } from "../types/ActionTypes";

export const setThemeAction = () => {
	return (dispatch: AppDispatch) => {
		dispatch({ type: ActionTypes.SET_THEME });
	};
};
