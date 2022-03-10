import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Box, CircularProgress, Grid, Typography } from "@mui/material";

import Cart from "../../components/users/cart/cart";

import { IStoreState, useAppDispatch } from "../../redux/store";
import {
	getUserCartAction,
	getUserDetailAction,
} from "../../redux/actions/users";

const UserCartPage = () => {
	const dispatch = useAppDispatch();
	const { loading, error, user, cart } = useSelector(
		(state: IStoreState) => state.users.detail
	);

	useEffect(() => {
		dispatch(getUserDetailAction());
		dispatch(getUserCartAction());
	}, [dispatch]);

	if (error) {
		return (
			<Box textAlign={"center"}>
				<Typography variant={"h3"}>Error</Typography>
			</Box>
		);
	}

	if (loading) {
		return (
			<Box textAlign={"center"}>
				<CircularProgress color="inherit" />
			</Box>
		);
	}

	return (
		<>
			<Grid container justifyContent={"center"}>
				<Grid item xs={12} sm={10} md={8} lg={8}>
					{user && cart && (
						<>
							<Cart cart={cart} />
						</>
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default UserCartPage;
