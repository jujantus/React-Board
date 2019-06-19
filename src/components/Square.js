import React from 'react';

const square = (props) => (
	<div className="Square" onClick={() => props.clicked(props.row, props.col)}>
		{props.cases[props.value] !== null ? <img alt="Square" src={props.cases[props.value]} /> : null}
	</div>
);

export default square;
