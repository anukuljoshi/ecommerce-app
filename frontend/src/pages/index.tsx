import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";

import CategoriesList from "../components/store/categories/list";

import { getCategoryListAction } from "../redux/actions/products";
import { IStoreState } from "../redux/store";

const HomePage = () => {
	const dispatch = useDispatch();
	const { error, child_categories } = useSelector(
		(store: IStoreState) => store.products.list
	);

	useEffect(() => {
		dispatch(getCategoryListAction());
	}, [dispatch]);

	if (error) {
		return <Typography variant={"h3"}>Error</Typography>;
	}

	return (
		<>
			<CategoriesList categories={child_categories} />
		</>
	);
};

export default HomePage;
