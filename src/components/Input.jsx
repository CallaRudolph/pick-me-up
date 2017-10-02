import React from 'react';
import { connect } from 'react-redux';
imprt { fetchResponse } from './../actions';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.dispatch(fetchResponse());
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Let's do this</button>
      </div>
    );
  }
}

export default Input;
