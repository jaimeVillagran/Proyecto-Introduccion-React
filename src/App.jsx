import React, { useState } from "react";
import ProductList from "./ProductList/ProductList";
import ProductDetails from "./ProductDetails/ProductDetails";

const App = () => {
	const [selectedProduct, setSelectedProduct] = useState(null);

	const handleProductClick = (product) => {
		setSelectedProduct(product);
	};

	return (
		<div>
			<h1>Computer Accessories</h1>
			{selectedProduct ? (
				<ProductDetails
					name={selectedProduct.name}
					price={selectedProduct.price}
					description={selectedProduct.description}
				/>
			) : (
				<p>Select a product to see details</p>
			)}
			<ProductList onProductClick={handleProductClick} />
		</div>
	);
};

export default App;
