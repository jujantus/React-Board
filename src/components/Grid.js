import React from 'react';
import BoardGrid from './BoardGrid';
import '../App.css';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Container">
				<div className="Wrapper">
					<BoardGrid
						cases={this.props.cases}
						handleClick={this.props.handleClick}
						dimensions={this.props.board}
					/>
					{/* <div className="RowButtons">
						<button onClick={() => this.props.remove('y')} className="Btn">
							-
						</button>
						<input value={rowNum} type="number" />
						<button onClick={() => this.props.add('y')} className="Btn">
							+
						</button>
					</div> */}
				</div>

				{/* <div className="ColumnButtons">
					<button onClick={() => this.props.remove('x')} className="Btn">
						-
					</button>
					<input value={colNum} type="number" />
					<button onClick={() => this.props.add('x')} className="Btn">
						+
					</button>
				</div> */}
			</div>
		);
	}
}
