import { ActionTypes } from "../types/ActionTypes";

interface IThemeState {
	theme: "light" | "dark";
}

const themeState: IThemeState = {
	theme: localStorage.getItem("theme") === "dark" ? "dark" : "light",
};

export const themeReducer = (state = themeState, action: any): IThemeState => {
	switch (action.type) {
		case ActionTypes.SET_THEME:
			if (state.theme === "light") {
				localStorage.setItem("theme", "dark");
			} else {
				localStorage.setItem("theme", "light");
			}
			return {
				theme: state.theme === "light" ? "dark" : "light",
			};
		default:
			return state;
	}
};
