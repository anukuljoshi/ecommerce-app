import { Dispatch } from "redux";

import axiosInstance from "../../services/axiosInstance";

import { ActionTypes } from "../types/ActionTypes";

export const getCategoryListAction = (category?: string) => {
	let url = "/store/category/";
	if (category) {
		url += `${category}/`;
	}
	return (dispatch: Dispatch) => {
		axiosInstance
			.get(`${url}`)
			.then((res) => {
				if (res.status === 200) {
					dispatch({
						type: ActionTypes.CATEGORY_LIST_SUCCESS,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("getCategoryListAction", error);
				dispatch({
					type: ActionTypes.CATEGORY_LIST_ERROR,
				});
			});
	};
};

export const setCategoryAction = (category: string) => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: ActionTypes.PRODUCT_LIST_LOADING,
		});
		axiosInstance
			.get(`/store/category/${category}/detail/`)
			.then((res) => {
				if (res.status === 200) {
					dispatch({
						type: ActionTypes.SET_CATEGORY,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("set category action", error);
				dispatch({
					type: ActionTypes.PRODUCT_LIST_ERROR,
				});
			});
	};
};

export const getCategoryProductsAction = (category: string) => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: ActionTypes.PRODUCT_LIST_LOADING,
		});
		axiosInstance
			.get(`/store/category/${category}/products/`)
			.then((res) => {
				if (res.status === 200) {
					dispatch({
						type: ActionTypes.PRODUCT_LIST_SUCCESS,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("get category products action", error);
				dispatch({
					type: ActionTypes.PRODUCT_LIST_ERROR,
				});
			});
	};
};

export const getProductDetail = (product: string) => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: ActionTypes.PRODUCT_DETAIL_LOADING,
		});
		axiosInstance
			.get(`store/products/${product}/`)
			.then((res) => {
				if (res.status === 200) {
					dispatch({
						type: ActionTypes.PRODUCT_DETAIL_SUCCESS,
						payload: res.data,
					});
				}
			})
			.catch((error) => {
				console.log("get product detail action", error);
				dispatch({
					type: ActionTypes.PRODUCT_DETAIL_ERROR,
				});
			});
	};
};
