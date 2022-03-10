import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Box, Card, CircularProgress, Grid, Typography } from "@mui/material";

import OrderList from "../../../components/users/orders/list";

import { IStoreState, useAppDispatch } from "../../../redux/store";
import { getUserOrdersAction } from "../../../redux/actions/users";

const OrderListPage = () => {
	const dispatch = useAppDispatch();
	const { loading, error, orders } = useSelector(
		(state: IStoreState) => state.users.orders
	);

	useEffect(() => {
		dispatch(getUserOrdersAction());
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
					{orders.length > 0 ? (
						<OrderList orders={orders} />
					) : (
						<Card sx={{ px: 4, py: 2 }}>
							<Typography variant={"h5"}>
								No orders placed yet
							</Typography>
						</Card>
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default OrderListPage;
