import React from 'react';
import Square from './Square';

const boardGrid = (props) => (
	<div className="BoardGrid">
		{props.dimensions.map((row, index) => {
			return (
				<div key={index} className="SquareRow">
					{row.map((square) => {
						return <Square clicked={props.handleClick} />;
					})}
				</div>
			);
		})}
	</div>
);

export default boardGrid;
