import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
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
        <Router>
          <Routes>
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Quote" element={<Quote />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
