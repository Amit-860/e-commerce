import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TweeterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

import "./Contact.scss";

const Contact = () => {
	return (
		<div className="contact">
			<div className="wrapper">
				<span>BE IN TOUCH WITH US:</span>
				<div className="mail">
					<input type="text" placeholder="Enter your e-mail...." />
					<button>JOIN Us</button>
				</div>
				<div className="icons">
					<FacebookIcon />
					<InstagramIcon />
					<TweeterIcon />
					<GoogleIcon />
					<PinterestIcon />
				</div>
			</div>
		</div>
	);
};

export default Contact;
