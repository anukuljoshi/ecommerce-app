import { combineReducers } from "redux";

import { authUserReducer } from "./auth";
import { productDetailReducer, productListReducer } from "./products";
import { userDetailReducer } from "./users";

const rootReducer = combineReducers({
	products: combineReducers({
		list: productListReducer,
		detail: productDetailReducer,
	}),
	users: combineReducers({
		detail: userDetailReducer,
	}),
	auth: authUserReducer,
});

export default rootReducer;
