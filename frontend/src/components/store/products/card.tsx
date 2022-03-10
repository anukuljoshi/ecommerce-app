import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Card, Stack, Typography } from "@mui/material";

import PopNotification from "../../ui/pop-notify";

import { useAppDispatch } from "../../../redux/store";
import { addProductToCartAction } from "../../../redux/actions/users";

import { BASE_URL } from "../../../constants/api";

interface ProductCardProps {
	product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const dispatch = useAppDispatch();
	const [notificationOpen, setNotificationOpen] = useState<boolean>(false);

	const handleAddToCart = () => {
		dispatch(addProductToCartAction(product.pk)).then((data) => {
			setNotificationOpen(true);
		});
	};

	return (
		<Card>
			<div>
				<img
					className={"h-72 w-full object-cover"}
					src={
						product.product_images.length > 0
							? `${BASE_URL}${product.product_images[0].image}`
							: ""
					}
					alt={product.title}
				/>
			</div>
			<Stack sx={{ p: 2 }} spacing={1}>
				<div>
					<Typography variant={"h4"}>{product.title}</Typography>
					<Typography variant={"body1"}>
						{product.description}
					</Typography>
					<Typography variant={"h5"}>{product.price}</Typography>
				</div>
				<Stack direction={"row"} spacing={1}>
					<Button variant={"outlined"} onClick={handleAddToCart}>
						Add to Cart
					</Button>
					<Link to={`products/${product.slug}`}>
						<Button variant={"contained"}>View Detail</Button>
					</Link>
				</Stack>
			</Stack>
			<PopNotification
				message={"Item added to cart"}
				open={notificationOpen}
				setOpen={setNotificationOpen}
			/>
		</Card>
	);
};

export default ProductCard;
