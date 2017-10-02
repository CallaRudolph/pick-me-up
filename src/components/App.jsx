import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Display from './Display';
import About from './About';

function App(props) {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path="/" component={Display}/>
        <Route path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
