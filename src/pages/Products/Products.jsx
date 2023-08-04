import { useParams } from "react-router-dom";
import { useState } from "react";

import List from "../../components/List/List";
import "./Products.scss";

const Products = () => {
	const catId = parseInt(useParams().id);
	const [maxPrice, setMaxPrice] = useState(1000);
	const [sort, setSort] = useState(null);

	// console.log(sort);
	// console.log(maxPrice);

	return (
		<div className="products">
			<div className="left">
				<div className="filterItem">
					<h2>Products Categories</h2>
					<div className="inputItem">
						<input type="checkbox" id="1" value={1} />
						<label htmlFor="1">Shoes</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id="2" value={2} />
						<label htmlFor="2">Shirts</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id="3" value={3} />
						<label htmlFor="3">Coats</label>
					</div>
				</div>
				<div className="filterItem">
					<h2>Filter by Price</h2>
					<div className="range-container">
						<span>0</span>
						<input
							className="range"
							type="range"
							min={0}
							max={1000}
							onChange={(e) => setMaxPrice(e.target.value)}
						/>
						<span>{maxPrice}</span>
					</div>
				</div>
				<div className="filterItem">
					<h2>Sort By</h2>
					<div className="inputItem">
						<input type="radio" id="asc" value="asc" name="price" />
						<label htmlFor="asc" onChange={() => setSort("asc")}>
							Price (Lowest first)
						</label>
					</div>
					<div className="inputItem">
						<input type="radio" id="desc" value="desc" name="price" />
						<label htmlFor="desc" onChange={() => setSort("desc")}>
							Price (Highest first)
						</label>
					</div>
				</div>
			</div>
			<div className="right">
				<img
					className="catImg"
					src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt=""
				/>
				<List catId={catId} maxPrice={maxPrice} sort={sort} />
			</div>
		</div>
	);
};

export default Products;
