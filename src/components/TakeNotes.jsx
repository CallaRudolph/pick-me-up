import React from 'react';
import { connect } from 'react-redux';
import { addNote } from './../actions';

class TakeNotes extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewNote = this.handleNewNote.bind(this);
  }

  handleNewNote(e) {
    e.preventDefault();
    let { _note } = this.refs;
    if (!_note.value.trim()) {
      return;
    }
    this.props.dispatch(addNote(_note.value.trim()))
    _note.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewNote}>
          <textarea ref="_note"></textarea>
          <br/>
          <button>Mark it</button>
        </form>
      </div>
    );
  }
}

export default connect()(TakeNotes);
