import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <h2>Pick Me Up</h2>
      <div className="nav navbar-nav navbar-right">
            <h4><Link to="/about">About</Link> | <Link to="/">Get Well</Link></h4>
          </div>
    </div>
  );
}

export default Header;
