import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });
  const handlerclick = (buttonName) => setState(({ obj }) => ({ obj: calculate(obj, buttonName) }));

  return (
    <div className="wrapper">
      <div className="calc-intro">Let&apos;s do some Math</div>
      <div className="container">
        <div className="app-screen">{state.obj.next || state.obj.total || 0}</div>
        <div className="app-input">
          <button type="button" onClick={() => handlerclick('AC')}>AC</button>
          <button type="button" onClick={() => handlerclick('+/-')}>+/-</button>
          <button type="button" onClick={() => handlerclick('%')}>%</button>
          <button type="button" className="app-operator" onClick={() => handlerclick('÷')}>÷</button>
          <button type="button" onClick={() => handlerclick('7')}>7</button>
          <button type="button" onClick={() => handlerclick('8')}>8</button>
          <button type="button" onClick={() => handlerclick('9')}>9</button>
          <button type="button" className="app-operator" onClick={() => handlerclick('x')}>x</button>
          <button type="button" onClick={() => handlerclick('4')}>4</button>
          <button type="button" onClick={() => handlerclick('5')}>5</button>
          <button type="button" onClick={() => handlerclick('6')}>6</button>
          <button type="button" className="app-operator" onClick={() => handlerclick('-')}>-</button>
          <button type="button" onClick={() => handlerclick('1')}>1</button>
          <button type="button" onClick={() => handlerclick('2')}>2</button>
          <button type="button" onClick={() => handlerclick('3')}>3</button>
          <button type="button" className="app-operator" onClick={() => handlerclick('+')}>+</button>
          <button type="button" className="double-item" onClick={() => handlerclick('0')}>0</button>
          <button type="button" onClick={() => handlerclick('.')}>.</button>
          <button type="button" className="app-operator" onClick={() => handlerclick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
