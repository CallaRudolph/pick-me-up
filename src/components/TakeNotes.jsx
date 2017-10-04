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
        <h4>Sometimes it helps to write things out. Have a rage fest with yr keyboard here.</h4>
        <form onSubmit={this.handleNewNote}>
          <textarea rows="5" cols="90" ref="_note"></textarea>
          <br/>
          <button>let it go</button>
        </form>
      </div>
    );
  }
}

export default connect()(TakeNotes);
