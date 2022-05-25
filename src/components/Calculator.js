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
          <button type="submit">+/-</button>
          <button type="submit">%</button>
          <button type="submit" className="app-operator">÷</button>
          <button type="submit">7</button>
          <button type="submit">8</button>
          <button type="submit">9</button>
          <button type="submit" className="app-operator">x</button>
          <button type="submit">4</button>
          <button type="submit">5</button>
          <button type="submit">6</button>
          <button type="submit" className="app-operator">-</button>
          <button type="submit">1</button>
          <button type="submit">2</button>
          <button type="submit">3</button>
          <button type="submit" className="app-operator">+</button>
          <button type="submit" className="double-item">0</button>
          <button type="submit">.</button>
          <button type="submit" className="app-operator">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
