import React from "react";
import PropTypes from "prop-types";

function NoteDetail(props) {
  var time = {
    fontSize: 10
  }
  var note = {
    maxWidth: 651,
    boxShadow: "1px 1px green"
  }

  return(
    <div style={note} className="panel">
      <p className="panel-heading">{props.note}</p>
      <p style={time}><em>({props.date})</em></p>
    </div>
  )
}

NoteDetail.propTypes = {
  note: PropTypes.string,
  date: PropTypes.string
};

export default NoteDetail;
