import React from "react";
import navlogo from "../../images/react-logo.svg";


const Navbar = () => {
	return (
		<nav className="pageNavbar">
			<div className="logoContainer">
				<img className="logo" src={navlogo} alt="React Logo" />
				<h2>ReactFacts</h2>
			</div>

			<h3 className="navDescription">React Course-Project 1 </h3>
		</nav>
	);
};

export default Navbar;
