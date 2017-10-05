import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  var links = {
    paddingTop: 40,
    paddingRight: 15
  }
  var h2 = {
    paddingBottom: 10,
    fontFamily: "'Merienda One', cursive"
  }
  var navbar = {
    background: "rgba(20, 200, 54, .1)",
    borderBottom: "1px solid #E7E7E7",
    color: "#90c590",
    textShadow: "1px 1px grey"
  }
  var link = {
    color: "white",
    fontStyle: "italic",
    textShadow: "1px 1px black",
    fontSize: 14,
    paddingRight: 3,
    paddingLeft: 3
  }
  return (
    <div style={navbar} className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <h2 style={h2}>Pick Me Up</h2>
        </div>
        <div style={links} className="nav navbar-nav navbar-right">
          <p><Link style={link} to="/about">about this </Link> ... <Link style={link}  to="/">get well </Link> ... <Link style={link}  to="/notes">take notes</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Header;
