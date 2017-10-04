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
    background: "rgba(20, 200, 54, .1)",
    borderBottom: "1px solid #E7E7E7",
    color: "#90c590",
    textShadow: "1px 1px grey"
  }
  return (
    <div style={navbar} className="navbar">
      <div className="container-fluid">
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
