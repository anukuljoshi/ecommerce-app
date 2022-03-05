import { TableCell, TableRow } from "@mui/material";

interface OrderItemListItemProps {
	item: IOrderItem;
	index: number;
}

const OrderItemListItem = ({ item, index }: OrderItemListItemProps) => {
	return (
		<TableRow>
			<TableCell align={"center"}>{index + 1}</TableCell>
			<TableCell>{item.product.title}</TableCell>
			<TableCell align={"right"}>{item.product.price}</TableCell>
			<TableCell align={"right"}>{item.quantity}</TableCell>
			<TableCell align={"right"}>{item.item_price}</TableCell>
		</TableRow>
	);
};

export default OrderItemListItem;
