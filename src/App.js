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
			board: [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ],
			cases: [ null, white, blue, black, red, green ]
		};
	}

	handleClick = (row, col) => {
		let board = this.state.board.map((row) => [ ...row ]);
		let cases = [ ...this.state.cases ];
		let currentValue = board[row][col];
		// ESTE ES EL PASO QUE CAMBIARÍA
		let nextValue = currentValue + 1 === cases.length ? 0 : currentValue + 1;
		//
		board[row][col] = nextValue;
		this.setState({ board });
	};

	render() {
		return <Grid handleClick={this.handleClick} cases={this.state.cases} board={this.state.board} />;
	}
}
