import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';

const Display = ({ dispatch, responses }) => {
  return (
    <div>
      <p>Display</p>
      <Input/>
    </div>
  );
}

const mapStateToProps = state => {
  const responses = state;
  return {
    responses: responses
  };
};

export default connect(mapStateToProps)(Display);
