/* eslint-disable no-unused-vars */
const kvArray = [
	{ key: 1, value: 10 },
	{ key: 2, value: 20 },
	{ key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({
	key: key,
	value: value * 2,
}));


const nums = [1, 2, 3, 4, 5];

const doubledNums = nums.map(number => number*2)

console.log(doubledNums)

const names = ["alice", "bob", "charlie", "danielle"]

const properNames = names.map(name => name[0].toUpperCase() + name.slice(1))

console.log(properNames)

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const htmlPokemon = pokemon.map(pokemon => `<p>${pokemon}</p>`)

console.log(htmlPokemon)


// const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

// on react
// const jokeElements = JokeData.map((joke) => {
// 	return <Joke setup={joke.setup} punchline={joke.punchline} />;
// });



// 			{
// 				colors.map((color) => <h2>{color}</h2>);
// 			}

// 			{
// 				jokeElements;
// 			}