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
    backgroundColor: "#78BC61"
  }
  return (
    <div style={navbar} className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <h2 style={h2}>Pick Me Up</h2>
        </div>
        <div style={link} className="nav navbar-nav navbar-right">
          <p><Link to="/about">About</Link> | <Link to="/">Get Well</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Header;
