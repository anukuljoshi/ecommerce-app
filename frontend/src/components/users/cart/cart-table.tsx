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

import { COLORS } from "../../../constants/colors";

interface CartTableProps {
	items: IOrderItem[];
}

const CartTable = ({ items }: CartTableProps) => {
	return (
		<TableContainer component={Paper} sx={{ background: COLORS.PRIMARY }}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align={"center"} sx={{ width: 60 }}>
							{"S.No."}
						</TableCell>
						<TableCell sx={{ maxWidth: 200 }}>{"Item"}</TableCell>
						<TableCell align={"center"}>{"Price"}</TableCell>
						<TableCell align={"center"}>{"Qty"}</TableCell>
						<TableCell align={"center"}>{"Cost"}</TableCell>
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

export default CartTable;
