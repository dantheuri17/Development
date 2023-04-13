import React from "react";
import reactjslogo from "../../images/reactjs-icon 2.png"

const Main = () => {
	return (
		<div className="main">
			<div className="textContainer">
				<h1 className="mainHeader">Fun facts about React</h1>
				<ul className="list-items">
					<li>Was first released in 2013</li>
					<li>Was originally created by Jordan Walke</li>
					<li>Has well over 100k stars on Github</li>
					<li>Is maintained by Facebook</li>
					<li>Powers thousands of enterprise apps, including mobile apps</li>
				</ul>
			</div>

			<div className="reactjsIconContainer">
				<img src={reactjslogo} alt="" />
	</div>
		</div>
	);
};

export default Main;
