import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import Cell from '../../components/Cell/Cell';
import './counter.css';
import dataShip from './shiplayout';

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
        cellColors: Array(100).fill('lightblue'),
        layout : dataShip,
        countShip: 5
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
        const x = Math.floor(idx/10);
        const y = idx-x*10;
        console.log ("x=" + x + " y=" + y);
        this.setState((prevState) => {
            const newColors = [...prevState.cellColors];     
            const newLayout = [...prevState.layout];
            let resultSheep = null;
            let toDestroy = false;
            prevState.layout.map(ship => {
                console.log("isDestroyed "+ ship.isDestroyed)
                if (ship.isDestroyed==='false'){                  
                    for (let i = 0; i < ship.positions.length; i++){                       
                        if ((ship.positions[i][0]===x)&&(ship.positions[i][1]===y)&&(ship.positions[i][2] === 0)){                           
                            ship.positions[i][2] = '1';
                            console.log("ship.positions["+i+"][2] ="+ship.positions[i][2])
                            newColors[idx] = 'red';
                            resultSheep = ship;                          
                            ship.alive--;
                            console.log("alive:"+ ship.alive)
                            if (ship.alive === 0){
                                toDestroy = true;
                                resultSheep.isDestroyed = true;
                            }                         
                        }     
                    }
                }
            });
            if ((resultSheep)&&(toDestroy)) {
                console.log("toDestroy "+resultSheep.ship)
                resultSheep.positions.map(position => {
                    const num = position[0]*10+position[1];
                    newColors[num] = 'black';
                })                
            } else if (resultSheep){
                  newLayout[resultSheep.index] = resultSheep;
            }
            else {
                newColors[idx] = prevState.cellColors[idx]==='lightblue' ? 'grey': (prevState.cellColors[idx]==='black' ? 'black' : 'grey')
            }

            return {
                cellColors: newColors,
                layout: newLayout
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
        cells: state.cells,
        layout: state.layout,
        countShip: state.countShip
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