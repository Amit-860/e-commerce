import { React, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./Cart.scss";

const Cart = () => {
	const [quantity, setQuantity] = useState(1);
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Hat",
			isNew: true,
			desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
			quantity: 2,
			price: 122,
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Shirt",
			desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum.",
			quantity: 5,
			price: 34,
		},
	];
	return (
		<div className="cart">
			<h1>Products in your cart</h1>
			{data?.map((item) => (
				<div className="item" key={item.id}>
					<img src={item.img} alt="" />
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.desc.substring(0, 50)}</p>
						<div className="price">
							<div className="quantity">
								<button onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
									-
								</button>
								{item.quantity} X ${item.price}
								<button onClick={() => setQuantity(Math.min(quantity + 1, 99))}>
									+
								</button>
							</div>
						</div>
					</div>
					<DeleteOutlineIcon className="delete" />
				</div>
			))}
			<div className="total">
				<span>SUBTOTAL</span>
				<span>$224</span>
			</div>
			<button className="checkout">PROCEDE TO CHECKOUT</button>
			<span className="reset">RESET CART</span>
		</div>
	);
};

export default Cart;
