import { combineReducers } from "redux";

import { themeReducer } from "./theme";
import { authUserReducer } from "./auth";
import { productDetailReducer, productListReducer } from "./products";
import {
	userAddressReducer,
	userDetailReducer,
	userOrderReducer,
} from "./users";

const rootReducer = combineReducers({
	theme: themeReducer,
	auth: authUserReducer,
	products: combineReducers({
		list: productListReducer,
		detail: productDetailReducer,
	}),
	users: combineReducers({
		detail: userDetailReducer,
		address: userAddressReducer,
		orders: userOrderReducer,
	}),
});

export default rootReducer;
