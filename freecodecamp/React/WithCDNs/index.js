function Header() {
	return (
		<div>
			<header>
				<nav>
					<img src="./react-logo.svg" alt="React Logo" width="50px" />
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

function MainContent() {
	return (
		<div>
			<h1>Fun facts about React</h1>
			<ul>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100k stars on Github</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprise apps, including mobile apps</li>
			</ul>
		</div>
	);
}

function Footer() {
	return (
		<div className="footer">
			<p>&copy; 2023 Theuri development. All right reserved</p>
		</div>
	);
}

function App() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
