import { Card, Grid, Typography } from "@mui/material";

import CartTable from "./cart-table";

import { COLORS } from "../../../constants/colors";

interface CartProps {
	cart: IOrder;
}

const Cart = ({ cart }: CartProps) => {
	return (
		<>
			<Grid container justifyContent={"center"}>
				<Grid item xs={12} sm={10} md={8} lg={8}>
					{cart.order_items.length > 0 ? (
						<CartTable items={cart.order_items} />
					) : (
						<Card sx={{ px: 4, py: 2, background: COLORS.PRIMARY }}>
							<Typography variant={"h5"}>
								No item in cart
							</Typography>
						</Card>
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default Cart;
