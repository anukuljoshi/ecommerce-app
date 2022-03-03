import { combineReducers } from "redux";

import { authUserReducer } from "./auth";
import { productListReducer } from "./products";

const rootReducer = combineReducers({
	products: combineReducers({
		list: productListReducer,
	}),
	auth: authUserReducer,
});

export default rootReducer;
