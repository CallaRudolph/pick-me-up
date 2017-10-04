import React from "react";
import PropTypes from "prop-types";
import { deleteNote } from './../actions';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";

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
    var button = {
      width: 100,
      float: "right",
      marginRight: 25,
      marginBottom: 10,
      fontSize: 11
    }
    return(
      <div style={note} className="panel">
        <p className="panel-heading">{this.props.note}</p>
        <div className="row">
          <p className="col-md-6" style={time}><em>({this.props.date})</em></p>
          <Button style={button} className="col-md-6" bsSize="xs" onClick={() => {this.handleDeletingNote(this.props.id)}} >Remove Note</Button>
        </div>
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