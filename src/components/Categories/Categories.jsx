import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<div className="categories">
			<div className="col">
				<div className="row">
					<img
						src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt=""
					/>
					<button>
						<Link className="link" to="/product/1">
							Sale
						</Link>
					</button>
				</div>
				<div className="row">
					<img
						src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt=""
					/>
					<button>
						<Link className="link" to="/product/1">
							Women
						</Link>
					</button>
				</div>
			</div>
			<div className="col">
				<div className="row">
					<img
						src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt=""
					/>
					<button>
						<Link className="link" to="/product/1">
							New Season
						</Link>
					</button>
				</div>
			</div>
			<div className="col col-l">
				<div className="row">
					<div className="col">
						<div className="row">
							<img
								src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
							/>
							<button>
								<Link className="link" to="/product/1">
									Men
								</Link>
							</button>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<img
								src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
							/>
							<button>
								<Link className="link" to="/product/1">
									Accessories
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<img
						src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
						alt=""
					/>
					<button>
						<Link className="link" to="/product/1">
							Shoe
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Categories;
