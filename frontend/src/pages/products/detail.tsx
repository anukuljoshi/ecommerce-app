import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Typography } from "@mui/material";

import ProductDetail from "../../components/store/products/detail";

import { getProductDetail } from "../../redux/actions/products";
import { IStoreState } from "../../redux/store";

const ProductDetailPage = () => {
	const dispatch = useDispatch();
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
