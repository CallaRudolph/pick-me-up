import React from 'react';

function About(props) {
  var about = {
    color: "white"
  }
  return (
    <div style={about}>
      <p>Not every day can be as lovely as the one where you had a banana split and got hugged by yr Momma. If things are rough out there, check in with a Pick Me Up.</p>
      <p>Special shout out to some cool APIs:</p>
      <ul>
        <li><a href="https://forismatic.com/en/api/">Forismatic</a></li>
        <li><a href="http://thecatapi.com/">The Cat API</a></li>
        <li><a href="https://www.foaas.com/">F.O.A.A.S.</a></li>
        <li><a href="https://github.com/jamesseanwright/ron-swanson-quotes">Ron Swanson Quotes</a></li>
        <li><a href="https://www.thedogapi.co.uk/documentation.php">The Dog API</a></li>
      </ul>
    </div>
  );
}

export default About;
