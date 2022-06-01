import React, { Component } from 'react';
import Calculator from './components/Calculator';
import Welcome from './components/welcome';
import Quote from './components/quote';
import Navbar from './components/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <>
        <Navbar />
        <Calculator />
        <Welcome />
        <Quote />
      </>
    );
  }
}

export default App;
