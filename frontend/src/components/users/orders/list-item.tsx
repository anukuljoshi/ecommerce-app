import { Box, Card, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import AddressLabel from "../address/label";

import OrderItemList from "./items/list";

interface OrderListItemProps {
	order: IOrder;
}

const OrderListItem = ({ order }: OrderListItemProps) => {
	return (
		<Card sx={{ px: 3, py: 2, mb: 2 }}>
			<Stack spacing={2}>
				<Stack direction={"row"} alignItems={"end"} spacing={3}>
					<Typography
						variant={"h6"}
					>{`Order #${order.pk}`}</Typography>
					<Typography variant={"body1"}>
						{`Order Date: ${dayjs(order.order_date).format(
							"MMM DD, YYYY"
						)}`}
					</Typography>
				</Stack>
				{order.shipping_address && (
					<Stack direction={"row"} spacing={2}>
						<Typography>{`Delivery Address: `}</Typography>
						<AddressLabel address={order.shipping_address} />
					</Stack>
				)}
				<div>
					<OrderItemList items={order.order_items} />
					<Box textAlign={"right"}>
						<Typography variant={"h6"}>
							{`Total: ${order.total}`}
						</Typography>
					</Box>
				</div>
			</Stack>
		</Card>
	);
};

export default OrderListItem;
