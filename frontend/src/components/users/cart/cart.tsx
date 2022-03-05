import { Link } from "react-router-dom";

import { Box, Button, Card, Typography } from "@mui/material";

import CartList from "./cart-list";

import { URLRoutes } from "../../../constants/URLRoutes";

interface CartProps {
	cart: IOrder;
}

const Cart = ({ cart }: CartProps) => {
	return (
		<>
			{cart.order_items.length > 0 ? (
				<>
					<CartList items={cart.order_items} />
					<Card sx={{ px: 4, py: 2 }}>
						<Typography variant={"h6"} textAlign={"right"}>
							{`Total: ${cart.total}`}
						</Typography>
					</Card>
					<Box textAlign={"center"} sx={{ my: 2 }}>
						<Link
							to={`/${URLRoutes.USER}/${URLRoutes.ORDERS}/${URLRoutes.CREATE}`}
						>
							<Button variant={"contained"} color={"primary"}>
								Proceed to Buy
							</Button>
						</Link>
					</Box>
				</>
			) : (
				<Card sx={{ px: 4, py: 2 }}>
					<Typography variant={"h5"}>No item in cart</Typography>
				</Card>
			)}
		</>
	);
};

export default Cart;
