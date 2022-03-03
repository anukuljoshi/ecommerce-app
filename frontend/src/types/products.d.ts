interface IProductCategory {
	name: string;
	description: string;
	slug: string;
	image: string;
}

interface IProductImage {
	product: string[] | number[];
	image: string;
}

interface IProduct {
	title: string;
	price: number;
	units: number;
	category: IProduct;
	slug: string;
	description: string;
}
