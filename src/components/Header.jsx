import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  var link = {
    paddingTop: 40,
    paddingRight: 15
  }
  var h2 = {
    paddingBottom: 10
  }
  var navbar = {
    backgroundColor: "#78BC61",
    opacity: .4,
    // zIndex: 1,
    // position: "relative"
  }
  var text = {
    // position: "absolute",
    // zIndex: -1,
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  }
  return (
    <div style={navbar} className="navbar navbar-default">
      <div style={text} className="container-fluid">
        <div className="navbar-header">
          <h2 style={h2}>Pick Me Up</h2>
        </div>
        <div style={link} className="nav navbar-nav navbar-right">
          <p><Link to="/about">About</Link> | <Link to="/">Get Well</Link> | <Link to="/notes">Notes</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Header;
