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

		case ActionTypes.PRODUCT_LIST_LOADING:
			return {
				...state,
				error: false,
				loading: true,
				products: [],
				child_categories: [],
			};
		case ActionTypes.PRODUCT_LIST_ERROR:
			return {
				...state,
				error: true,
				loading: false,
			};
		default:
			return state;
	}
};
