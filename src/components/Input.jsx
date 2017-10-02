import React from 'react';
import { connect } from 'react-redux';
import { fetchForismatic } from './../actions';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.dispatch(fetchForismatic());
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Let's do this</button>
      </div>
    );
  }
}

export default connect()(Input);
