interface IProductCategorySummary {
	pk: string | number;
	name: string;
	slug: string;
}

interface IProductCategory {
	pk: string | number;
	name: string;
	description: string;
	slug: string;
	image: string;
	parent: IProductCategorySummary;
}

interface IProductImage {
	pk: string | number;
	image: string;
}

interface IProduct {
	pk: string | number;
	title: string;
	price: number;
	units: number;
	category: IProduct;
	slug: string;
	description: string;
	product_images: IProductImage[];
}

interface IProductSummary {
	pk: string | number;
	title: string;
	price: number;
	slug: string;
	category: IProductCategorySummary;
}
