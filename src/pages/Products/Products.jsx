import "./Products.scss";

const Products = () => {
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
				</div>
				<div className="filterItem">
					<h2>Sort By</h2>
				</div>
			</div>
			<div className="right"></div>
		</div>
	);
};

export default Products;
