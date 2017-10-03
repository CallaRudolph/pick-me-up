import React from 'react';

class TakeNotes extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewNote = this.handleNewNote.bind(this);
  }

  handleNewNote(e) {
    e.preventDefault();
    let { _note } = this.refs;
    console.log(_note.value);
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

export default TakeNotes;
