import React from 'react';
import BoardGrid from './BoardGrid';
import '../App.css';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boardGrid: this.props.board
		};
	}

	remove = (axis) => {
		let boardGrid = [ ...this.state.boardGrid ];

		switch (axis) {
			case 'y':
				if (boardGrid.length > 1) {
					boardGrid.pop();
				}
				break;

			case 'x':
				boardGrid.forEach((row) => {
					if (row.length > 1) {
						row.pop();
					}
				});
				break;

			default:
		}
		this.setState({ boardGrid });
	};

	add = (axis) => {
		let boardGrid = [ ...this.state.boardGrid ];

		switch (axis) {
			case 'y':
				let newRow = boardGrid[0].map(() => 0);
				boardGrid.push(newRow);
				break;

			case 'x':
				boardGrid.forEach((row) => row.push(0));
				break;

			default:
		}
		this.setState({ boardGrid });
	};

	render() {
		const colNum = this.state.boardGrid[0].length;
		const rowNum = this.state.boardGrid.length;

		return (
			<div className="Container">
				<div className="Wrapper">
					<BoardGrid dimensions={this.props.board} />
					<div className="RowButtons">
						<button onClick={() => this.remove('y')} className="Btn">
							-
						</button>
						<input value={rowNum} type="number" />
						<button onClick={() => this.add('y')} className="Btn">
							+
						</button>
					</div>
				</div>

				<div className="ColumnButtons">
					<button onClick={() => this.remove('x')} className="Btn">
						-
					</button>
					<input value={colNum} type="number" />
					<button onClick={() => this.add('x')} className="Btn">
						+
					</button>
				</div>
			</div>
		);
	}
}
