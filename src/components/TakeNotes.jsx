import React from 'react';
import { connect } from 'react-redux';
import { addNote } from './../actions';
import { Button } from "react-bootstrap";
import Moment from "moment";

class TakeNotes extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewNote = this.handleNewNote.bind(this);
  }

  handleNewNote(e) {
    e.preventDefault();
    let initialDate = new Moment();
    let date = initialDate.format("MMM Do, h:mm a");
    console.log(date);
    let { _note } = this.refs;
    if (!_note.value.trim()) {
      return;
    }
    this.props.dispatch(addNote(_note.value.trim(), date))
    _note.value = "";
  }

  render() {
    var button = {
      width: 300,
      marginLeft: 170
    }
    return (
      <div>
        <h4>Sometimes it helps to write things out. Have a rage fest with yr keyboard here.</h4>
        <form>
          <textarea rows="5" cols="90" ref="_note"></textarea>
          <br/>
          <Button onClick={this.handleNewNote} bsSize="sm" style={button}>let it go</Button>
        </form>
      </div>
    );
  }
}

export default connect()(TakeNotes);
