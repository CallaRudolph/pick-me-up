import React from 'react';
import { connect } from 'react-redux';
import { fetchForismatic, fetchRon, fetchFoaas } from './../actions';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { _rank, _issue, _name } = this.refs;
    if (!_issue.value.trim()) {
      return;
    }
    if (!_name.value.trim()) {
      return;
    }
    this.props.dispatch(fetchForismatic());
    this.props.dispatch(fetchRon(_rank.value));
    this.props.dispatch(fetchFoaas(_issue.value.trim(), _name.value.trim()));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>On a scale from 1-10, how sad are you?</p>
          <input ref="_rank"></input>
          <br/><br/>
          <p>Give me the name of someone or something that is currently bugging you:</p>
          <input ref="_issue"></input>
          <br/><br/>
          <p>And what's yr name?</p>
          <input ref="_name"></input>
          <br/><br/>
          <button>Let's do this</button>
        </form>
      </div>
    );
  }
}

export default connect()(Input);
