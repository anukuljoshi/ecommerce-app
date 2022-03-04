import React, { useState } from "react";

import {
	Button,
	Radio,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

import { BASE_URL } from "../../../constants/api";

interface ProductDetailProps {
	product: IProduct;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

	const [activeImage, setActiveImage] = useState<number>(0);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setActiveImage(parseInt(event.target.value));
	};

	return (
		<Stack
			direction={smallScreen ? "column" : "row"}
			className={"shadow-md bg-primary text-white"}
		>
			<div
				className={`${
					smallScreen ? "w-full" : "w-1/2"
				} px-auto relative`}
			>
				<img
					className={`${
						smallScreen ? "object-contain h-72 w-full" : "w-full h-96"
					}`}
					src={`${BASE_URL}${product.product_images[activeImage].image}`}
					alt={product.title}
				/>
				{product.product_images.length > 1 && (
					<div
						className={
							"absolute bottom-0 bg-background left-1/2 -translate-x-1/2"
						}
					>
						{product.product_images.map((image, index) => (
							<Radio
								key={index}
								name={"image buttons"}
								color={"success"}
								size={"small"}
								checked={activeImage === index}
								value={index}
								onChange={handleChange}
							/>
						))}
					</div>
				)}
			</div>
			<Stack
				className={`${smallScreen ? "w-full" : "w-1/2"} p-5`}
				justifyContent={"space-between"}
				spacing={1}
			>
				<Stack spacing={1}>
					<div>
						<Typography variant={"h4"}>{product.title}</Typography>
						<Typography variant={"h5"}>{product.price}</Typography>
					</div>
					<Typography variant={"body1"}>
						{product.description}
					</Typography>
				</Stack>
				<Stack direction={"row"} spacing={1}>
					<Button variant={"outlined"}>Add to Cart</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default ProductDetail;
