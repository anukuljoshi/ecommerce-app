import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Typography } from "@mui/material";

import ProductDetail from "../../components/store/products/detail";

import { IStoreState, useAppDispatch } from "../../redux/store";
import { getProductDetail } from "../../redux/actions/products";

const ProductDetailPage = () => {
	const dispatch = useAppDispatch();
	const params: any = useParams();
	const { error, loading, product } = useSelector(
		(state: IStoreState) => state.products.detail
	);

	useEffect(() => {
		dispatch(getProductDetail(params.product));
	}, [dispatch, params]);

	if (error) {
		return (
			<>
				<Typography variant={"h4"}>Error</Typography>
			</>
		);
	}

	if (loading) {
		return (
			<>
				<Typography variant={"h4"}>Loading...</Typography>
			</>
		);
	}

	return <>{product && <ProductDetail product={product} />}</>;
};

export default ProductDetailPage;
