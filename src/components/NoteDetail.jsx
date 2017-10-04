import React from "react";
import PropTypes from "prop-types";

function NoteDetail(props) {
  var time = {
    fontSize: 10
  }
  
  return(
    <div className="panel">
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
