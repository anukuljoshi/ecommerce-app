import React from "react";
import { Link } from "react-router-dom";

import {
	IconButton,
	Stack,
	TableCell,
	TableRow,
	Typography,
} from "@mui/material";
import { AddRounded, RemoveRounded } from "@mui/icons-material";

import {
	addProductToCartAction,
	removeProductFromCartAction,
} from "../../../redux/actions/users";
import { useAppDispatch } from "../../../redux/store";

import { URLRoutes } from "../../../constants/URLRoutes";

interface CartItemProps {
	item: IOrderItem;
	index: number;
}

const CartListItem = ({ item, index }: CartItemProps) => {
	const dispatch = useAppDispatch();

	const handleAddToCart = () => {
		dispatch(addProductToCartAction(item.product.pk));
	};

	const handleRemoveFromCart = () => {
		dispatch(removeProductFromCartAction(item.product.pk));
	};

	return (
		<TableRow>
			<TableCell align={"center"}>{index}</TableCell>
			<TableCell>
				<Link
					to={`/${URLRoutes.CATEGORY}/${item.product.category.slug}/${URLRoutes.PRODUCTS}/${item.product.slug}`}
				>
					<Typography>{item.product.title}</Typography>
				</Link>
			</TableCell>
			<TableCell align={"center"}>
				<Typography>{item.product.price}</Typography>
			</TableCell>
			<TableCell align={"center"}>
				<Stack
					direction={"row"}
					justifyContent={"center"}
					alignItems={"center"}
					spacing={1}
				>
					<IconButton size="small" onClick={handleRemoveFromCart}>
						<RemoveRounded fontSize="inherit" />
					</IconButton>
					<Typography>{item.quantity}</Typography>
					<IconButton size="small" onClick={handleAddToCart}>
						<AddRounded fontSize="inherit" />
					</IconButton>
				</Stack>
			</TableCell>
			<TableCell align={"center"}>
				<Typography>{item.item_price}</Typography>
			</TableCell>
		</TableRow>
	);
};

export default CartListItem;
