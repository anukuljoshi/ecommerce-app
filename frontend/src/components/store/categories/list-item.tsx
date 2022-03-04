import { Link } from "react-router-dom";

import CategoryCard from "./card";

interface CategoriesListItemProps {
	category: IProductCategory;
}

const CategoriesListItem = ({ category }: CategoriesListItemProps) => {
	return (
		<Link to={`category/${category.slug}`}>
			<CategoryCard category={category} />
		</Link>
	);
};

export default CategoriesListItem;
