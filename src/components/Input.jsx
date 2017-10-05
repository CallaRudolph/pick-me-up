import React from 'react';
import { connect } from 'react-redux';
import { fetchForismatic, fetchRon, fetchFoaas, fetchDog } from './../actions';
import { Button } from "react-bootstrap";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.showInputForm = this.showInputForm.bind(this);
    this.hideInputForm = this.hideInputForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showInputForm() {
    this.setState({formVisible: true});
  }

  hideInputForm() {
    this.setState({formVisible: false});
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
    this.props.dispatch(fetchDog());
  }

  render() {
    var button = {
      background: "rgba(20, 80, 54, .3)",
      color: "#1b6f1b",
      textShadow: "1px 0px 1px white",
      border: "1px solid grey",
      boxShadow: "1px 0px 1px 1px silver"
    }
    return (
      <div>
        <button onClick={() => {this.showInputForm()}}>come on in</button>
        <div>
          {this.state.formVisible &&
            <form onSubmit={this.handleSubmit}>
              <p>On a scale from 1-10, how sad are you?</p>
              <input type="number" min="1" max="10" ref="_rank"></input>
              <br/><br/>
              <p>Give me the name of someone or something that is currently bugging you:</p>
              <input ref="_issue"></input>
              <br/><br/>
              <p>And what's yr name?</p>
              <input ref="_name"></input>
              <br/><br/>
              <Button onClick={() => {this.hideInputForm()}} style={button}>Happiness awaits</Button>
            </form>
          }
        </div>
      </div>
    );
  }
}

export default connect()(Input);
