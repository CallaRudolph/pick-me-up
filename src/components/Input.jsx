import React from 'react';
import { connect } from 'react-redux';
import { fetchForismatic, fetchRon, fetchFoaas, fetchDog } from './../actions';
import { Button } from "react-bootstrap";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      buttonVisible: true,
    };
    this.showInputForm = this.showInputForm.bind(this);
    this.hideInputForm = this.hideInputForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showInputForm() {
    this.setState({formVisible: true});
    this.setState({buttonVisible: false});
  }

  hideInputForm() {
    this.setState({formVisible: false});
    this.setState({buttonVisible: true});
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
    console.log("meep");
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    var button = {
      background: "rgba(20, 70, 54, .5)",
      color: "#efeadd",
      textShadow: "1px 0px 1px grey",
      border: "1px solid grey",
      boxShadow: "1px 0px 1px 1px silver",
      fontSize: 15,
      marginLeft: 10,
      height: 30,
      padding: 3,
      paddingBottom: 4
    }
    var text = {
      textShadow: "1px 0px 1px grey",
        fontSize: 19, 
    }
    var black = {
      color: "black"
    }
    var bigButton = {
      background: "rgba(20, 80, 54, .4)",
      color: "#efeadd",
      textShadow: "0px 1px 1px grey",
      border: "1px solid grey",
      boxShadow: "1px 0px 1px 0px silver",
      marginLeft: 400,
      width: 100,
      fontSize: 19
    }
    return (
      <div>
        {this.state.buttonVisible &&
          <Button style={bigButton} onClick={() => {this.showInputForm()}}>it gets better</Button>
        }
        <div>
          {this.state.formVisible &&
            <form style={text} onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <p>on a scale of 1-10, how sad are you?</p>
                  <input style={black} type="number" min="1" max="10" ref="_rank"></input>
                </div>
                <div className="col-md-4">
                  <p>someone or something that is currently bugging you:</p>
                  <input style={black} ref="_issue"></input>
                </div>
              </div>
              <br/>
              <p>your name?</p>
              <input style={black} ref="_name"></input>
              <Button onClick={() => {this.hideInputForm()}} style={button}>happiness awaits</Button>
            </form>
          }
        </div>
      </div>
    );
  }
}

export default connect()(Input);
