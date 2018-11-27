import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import Cell from '../../components/Cell/Cell';
import './counter.css';

const arr = [];

// for (let i = 0; i < 10; i++) {
//     const innerArr = [];
//     for (let j = 0; j < 10; j++) {
//         innerArr[j] = 'green'
//     }
//     arr.push(innerArr);
// }

class Counter extends Component {
    state = {
        counter: 0,
        cellColors: Array(100).fill('lightblue')
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {            
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }


    
    toggleColor = (idx) => {
        this.setState((prevState) => {
            const newColors = [...prevState.cellColors]
            newColors[idx] = prevState.cellColors[idx] === 'lightblue' ? 'red' : 'grey'

            return {
                cellColors: newColors
            }
        });
    }

    renderCells = () => {
         const arrayOfCells = this.props.cells.map((item, idx) => {
            return (<Cell key={item}  onClick={() => this.toggleColor(idx)} color={this.state.cellColors[idx]} idx={idx} />)
        })
        return arrayOfCells;
    }

    renderCellsXY = () => {
        
    }

    render () {
       const arrayOfCells = this.renderCells();
        return (
            <div className="counter">
                {arrayOfCells}
                {/* <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  /> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        cells: state.cells
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD'}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);