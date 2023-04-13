import React from 'react'

const Joke = (props) => {
    console.log(props)
  return (
		<div>
			{props.setup && <h2>Setup: {props.setup}</h2>}
			{props.punchline && <h3>Punchline:{props.punchline}</h3>}
			<hr />
		</div>
	);
}

export default Joke