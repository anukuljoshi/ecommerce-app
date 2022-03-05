import OrderListItem from "./list-item";

interface OrderListProps {
	orders: IOrder[];
}

const OrderList = ({ orders }: OrderListProps) => {
	return (
		<>
			{orders.map((order, index) => (
				<OrderListItem order={order} key={index} />
			))}
		</>
	);
};

export default OrderList;
