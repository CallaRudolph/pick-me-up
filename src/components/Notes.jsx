import React from 'react';
import TakeNotes from './TakeNotes';
import { connect } from 'react-redux';

const Notes = ({ notes }) => {
  var noteStyle = {
    marginTop: 20,
    color: "blue",
    paddingLeft: 8
  }
  return (
    <div>
      <TakeNotes/>
      <br/><br/><br/>
      <ul>
        {notes.map(function(note) {
          return <li className="panel panel-default list-unstyled" style={noteStyle} key={note.id}>{note.note}</li>
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
