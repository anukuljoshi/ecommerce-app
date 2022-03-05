import { Link } from "react-router-dom";

import ProductCard from "./card";

interface ProductListItemProps {
	product: IProduct;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<Link to={`products/${product.slug}`}>
			<ProductCard product={product} />
		</Link>
	);
};

export default ProductListItem;
