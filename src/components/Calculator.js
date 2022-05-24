import React, { Component } from 'react';

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
          <span>AC</span>
          <span>+/-</span>
          <span>%</span>
          <span className="app-operator">&divide;</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span className="app-operator">x</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span className="app-operator">-</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span className="app-operator">+</span>
          <span className="double-item">0</span>
          <span>.</span>
          <span className="app-operator">=</span>
        </div>
      </div>
    );
  }
}

export default Calculator;
