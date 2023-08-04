import React from "react";

import Card from "../Card/Card";
import "./List.scss";

const List = ({ catId, maxPrice, sort }) => {
	// console.log(catId, maxPrice, sort);
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Hat",
			oldPrice: 19,
			newPrice: 12,
			isNew: true,
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Shirt",
			oldPrice: 432,
			newPrice: 123,
			isNew: true,
		},
		{
			id: 3,
			img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Tie",
			oldPrice: 29,
			newPrice: 23,
		},
		{
			id: 4,
			img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Jeans",
			oldPrice: 39,
			newPrice: 33,
		},
		{
			id: 5,
			img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Jeans",
			oldPrice: 39,
			newPrice: 33,
		},
	];
	return (
		<div className="list">
			{data?.map((item) => (
				<Card item={item} key={item.id} />
			))}
		</div>
	);
};

export default List;
