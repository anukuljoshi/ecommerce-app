import { useEffect } from "react";
import { useSelector } from "react-redux";

import OrderList from "../../../components/users/orders/list";

import { IStoreState, useAppDispatch } from "../../../redux/store";
import { getUserOrdersAction } from "../../../redux/actions/users";

const OrderListPage = () => {
	const dispatch = useAppDispatch();
	const { orders } = useSelector((state: IStoreState) => state.users.orders);

	useEffect(() => {
		dispatch(getUserOrdersAction());
	}, [dispatch]);

	return <>{orders.length > 0 && <OrderList orders={orders} />}</>;
};

export default OrderListPage;
