import React, { Component } from 'react';
// import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="app-screen">0</div>
        <div className="app-input">
          <button type="submit" name="AC">AC</button>
          <button type="submit" name="+/-">+/-</button>
          <button type="submit" name="%">%</button>
          <button type="submit" name="÷" className="app-operator">÷</button>
          <button type="submit" name="7">7</button>
          <button type="submit" name="8">8</button>
          <button type="submit" name="9">9</button>
          <button type="submit" name="x" className="app-operator">x</button>
          <button type="submit" name="4">4</button>
          <button type="submit" name="5">5</button>
          <button type="submit" name="6">6</button>
          <button type="submit" name="-" className="app-operator">-</button>
          <button type="submit" name="1">1</button>
          <button type="submit" name="2">2</button>
          <button type="submit" name="3">3</button>
          <button type="submit" name="+" className="app-operator">+</button>
          <button type="submit" name="0" className="double-item">0</button>
          <button type="submit" name=".">.</button>
          <button type="submit" name="=" className="app-operator">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
