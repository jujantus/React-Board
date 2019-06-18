import React from 'react';
import Grid from './components/Grid';
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
		};
	}

	remove = (axis) => {
		let board = [ ...this.state.board ];

		switch (axis) {
			case 'y':
				if (board.length > 1) {
					board.pop();
				}
				break;

			case 'x':
				board.forEach((row) => {
					if (row.length > 1) {
						row.pop();
					}
				});
				break;

			default:
		}
		this.setState({ board });
	};

	add = (axis) => {
		let board = [ ...this.state.board ];

		switch (axis) {
			case 'y':
				let newRow = board[0].map(() => 0);
				board.push(newRow);
				break;

			case 'x':
				board.forEach((row) => row.push(0));
				break;

			default:
		}
		this.setState({ board });
	};

	render() {
		return <Grid add={this.add} remove={this.remove} board={this.state.board} />;
	}
}
