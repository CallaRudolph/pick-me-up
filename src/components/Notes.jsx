import React from 'react';
import TakeNotes from './TakeNotes';
import { connect } from 'react-redux';

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
      {notes.map(function(note) {
        return <p className="panel panel-default" style={noteStyle} key={note.id}>{note.note} - ({note.date})</p>
        })
      }
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
