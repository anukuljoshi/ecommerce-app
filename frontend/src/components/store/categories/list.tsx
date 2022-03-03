import { Grid } from "@mui/material";

import CategoriesListItem from "./list-item";

interface CategoriesListProps {
	categories: IProductCategory[];
}

const CategoriesList = ({ categories }: CategoriesListProps) => {
	return (
		<Grid container spacing={2}>
			{categories.map((category, index) => (
				<Grid key={index} item xs={12} md={6} lg={4}>
					<CategoriesListItem category={category} />
				</Grid>
			))}
		</Grid>
	);
};

export default CategoriesList;
