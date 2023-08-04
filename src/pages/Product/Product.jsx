import { useParams } from "react-router-dom";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import "./Product.scss";

const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const productId = useParams();
	const images = [
		"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
		"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
		"https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
	];
	console.log(productId);

	return (
		<div className="product">
			<div className="left">
				<div className="images">
					<img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
					<img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
				</div>
				<div className="mainImg">
					<img src={images[selectedImg]} alt="" />
				</div>
			</div>
			<div className="right">
				<h1>title</h1>
				<span className="price">$199</span>
				<p>
					Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
					enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
					exercitation amet. Nisi anim cupidatat excepteur officia.
				</p>
				<div className="quantity">
					<button onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
						-
					</button>
					{quantity}
					<button onClick={() => setQuantity(Math.min(quantity + 1, 99))}>
						+
					</button>
				</div>
				<button type="button" className="add">
					<AddShoppingCartIcon /> ADD TO CART
				</button>
				<div className="link">
					<div className="item">
						<FavoriteBorderIcon /> ADD TO WISHLIST
					</div>
					<div className="item">
						<BalanceIcon />
						ADD TO COMPARE
					</div>
				</div>
				<div className="info">
					<sapn>Vender: Polo</sapn>
					<span>Product Type: T-Shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
				</div>
				<hr />
				<div className="details">
					<span>DESCRIPTION</span>
					<hr />
					<span>ADDITIONAL INFORMATION</span>
					<hr />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
