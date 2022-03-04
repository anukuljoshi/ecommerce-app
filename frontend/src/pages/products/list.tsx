import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Typography } from "@mui/material";

import CategoryDetail from "../../components/store/categories/detail";

import {
	getCategoryListAction,
	getCategoryProductsAction,
	setCategoryAction,
} from "../../redux/actions/products";
import { IStoreState } from "../../redux/store";

const ProductListPage = () => {
	const params: any = useParams();
	const dispatch = useDispatch();

	const { error, category, products, child_categories } = useSelector(
		(state: IStoreState) => state.products.list
	);

	useEffect(() => {
		dispatch(setCategoryAction(params.category));
		dispatch(getCategoryListAction(params.category));
		dispatch(getCategoryProductsAction(params.category));
	}, [dispatch, params]);

	if (error) {
		return (
			<>
				<Typography variant={"h3"}>Error</Typography>
			</>
		);
	}

	return (
		<>
			{category && (
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