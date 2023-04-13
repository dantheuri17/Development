/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import "./css/section2.css";
import AirBnbHeader from "./Components/Section 2/AirBnbHeader";
import Card from "./Components/Section 2/Card";
import Joke from "./Components/Section 2/Joke";
import Contact from "./Components/Section 2/Contact";
// import GreyCat from "./images/Section 2/grey cat.jpeg";
// import GingerCat from "./images/Section 2/ginger cat.jpg";
// import CatPinkRibbons from "./images/Section 2/cat with pink ribbons.jpg";
// import CalicoCat from "./images/Section 2/calico cat.jpg";
import KatieZaferes from '../src/images/Section 2/katie-zaferes.png'
// import JokeData from "./Components/Section 2/jokeData";
import AirBnbCardData from "./Components/Section 2/data";

function App() {
	
	const cardElements = AirBnbCardData.map((item) => (
		<Card
			coverImg={item.coverImg}
			title={item.title}
			price={item.price}
			reviewCount={item.stats.reviewCount}
			rating={item.stats.rating}
			country={item.country}
			openSpots={item.openSpots}
			location={item.location}

		/>
	));
	
	return (
		<div className="App">
			{/*<AirBnbHeader />
			<Card
				cardImg= {KatieZaferes}
				rating="5.0"
				reviewCount={6}
				title="Life lessons with Katie Zaferes"
				country="USA"
				price={136}
			/>
		// const jokeElements = JokeData.map((joke) => {
// 	return <Joke setup={joke.setup} punchline={joke.punchline} />;
// });*/}

			{cardElements}
		</div>
	);
}

export default App;
