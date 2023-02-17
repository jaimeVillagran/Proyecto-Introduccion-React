import React from "react";
import s from "./Product.module.css";

const Product = ({ name, price }) => {
	return (
		<div className={s.product}>
			<h2 className={s.name}>{name}</h2>
			<p className={s.price}>${price}</p>
		</div>
	);
};

export default Product;
