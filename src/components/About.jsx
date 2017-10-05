import React from 'react';

function About(props) {
  var about = {
    color: "white"
  }
  var link = {
    color: "white",
    fontStyle: "italic",
    textShadow: "1px 1px black"
  }
  var me = {
    fontSize: 10,
    float: "right",
  
  }
  return (
    <div style={about}>
      <p>Not every day can be as lovely as the one where you had a banana split and got hugged by yr Momma. If things are rough out there, check in with a Pick Me Up.</p>
      <p>Special shout out to some cool APIs:</p>
      <ul>
        <li><a style={link} href="https://forismatic.com/en/api/">Forismatic</a></li>
        <li><a style={link} href="http://thecatapi.com/">The Cat API</a></li>
        <li><a style={link} href="https://www.foaas.com/">F.O.A.A.S.</a></li>
        <li><a style={link} href="https://github.com/jamesseanwright/ron-swanson-quotes">Ron Swanson Quotes</a></li>
        <li><a style={link} href="https://www.thedogapi.co.uk/documentation.php">The Dog API</a></li>
      </ul>
      <br/><br/><br/>
      <p style={me}>created by Calla Rudolph. view some of my <a style={link} href="https://github.com/CallaRudolph">projects</a> or contact me on <a style={link} href="https://www.linkedin.com/in/calla-rudolph/">LinkedIn</a></p>
    </div>
  );
}

export default About;
