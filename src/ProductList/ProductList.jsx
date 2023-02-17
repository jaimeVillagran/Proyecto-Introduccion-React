import React from "react";
import s from "./ProductList.module.css";
import { data } from "../assets/data";

const ProductList = ({ onProductClick }) => {
	return (
		<div className={s.productList}>
			{data.map((product) => (
				<div
					key={product.id}
					className={s.product}
					onClick={() => onProductClick(product)}>
					<h2 className={s.name}>{product.name}</h2>
					<p className={s.price}>${product.price}</p>
					<p className={s.description}>{product.description}</p>
				</div>
			))}
		</div>
	);
};

export default ProductList;
