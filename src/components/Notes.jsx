import React from 'react';
import TakeNotes from './TakeNotes';
import { connect } from 'react-redux';

const Notes = ({ notes }) => {
  return (
    <div>
      <TakeNotes/>
    <ul>
      {notes.map(function(note) {
        return <li key={note.id}>{note.note}</li>
        })
      }
    </ul>
    </div>
  );
}

const mapStateToProps = state => {
  const notes = state.note;
  console.log(notes);
  return {
    notes: notes
  }
}

export default connect(mapStateToProps)(Notes);
