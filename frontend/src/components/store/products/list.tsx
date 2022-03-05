import { Grid } from "@mui/material";

import ProductCard from "./card";

interface ProductListProps {
	products: IProduct[];
}

const ProductList = ({ products }: ProductListProps) => {
	return (
		<Grid container spacing={2}>
			{products.map((product, index) => (
				<Grid key={index} item xs={12} md={6} lg={4}>
					<ProductCard product={product} />
				</Grid>
			))}
		</Grid>
	);
};

export default ProductList;
