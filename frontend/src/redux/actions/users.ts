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

// export const addProductToCartAction =
// 	(productId: string | number) => (dispatch: AppDispatch) =>
// 		new Promise((resolve, reject) => {
// 			dispatch({ type: ActionTypes.USER_DETAIL_LOADING });
// 			axiosInstance
// 				.post(`/users/cart/add/${productId}/`)
// 				.then((res) => {
// 					if (res.status === 200) {
// 						dispatch({
// 							type: ActionTypes.USER_DETAIL_SUCCESS,
// 							payload: res.data,
// 						});

// 						resolve(res.data);
// 					}
// 				})
// 				.catch((error) => {
// 					dispatch({ type: ActionTypes.USER_DETAIL_ERROR });
// 					reject(error);
// 				});
// 		});

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
