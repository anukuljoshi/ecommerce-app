import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";

import OrderItemListItem from "./list-item";

interface OrderItemListProps {
	items: IOrderItem[];
}

const OrderItemList = ({ items }: OrderItemListProps) => {
	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell
						align={"right"}
						sx={{ width: 60, fontWeight: "bold" }}
					>
						{"S.No."}
					</TableCell>
					<TableCell sx={{ fontWeight: "bold" }}>{"Item"}</TableCell>
					<TableCell align={"right"} sx={{ fontWeight: "bold" }}>
						{"Price"}
					</TableCell>
					<TableCell align={"right"} sx={{ fontWeight: "bold" }}>
						{"Qty"}
					</TableCell>
					<TableCell align={"right"} sx={{ fontWeight: "bold" }}>
						{"Cost"}
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{items.map((item, index) => (
					<OrderItemListItem item={item} index={index} key={index} />
				))}
			</TableBody>
		</Table>
	);
};

export default OrderItemList;
