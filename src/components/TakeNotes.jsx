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
      width: 150,
      marginLeft: 10,
      background: "rgba(20, 54, 54, .5)",
      color: "white",
      textShadow: "1px 0px 1px grey",
      border: "1px solid grey",
      fontSize: 16
    }
    var header = {
      color: "white",
      textShadow: "0px 0px 1px black"
    }
    var area = {
      resize: "none",
      borderRadius: 5,
      border: "2px solid white",
      fontSize: 20
    }
    var notes = {
      textAlign: "center"
    }
    return (
      <div style={notes}>
        <h2 style={header}>Sometimes it helps to write things out. Have a rage fest with yr keyboard here:</h2>
        <form>
          <textarea style={area} rows="4" cols="70" ref="_note"></textarea>
          <br/>
          <Button onClick={this.handleNewNote} bsSize="sm" style={button}>let it go</Button>
        </form>
      </div>
    );
  }
}

export default connect()(TakeNotes);
