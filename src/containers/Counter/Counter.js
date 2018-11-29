import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import Cell from "../../components/Cell/Cell";
import "./counter.css";
import dataShip from "./shiplayout";

const arr = [];

class Counter extends Component {

 	renderCells = () => {
		const arrayOfCells = this.props.cells.map((item, idx) => {
			return (<Cell key={item} handleClick={this.props.onFire} color={this.props.cellColors[idx]} idx={idx} />);
		});
		return arrayOfCells;
 	};

  	render() {
		const arrayOfCells = this.renderCells();
		return  <div className="wrapper">
					<div className="counter">
						{arrayOfCells}
					</div>
					<div><button className="new-game-btn" onClick={this.props.onNewGame}> Start New Game </button></div>
				</div>;
  		}
}

const mapStateToProps = state => {
	return {
		...state,
		cells: state.cells,
		layout: state.layout,
		countShip: state.countShip,
		cellColors: state.cellColors
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFire: idx => dispatch({ type: "FIRE", payload: idx }),
		onNewGame: () => dispatch({ type: "NEWGAME" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

