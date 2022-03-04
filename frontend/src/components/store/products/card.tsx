import { BASE_URL } from "../../../constants/api";

interface ProductCardProps {
	product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className={"shadow-md"}>
			<div>
				<img
					className={"h-full w-full object-cover"}
					src={`${BASE_URL}${product.product_images[0].image}`}
					alt={product.title}
				/>
			</div>
			<div className="px-2 py-1">
				<p className={"text-4xl"}>{product.title}</p>
			</div>
		</div>
	);
};

export default ProductCard;
