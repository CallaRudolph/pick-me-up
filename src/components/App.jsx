import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Display from './Display';
import About from './About';
import Footer from './Footer';
import Notes from './Notes';

function App(props) {
  var backgroundStyle = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999,
    fontFamily: "'Yanone Kaffeesatz', sans-serif"
  }
  return (
    <div style={backgroundStyle}>
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
