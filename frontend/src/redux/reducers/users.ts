import { ActionTypes } from "../types/ActionTypes";

interface IUserDetailState {
	loading: boolean;
	error: boolean;
	user: IUser | null;
	cart: IOrder | null;
}

const userDetailState: IUserDetailState = {
	loading: false,
	error: false,
	user: null,
	cart: null,
};

export const userDetailReducer = (
	state = userDetailState,
	action: any
): IUserDetailState => {
	switch (action.type) {
		case ActionTypes.USER_DETAIL_LOADING:
			return {
				...state,
				loading: true,
				error: false,
			};
		case ActionTypes.USER_DETAIL_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				user: action.payload,
			};
		case ActionTypes.GET_CART_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				cart: action.payload,
			};
		default:
			return state;
	}
};

interface IUserAddressState {
	loading: boolean;
	error: boolean;
	list: IUserAddress[];
	selected: IUserAddress | null;
}

const userAddressState: IUserAddressState = {
	loading: false,
	error: false,
	list: [],
	selected: null,
};

export const userAddressReducer = (
	state = userAddressState,
	action: any
): IUserAddressState => {
	let address_list;
	switch (action.type) {
		case ActionTypes.USER_ADDRESS_LOADING:
			return {
				...state,
				loading: true,
				error: false,
			};
		case ActionTypes.USER_ADDRESS_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};
		case ActionTypes.USER_ADDRESS_LIST:
			return {
				...state,
				loading: false,
				error: false,
				list: action.payload,
			};
		case ActionTypes.USER_ADDRESS_SELECTED:
			return {
				...state,
				loading: false,
				error: false,
				selected: action.payload,
			};
		case ActionTypes.USER_ADDRESS_CREATE:
			address_list = [...state.list];
			address_list.push(action.payload);
			return {
				...state,
				loading: false,
				error: false,
				list: address_list,
			};
		default:
			return state;
	}
};

interface IUserOrderState {
	loading: boolean;
	error: boolean;
	orders: IOrder[];
}

const userOrderState: IUserOrderState = {
	loading: false,
	error: false,
	orders: [],
};

export const userOrderReducer = (
	state = userOrderState,
	action: any
): IUserOrderState => {
    let tempOrders;
	switch (action.type) {
		case ActionTypes.USER_ORDER_LOADING:
			return {
				...state,
				loading: true,
				error: false,
			};
		case ActionTypes.USER_ORDER_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};
		case ActionTypes.USER_ORDER_LIST:
			return {
				...state,
				loading: false,
				error: false,
				orders: action.payload,
			};
            
		case ActionTypes.USER_ORDER_CREATE:
            tempOrders = [...state.orders];
            tempOrders.unshift(action.payload);
			return {
				...state,
				loading: false,
				error: false,
				orders: tempOrders,
			};
		default:
			return state;
	}
};
