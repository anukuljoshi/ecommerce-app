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
            }
        case ActionTypes.GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                cart: action.payload,
            }
		default:
			return state;
	}
};
