import React from 'react'
import './cell.css'

class Cell extends React.Component {

    handleClick = () => {
        // this.props.x
        const idx = this.props.idx;
        this.props.onClick(idx);
    }

    render() {
        return (<div className="cell" onClick={this.handleClick} style={{ backgroundColor: this.props.color }}></div>)
    }
}

export default Cell
