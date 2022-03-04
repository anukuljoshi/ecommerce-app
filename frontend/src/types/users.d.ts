interface IUser {
	pk: string | number;
	username: string;
	email: string;
}

interface IUserAddress {
	pk: string | number;
	location1: string;
	location2: string;
	location3: string;
	city: string;
	country: string;
	default: boolean;
}

interface IOrderItem {
	product: IProductSummary;
	quantity: number;
	date_added: string;
	item_price: number;
}

interface IOrder {
	start_date: string;
	order_date: string;
	ordered: boolean;
	shipping_address: IUserAddress | null;
	total: number;
	order_items: IOrderItem[];
}
