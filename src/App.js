import React from 'react';
import Grid from './components/Grid';
import black from './assets/Mana_B.png';
import blue from './assets/Mana_U.png';
import red from './assets/Mana_R.png';
import white from './assets/Mana_W.png';
import green from './assets/Mana_G.png';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
			cases: {
				0: null,
				1: white,
				2: blue,
				3: black,
				4: red,
				5: green
			}
		};
	}

	handleClick = (row, col) => {
		let board = [ ...this.state.board ];
		let values = Object.keys(this.state.cases);
		values = values.map((el) => parseInt(el, 10));
		let currentValue = board[row][col];
		let nextValueIndex = values.indexOf(currentValue) + 1 === values.length ? 0 : values.indexOf(currentValue) + 1;
		board[row][col] = values[nextValueIndex];
		this.setState({ board });
	};

	render() {
		return <Grid handleClick={this.handleClick} cases={this.state.cases} board={this.state.board} />;
	}
}
