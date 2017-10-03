import React from 'react';
import TakeNotes from './TakeNotes';
import { connect } from 'react-redux';

const Notes = ({ notes }) => {
  return (
    <div>
      <p>Soon you'll be able to take notes here.</p>
      <TakeNotes/>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  const notes = state.note;
  return {
    notes: notes
  }
}

export default connect(mapStateToProps)(Notes);
