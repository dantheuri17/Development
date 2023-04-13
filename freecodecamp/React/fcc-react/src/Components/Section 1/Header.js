import React from 'react'
import reactLogo from "../../images/react-logo.svg"

const Header = () => {
  return (
		<div>
			<header>
				<nav>
					<img src={reactLogo} alt="React Logo" width="50px" />
					<ul className="nav-items">
						<li>Pricing</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

export default Header