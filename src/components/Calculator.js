import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handlerclick = this.handlerclick.bind(this);
  }

  handlerclick(buttonName) {
    const { obj } = this.state;
    this.setState({ obj: calculate(obj, buttonName) });
  }

  render() {
    const { obj } = this.state;
    return (
      <div className="container">
        <div className="app-screen">{obj.next || obj.total || 0}</div>
        <div className="app-input">
          <button type="button" onClick={() => this.handlerclick('AC')}>AC</button>
          <button type="button" onClick={() => this.handlerclick('+/-')}>+/-</button>
          <button type="button" onClick={() => this.handlerclick('%')}>%</button>
          <button type="button" className="app-operator" onClick={() => this.handlerclick('÷')}>÷</button>
          <button type="button" onClick={() => this.handlerclick('7')}>7</button>
          <button type="button" onClick={() => this.handlerclick('8')}>8</button>
          <button type="button" onClick={() => this.handlerclick('9')}>9</button>
          <button type="button" className="app-operator" onClick={() => this.handlerclick('x')}>x</button>
          <button type="button" onClick={() => this.handlerclick('4')}>4</button>
          <button type="button" onClick={() => this.handlerclick('5')}>5</button>
          <button type="button" onClick={() => this.handlerclick('6')}>6</button>
          <button type="button" className="app-operator" onClick={() => this.handlerclick('-')}>-</button>
          <button type="button" onClick={() => this.handlerclick('1')}>1</button>
          <button type="button" onClick={() => this.handlerclick('2')}>2</button>
          <button type="button" onClick={() => this.handlerclick('3')}>3</button>
          <button type="button" className="app-operator" onClick={() => this.handlerclick('+')}>+</button>
          <button type="button" className="double-item" onClick={() => this.handlerclick('0')}>0</button>
          <button type="button" onClick={() => this.handlerclick('.')}>.</button>
          <button type="button" className="app-operator" onClick={() => this.handlerclick('=')}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
