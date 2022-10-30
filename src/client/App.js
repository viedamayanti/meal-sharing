import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from './components/TestComponent/TestComponent';
import Home from './components/TestComponent/Home';

function App() {
  return (
    <Router>
      <Route exact path='/'></Route>
      <Route exact path='/lol'>
        <Home />
      </Route>
      <Route exact path='/test-component'>
        <TestComponent></TestComponent>
      </Route>
    </Router>
  );
}

export default App;
