import React from 'react';
import { connect } from 'react-redux';
import { fetchForismatic } from './../actions';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.dispatch(fetchForismatic());
    var newClick = 1;
    this.setState({click: newClick})
  }

  render() {
    let formAreaContent;
    if (this.state.click === 0) {
      formAreaContent =
      <div>
        <button onClick={this.handleSubmit}>Let's do this</button>
      </div>
    } else {
      formAreaContent = null
    }
    return (
      <div>
        {formAreaContent}
      </div>
    );
  }
}

export default connect()(Input);
