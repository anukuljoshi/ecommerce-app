import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Box, CircularProgress, Typography } from "@mui/material";

import CategoriesList from "../components/store/categories/list";

import { IStoreState, useAppDispatch } from "../redux/store";
import { getCategoryListAction } from "../redux/actions/products";

const HomePage = () => {
	const dispatch = useAppDispatch();
	const { loading, error, child_categories } = useSelector(
		(store: IStoreState) => store.products.list
	);

	useEffect(() => {
		dispatch(getCategoryListAction());
	}, [dispatch]);

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
			{child_categories.length > 0 && (
				<CategoriesList categories={child_categories} />
			)}
		</>
	);
};

export default HomePage;
