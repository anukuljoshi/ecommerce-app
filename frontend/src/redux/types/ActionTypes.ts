export enum ActionTypes {
	// auth
	USER_LOGIN = "USER_LOGIN",
	USER_LOGOUT = "USER_LOGOUT",
	AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS",
	AUTH_USER_ERROR = "AUTH_USER_ERROR",
	AUTH_USER_LOADING = "AUTH_USER_LOADING",

	// products
	SET_CATEGORY = "SET_CATEGORY",
	CATEGORY_LIST_SUCCESS = "CATEGORY_LIST_SUCCESS",
	CATEGORY_LIST_ERROR = "CATEGORY_LIST_ERROR",

	PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS",
	PRODUCT_LIST_ERROR = "PRODUCT_LIST_ERROR",
	PRODUCT_LIST_LOADING = "PRODUCT_LIST_LOADING",
}