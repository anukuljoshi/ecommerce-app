import { AppDispatch } from "../store";

import axiosInstance from "../../services/axiosInstance";

import { ActionTypes } from "../types/ActionTypes";

export const getUserDetailAction = () => {
	return (dispatch: AppDispatch) => {
		dispatch({ type: ActionTypes.USER_DETAIL_LOADING });
		axiosInstance
			.get("/users/me/")
			.then((res) => {
				if (res.status === 200) {
					dispatch({
						type: ActionTypes.USER_DETAIL_SUCCESS,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("get user detial action", error);
				dispatch({ type: ActionTypes.USER_DETAIL_ERROR });
			});
	};
};

export const getUserCartAction = () => {
	return (dispatch: AppDispatch) => {
		dispatch({ type: ActionTypes.USER_DETAIL_LOADING });
		axiosInstance
			.get("/users/cart/")
			.then((res) => {
				if (res.status === 200) {
					dispatch({
						type: ActionTypes.GET_CART_SUCCESS,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("get user cart action", error);
				dispatch({ type: ActionTypes.USER_DETAIL_ERROR });
			});
	};
};

export const addProductToCartAction = (productId: string | number) => {
	return (dispatch: AppDispatch) => {
		dispatch({ type: ActionTypes.USER_DETAIL_LOADING });
		return axiosInstance
			.post(`/users/cart/add/${productId}/`)
			.then((res) => {
				if (res.status === 200) {
					dispatch({
						type: ActionTypes.GET_CART_SUCCESS,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("get user cart action", error);
				dispatch({ type: ActionTypes.USER_DETAIL_ERROR });
			});
	};
};

export const removeProductFromCartAction = (productId: string | number) => {
	return (dispatch: AppDispatch) => {
		dispatch({ type: ActionTypes.USER_DETAIL_LOADING });
		axiosInstance
			.post(`/users/cart/remove/${productId}/`)
			.then((res) => {
				if (res.status === 200) {
					dispatch({
						type: ActionTypes.GET_CART_SUCCESS,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("get user cart action", error);
				dispatch({ type: ActionTypes.USER_DETAIL_ERROR });
			});
	};
};

export const getUserAddressAction = () => {
	return (dispatch: AppDispatch) => {
		dispatch({ type: ActionTypes.USER_ADDRESS_LOADING });
		axiosInstance
			.get(`users/address/`)
			.then((res) => {
				if (res.status === 200) {
					dispatch({
						type: ActionTypes.USER_ADDRESS_LIST,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("get user address action", error);
				dispatch({ type: ActionTypes.USER_ADDRESS_ERROR });
			});
	};
};

export const createUserAddressAction = (data: any) => {
	return (dispatch: AppDispatch) => {
		return axiosInstance
			.post(`users/address/create/`, data)
			.then((res) => {
				if (res.status === 201) {
					dispatch({
						type: ActionTypes.USER_ADDRESS_CREATE,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("create user address action", error);
				dispatch({ type: ActionTypes.USER_ADDRESS_ERROR });
			});
	};
};

export const getUserOrdersAction = () => {
	return (dispatch: AppDispatch) => {
		dispatch({ type: ActionTypes.USER_ORDER_LOADING });
		axiosInstance
			.get("/users/orders/")
			.then((res) => {
				if (res.status === 200) {
					dispatch({
						type: ActionTypes.USER_ORDER_LIST,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("get user list action", error);
				dispatch({ type: ActionTypes.USER_ORDER_ERROR });
			});
	};
};

export const createUserOrderAction = (address: string | number) => {
	return (dispatch: AppDispatch) => {
		dispatch({ type: ActionTypes.USER_ORDER_LOADING });
		return axiosInstance
			.post("/users/orders/create/", {
				address: address,
			})
			.then((res) => {
				if (res.status === 201) {
					dispatch({
						type: ActionTypes.USER_ORDER_CREATE,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("create user order action", error);
				dispatch({ type: ActionTypes.USER_ORDER_ERROR });
			});
	};
};
