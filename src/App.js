import React from 'react';
import Grid from './components/Grid';
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
		};
	}

	render() {
		return <Grid board={this.state.board} />;
	}
}
