import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

import CartListItem from "./cart-list-item";

interface CartListProps {
	items: IOrderItem[];
}

const CartList = ({ items }: CartListProps) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell
							align={"right"}
							sx={{ width: 60, fontWeight: "bold" }}
						>
							{"S.No."}
						</TableCell>
						<TableCell sx={{ fontWeight: "bold" }}>
							{"Item"}
						</TableCell>
						<TableCell align={"right"} sx={{ fontWeight: "bold" }}>
							{"Price"}
						</TableCell>
						<TableCell align={"right"} sx={{ fontWeight: "bold" }}>
							{"Quantity"}
						</TableCell>
						<TableCell align={"right"} sx={{ fontWeight: "bold" }}>
							{"Cost"}
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{items.map((item, index) => (
						<CartListItem
							item={item}
							index={index + 1}
							key={index}
						/>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CartList;
