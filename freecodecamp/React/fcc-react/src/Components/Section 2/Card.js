import React from "react";
import Star from "../../images/Section 2/Star 1.png";

const Card = (props) => {
	console.log(props)
	let badgeText 
	if(props.openSpots === 0) {
		badgeText = "SOLD OUT"
	} else if (props.location === "Online") {
		badgeText = "ONLINE"
	}
	return (
		<div className="cardContainer">
			<div className="card">
				{/*This line will only display the SOLD OUT div if the open spots are 0*/}

				<img className="cardImg" src={props.coverImg} alt="" />
				<div className="rating">
					<img src={Star} alt="" />
					<p>
						{props.rating}{" "}
						<span className="number&country">
							({props.reviewCount}) &bull; {props.country}
						</span>
					</p>
				</div>
				<p>{props.title}</p>
				<p>
					<span>From ${props.price} / </span> person
				</p>
				{badgeText && <div className="card--badge">{badgeText}</div>}
			</div>
		</div>
	);
};

export default Card;
