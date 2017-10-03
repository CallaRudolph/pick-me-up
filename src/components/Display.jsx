import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';

const Display = ({ dispatch, forismatic, ron, foaas }) => {
  let formAreaContent;
  const ronResponse = ron.ron;
  const foaasResponse = foaas.foaas;
  if (forismatic.forismaticId === 0) {
    formAreaContent =
    <div>
      <h4>I get it, life is tough sometimes. Come on in and let's get happy.</h4>
      <Input/>
    </div>
  } else {
    formAreaContent =
    <div>
      <h4>Sorry things are crappy today, {foaasResponse.name}. Ron Swanson has some thoughts for you:</h4>
      <ul>
        {ronResponse.ronQuotes[0].map(function(ronQuote) {
          return <li key={ronQuote}>{ronQuote}</li>
        })
      }
      </ul>
      <h4>Repeat this kind note in your head five times. Guaranteed to make things better:</h4>
      <h5>{foaasResponse.message}</h5>
      <h5>{foaasResponse.subtitle}</h5>
      <a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&type=gif"/></a>
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
  return {
    forismatic: forismatic,
    ron: ron,
    foaas: foaas
  };
};

export default connect(mapStateToProps)(Display);
