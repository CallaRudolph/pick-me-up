import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';

const Display = ({ dispatch, forismatic, ron, foaas, dog }) => {
  let formAreaContent;
  const ronResponse = ron.ron;
  const foaasResponse = foaas.foaas;
  const dogResponse = dog.dog;
  var catStyle = {
    width: 300,
    height: 300,
    marginBottom: 20
  }
  var dogStyle = {
    paddingLeft: 10,
    paddingRight: 10,
    maxWidth: 300,
    maxHeight: 300,
    marginBottom: 20
  }
  var name = {
    textTransform: "capitalize"
  }
  var center = {
    textAlign: "center"
  }
  var content = {
    color: "white",
    fontSize: 17,
    textShadow: "1px 1px 1px grey"
  }
  var h2 = {
    textShadow: "1px 1px 1px grey"
  }
  var list = {
    fontSize: 20
  }
  if (forismatic.forismaticId === 0) {
    formAreaContent =
    <div style={content}>
      <h2 style={h2}>I get it, life is tough sometimes. Come on in and let's get happy.</h2>
      <br/>
      <Input/>
    </div>
  } else {
    formAreaContent =
    <div style={content}>
      <h2>Sorry things are crappy today, <span style={name}>{foaasResponse.name}</span>. Ron Swanson has some thoughts for you:</h2>
      <ul>
        {ronResponse.ronQuotes[0].map(function(ronQuote) {
          return <li style={list} className="list-unstyled" key={ronQuote}>{ronQuote}</li>
        })
      }
      </ul>
      <hr/>
      <br/>
      <h2>Repeat this kind note in your head five times. Guaranteed to make things better:</h2>
      <h3><em>"{foaasResponse.message}"</em></h3>
      <h3>- <span style={name}>{foaasResponse.name}</span></h3>
      <br/>
      <hr/>
      <div style={center}>
        <a href="http://thecatapi.com"><img style={catStyle} src="http://thecatapi.com/api/images/get?format=src&type=gif"/></a>
        <img style={dogStyle} src={dogResponse.dogImage}/>
        <a href="http://thecatapi.com"><img style={catStyle} src="http://thecatapi.com/api/images/get?format=src&type=gif"/></a>
        <br/><br/><br/>
      </div>
    </div>
  }
  return (
    <div>
      {formAreaContent}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  const forismatic = state.forismatic;
  const ron = state.ron;
  const foaas = state.foaas;
  const dog = state.dog;
  return {
    forismatic: forismatic,
    ron: ron,
    foaas: foaas,
    dog: dog
  };
};

export default connect(mapStateToProps)(Display);
