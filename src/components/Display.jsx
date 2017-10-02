import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';

const Display = ({ dispatch, responses }) => {
  return (
    <div>
      <p><em>"{responses.forismatic.quoteText}"</em></p>
      <Input/>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  const responses = state;
  return {
    responses: responses
  };
};

export default connect(mapStateToProps)(Display);
