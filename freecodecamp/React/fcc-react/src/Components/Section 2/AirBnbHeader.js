import React from "react";
import AirBnbNavbar from "./AirBnbNavbar";
import HeaderImg from "../../images/Section 2/HeaderImg.png";

const AirBnbHeader = () => {
	return (
		<header>
			<AirBnbNavbar />
			<main className="AirBnb--mainHeaderContainer">
				<div className="AirBnb--headerImgContainer">
					<img className="AirBnb-headerImg" src={HeaderImg} alt="" />
				</div>
				<div className="AirBnb--headerTextContainer">
					<h1 className="AirBnb--mainHeader">Online Experiences</h1>
					<p className="AirBnb--headerDescription">
						Join unique interactive activities led by<br />one-of-a-kind hosts-all
						without leaving<br /> home.
					</p>
				</div>
			</main>
		</header>
	);
};

export default AirBnbHeader;
