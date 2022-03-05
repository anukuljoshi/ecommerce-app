import { Grid } from "@mui/material";

import OrderCreate from "../../../components/users/orders/create";

const OrderCreatePage = () => {
	return (
		<Grid container justifyContent={"center"}>
			<Grid item xs={12} sm={10} md={8} lg={8}>
				<OrderCreate />
			</Grid>
		</Grid>
	);
};

export default OrderCreatePage;
