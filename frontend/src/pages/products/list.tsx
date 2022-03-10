import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Box, CircularProgress, Typography } from "@mui/material";

import CategoryDetail from "../../components/store/categories/detail";

import { IStoreState, useAppDispatch } from "../../redux/store";
import {
	getCategoryListAction,
	getCategoryProductsAction,
	setCategoryAction,
} from "../../redux/actions/products";

const ProductListPage = () => {
	const params: any = useParams();
	const dispatch = useAppDispatch();

	const { loading, error, category, products, child_categories } =
		useSelector((state: IStoreState) => state.products.list);

	useEffect(() => {
		dispatch(setCategoryAction(params.category));
		dispatch(getCategoryListAction(params.category));
		dispatch(getCategoryProductsAction(params.category));
	}, [dispatch, params]);

	if (error) {
		return (
			<Box textAlign={"center"}>
				<Typography variant={"h3"}>Error</Typography>
			</Box>
		);
	}

	if (loading) {
		return (
			<Box textAlign={"center"}>
				<CircularProgress color="inherit" />
			</Box>
		);
	}
	return (
		<>
			{category && child_categories && products && (
				<CategoryDetail
					category={category}
					child_categories={child_categories}
					products={products}
				/>
			)}
		</>
	);
};

export default ProductListPage;
