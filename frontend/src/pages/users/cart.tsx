import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Typography } from "@mui/material";

import Cart from "../../components/users/cart/cart";

import {
	getUserCartAction,
	getUserDetailAction,
} from "../../redux/actions/users";
import { IStoreState, useAppDispatch } from "../../redux/store";

const UserCartPage = () => {
	const dispatch = useAppDispatch();
	const { error, user, cart } = useSelector(
		(state: IStoreState) => state.users.detail
	);

	useEffect(() => {
		dispatch(getUserDetailAction());
		dispatch(getUserCartAction());
	}, [dispatch]);

	if (error) {
		return (
			<>
				<Typography variant={"h3"}>Error</Typography>
			</>
		);
	}

	return (
		<>
			{/* <h1>Hello {user?.username}</h1> */}
			{user && cart && <Cart cart={cart} />}
		</>
	);
};

export default UserCartPage;
