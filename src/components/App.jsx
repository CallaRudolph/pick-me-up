import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Display from './Display';
import About from './About';
import Footer from './Footer';
import Notes from './Notes';

function App(props) {
  return (
    <div>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Display}/>
          <Route path="/about" component={About}/>
          <Route path="/notes" component={Notes}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
