import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from './components/TestComponent/TestComponent';
import Home from './components/TestComponent/Home';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/lol'>
        <h1> lol</h1>
      </Route>
      <Route exact path='/test-component'>
        <TestComponent></TestComponent>
      </Route>
    </Router>
  );
}

export default App;
