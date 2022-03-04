import { combineReducers } from "redux";

import { authUserReducer } from "./auth";
import { productDetailReducer, productListReducer } from "./products";

const rootReducer = combineReducers({
	products: combineReducers({
		list: productListReducer,
		detail: productDetailReducer,
	}),
	auth: authUserReducer,
});

export default rootReducer;
