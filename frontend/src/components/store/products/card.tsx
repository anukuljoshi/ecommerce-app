import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../../constants/api";

interface ProductCardProps {
	product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className={"shadow-md bg-primary text-white"}>
			<div>
				<img
					className={"h-full w-full object-cover"}
					src={`${BASE_URL}${product.product_images[0].image}`}
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
					<Button variant={"outlined"}>Add to Cart</Button>
					<Link to={`products/${product.slug}`}>
						<Button variant={"contained"}>View Detail</Button>
					</Link>
				</Stack>
			</Stack>
		</div>
	);
};

export default ProductCard;
