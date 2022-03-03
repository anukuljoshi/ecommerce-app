import { ActionTypes } from "../types/ActionTypes";

interface IProductListState {
	error: boolean;
	category: string;
	products: IProduct[];
	child_categories: IProductCategory[];
}

const productListState: IProductListState = {
	error: false,
	category: "",
	products: [],
	child_categories: [],
};

export const productListReducer = (
	state = productListState,
	action: any
): IProductListState => {
	switch (action.type) {
		case ActionTypes.SET_CATEGORY:
			return {
				...state,
				error: false,
				category: action.payload,
			};
		case ActionTypes.CATEGORY_LIST_SUCCESS:
			return {
				...state,
				error: false,
				child_categories: action.payload,
			};
		case ActionTypes.CATEGORY_LIST_ERROR:
			return {
				...state,
				error: true,
			};
		case ActionTypes.PRODUCT_LIST_SUCCESS:
			return {
				...state,
				error: false,
				products: action.payload,
			};
		case ActionTypes.PRODUCT_LIST_ERROR:
			return {
				...state,
				error: true,
			};
		default:
			return state;
	}
};
