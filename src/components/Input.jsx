import React from 'react';
import { connect } from 'react-redux';
import { fetchForismatic } from './../actions';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { _rank } = this.refs;
    this.props.dispatch(fetchForismatic());
    console.log(_rank.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>On a scale from 1-10, how sad are you?</p>
          <input ref="_rank"></input>
          <br/><br/>
          <button>Let's do this</button>
        </form>
      </div>
    );
  }
}

export default connect()(Input);
