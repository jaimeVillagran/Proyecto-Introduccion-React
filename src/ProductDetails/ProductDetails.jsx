import React, { useState } from "react";
import s from "./ProductDetails.module.css";

const ProductDetails = ({ name, price, description }) => {
	const [quantity, setQuantity] = useState(1);

	const handleQuantityIncrease = () => {
		setQuantity(quantity + 1);
	};

	const handleQuantityDecrease = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	return (
		<div className={s.productDetails}>
			<h2 className={s.name}>{name}</h2>
			<p className={s.price}>${price}</p>
			<p className={s.description}>{description}</p>
			<p>Quantity: {quantity}</p>
			<div>
				<button onClick={handleQuantityDecrease}>-</button>
				<button onClick={handleQuantityIncrease}>+</button>
			</div>
		</div>
	);
};

export default ProductDetails;
