import { ActionTypes } from "../types/ActionTypes";

interface IProductListState {
	loading: boolean;
	error: boolean;
	category: IProductCategory | null;
	products: IProduct[];
	child_categories: IProductCategory[];
}

const productListState: IProductListState = {
	loading: false,
	error: false,
	category: null,
	products: [],
	child_categories: [],
};

export const productListReducer = (
	state = productListState,
	action: any
): IProductListState => {
	switch (action.type) {
		case ActionTypes.PRODUCT_LIST_LOADING:
			return {
				...state,
				error: false,
				loading: true,
			};
		case ActionTypes.PRODUCT_LIST_ERROR:
			return {
				...state,
				error: true,
				loading: false,
			};
		case ActionTypes.SET_CATEGORY:
			return {
				...state,
				error: false,
				loading: false,
				category: action.payload,
			};
		case ActionTypes.CATEGORY_LIST_SUCCESS:
			return {
				...state,
				error: false,
				loading: false,
				child_categories: action.payload,
			};
		case ActionTypes.PRODUCT_LIST_SUCCESS:
			return {
				...state,
				error: false,
				loading: false,
				products: action.payload,
			};
		default:
			return state;
	}
};

interface IProductDetailState {
	loading: boolean;
	error: boolean;
	product: IProduct | null;
}

const productDetailState: IProductDetailState = {
	loading: false,
	error: false,
	product: null,
};

export const productDetailReducer = (
	state = productDetailState,
	action: any
): IProductDetailState => {
	switch (action.type) {
		case ActionTypes.PRODUCT_DETAIL_LOADING:
			return {
				...state,
				loading: true,
				error: false,
			};
		case ActionTypes.PRODUCT_DETAIL_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};
		case ActionTypes.PRODUCT_DETAIL_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				product: action.payload,
			};
		default:
			return state;
	}
};
