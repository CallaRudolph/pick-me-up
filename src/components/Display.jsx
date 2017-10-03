import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';

const Display = ({ dispatch, forismatic, ron }) => {
  let formAreaContent;
  const ronResponse = ron.ron;
  if (forismatic.forismaticId === 0) {
    formAreaContent =
    <div>
      <h4>I get it, life is tough sometimes. Come on in and let's get happy.</h4>
      <Input/>
    </div>
  } else {
    formAreaContent =
    <div>
      <h4>Sorry things are crappy today. Ron Swanson has some thoughts for you:</h4>
      <ul>
        {ronResponse.ronQuotes[0].map(function(ronQuote) {
          return <li key={ronQuote}>{ronQuote}</li>
        })
      }
      </ul>
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
  return {
    forismatic: forismatic,
    ron: ron
  };
};

export default connect(mapStateToProps)(Display);
