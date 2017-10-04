import React from "react";
import PropTypes from "prop-types";

function NoteDetail(props) {
  return(
    <div>
      <p>{props.note}</p>
      <p><em>({props.date})</em></p>
      <hr/>
    </div>
  )
}

NoteDetail.propTypes = {
  note: PropTypes.string,
  date: PropTypes.string
};

export default NoteDetail;
