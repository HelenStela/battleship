import React, { Component } from 'react';
import Counter from './containers/Counter/Counter';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  // create_lalala_handler = (...args) => {
  //   return () => {
  //     // ...
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Counter className = "counter" />
        {/* <Cell onClick={this.create_lalala_handler(pos)} /> */}
      </div>
    );
  }
}

export default App;
