import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';

const Display = ({ dispatch, forismatic, ron, foaas, dog }) => {
  let formAreaContent;
  const ronResponse = ron.ron;
  const foaasResponse = foaas.foaas;
  const dogResponse = dog.dog;
  var catStyle = {
    width: "300",
    height: "300"
  }
  var dogStyle = {
    paddingLeft: "10",
    maxWidth: "300",
    maxHeight: "300"
  }
  var name = {
    textTransform: "capitalize"
  }
  if (forismatic.forismaticId === 0) {
    formAreaContent =
    <div>
      <h4>I get it, life is tough sometimes. Come on in and let's get happy.</h4>
      <Input/>
    </div>
  } else {
    formAreaContent =
    <div>
      <h4>Sorry things are crappy today, <span style={name}>{foaasResponse.name}</span>. Ron Swanson has some thoughts for you:</h4>
      <ul>
        {ronResponse.ronQuotes[0].map(function(ronQuote) {
          return <li key={ronQuote}>{ronQuote}</li>
        })
      }
      </ul>
      <br/><br/><br/>
      <h4>Repeat this kind note in your head five times. Guaranteed to make things better:</h4>
      <h5>{foaasResponse.message}</h5>
      <h5>- <span style={name}>{foaasResponse.name}</span></h5>
      <br/>
      <a href="http://thecatapi.com"><img style={catStyle} src="http://thecatapi.com/api/images/get?format=src&type=gif"/></a>
      <img style={dogStyle} src={dogResponse.dogImage}/>
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
