import React from 'react';
import { connect } from 'react-redux';
import { fetchForismatic, fetchRon, fetchFoaas, fetchDog } from './../actions';
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formModalVisible: false};
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showFormModal() {
    this.setState({formModalVisible: true});
  }

  hideFormModal() {
    this.setState({formModalVisible: false});
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
    return (
      <div>
        <form>
          <p>On a scale from 1-10, how sad are you?</p>
          <input type="number" ref="_rank"></input>
          <br/><br/>
          <p>Give me the name of someone or something that is currently bugging you:</p>
          <input ref="_issue"></input>
          <br/><br/>
          <p>And what's yr name?</p>
          <input ref="_name"></input>
          <br/><br/>
          <Button
            bsStyle="success"
            onClick={this.handleSubmit}>
            Happiness awaits
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(Input);
