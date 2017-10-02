import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("button clicked");
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
