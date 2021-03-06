import { Link } from "react-router-dom";

import { Chip, Stack } from "@mui/material";

import ProductList from "../products/list";

import { URLRoutes } from "../../../constants/URLRoutes";

interface CategoryDetailProps {
	category: IProductCategory;
	child_categories: IProductCategory[];
	products: IProduct[];
}

const CategoryDetail = ({
	category,
	child_categories,
	products,
}: CategoryDetailProps) => {
	// const [drawerState, setDrawerState] = useState<boolean>(false);

	return (
		<>
			{/* subcategories in drawer */}
			{/* {child_categories.length>0 && (
				<>
					<SubCategoryDrawer
						categories={child_categories}
						drawerState={drawerState}
						setDrawerState={setDrawerState}
					/>
					<IconButton
						onClick={() => setDrawerState(true)}
					>
						<ChevronRightRounded  />
					</IconButton>
				</>
			)} */}

			{/* sub categories in chips */}
			<Stack direction={"row"} spacing={1}>
				{category.parent ? (
					<Link to={`/${URLRoutes.CATEGORY}/${category.parent.slug}`}>
						<Chip
							label={category.parent.name}
							variant={"outlined"}
							color={"warning"}
							clickable
						/>
					</Link>
				) : (
					<Link to={`/`}>
						<Chip
							label={"Home"}
							variant={"outlined"}
							color={"warning"}
							clickable
						/>
					</Link>
				)}
				<Chip
					label={category.name}
					// variant={"outlined"}
					color={"primary"}
				/>
				{child_categories.length > 0 && (
					<>
						{child_categories.map((child_category) => (
							<Link
								to={`/${URLRoutes.CATEGORY}/${child_category.slug}`}
								key={child_category.pk}
							>
								<Chip
									label={child_category.name}
									variant={"outlined"}
									color={"success"}
									clickable
								/>
							</Link>
						))}
					</>
				)}
			</Stack>
			<br />
			{products && <ProductList products={products} />}
		</>
	);
};

export default CategoryDetail;
