import React from 'react';
import TakeNotes from './TakeNotes';
import { connect } from 'react-redux';
import NoteDetail from './NoteDetail';

const Notes = ({ notes }) => {
  var noteStyle = {
    marginTop: 20,
    color: "grey",
    paddingLeft: 8,
    width: "50%"
  }

  return (
    <div>
      <TakeNotes/>
      <br/>
      {notes.map((note) =>
        <NoteDetail
          note={note.note}
          date={note.date}
          key={note.id}
          id={note.id}
        />
      )}
      <br/><br/><br/>
    </div>
  );
}

const mapStateToProps = state => {
  const notes = state.notes;
  return {
    notes: notes
  }
}

export default connect(mapStateToProps)(Notes);
