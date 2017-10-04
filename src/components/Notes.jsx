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
      <br/><br/><br/>
      {notes.map((note) =>
        <NoteDetail
          note={note.note}
          date={note.date}
          key={note.id}
          id={note.id}
        />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  const notes = state.note;
  return {
    notes: notes
  }
}

export default connect(mapStateToProps)(Notes);
