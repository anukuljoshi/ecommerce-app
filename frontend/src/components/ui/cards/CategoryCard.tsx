import { BASE_URL } from "../../../constants/api";

interface CategoryCardProps {
	category: IProductCategory;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
	return (
		<>
			<div className={"shadow-md relative h-96"}>
				<div
					className={
						"bg-black bg-opacity-40 absolute h-full w-full flex justify-center items-center"
					}
				>
					<p className={"text-5xl text-white"}>{category.name}</p>
				</div>
				<img
					className={"h-full w-full object-cover"}
					src={`${BASE_URL}${category.image}`}
					alt={category.name}
				/>
			</div>
		</>
	);
};

export default CategoryCard;
