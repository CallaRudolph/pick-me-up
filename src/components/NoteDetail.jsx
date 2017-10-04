import React from "react";
import PropTypes from "prop-types";
import { deleteNote } from './../actions';
import { connect } from 'react-redux';

class NoteDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeletingNote = this.handleDeletingNote.bind(this);
  }

  handleDeletingNote(noteId) {
    const { dispatch } = this.props;
    dispatch(deleteNote(noteId));
  }

  render() {
    var time = {
      fontSize: 10
    }
    var note = {
      maxWidth: 651,
      boxShadow: "1px 1px green"
    }
    return(
      <div style={note} className="panel">
        <p className="panel-heading">{this.props.note}</p>
        <p style={time}><em>({this.props.date})</em></p>
        <button onClick={() => {this.handleDeletingNote(this.props.id)}} >Remove Note</button>
      </div>
    );
  }
}

NoteDetail.propTypes = {
  note: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default connect()(NoteDetail);
