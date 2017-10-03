import React from 'react';
import { connect } from 'react-redux';

const Footer = ({ dispatch, responses }) => {
  let formAreaContent;
  console.log(responses);
  if (responses.forismatic.forismaticId === 0) {
    formAreaContent = null
  } else {
    formAreaContent =
    <div>
      <p><em>"{responses.forismatic.forismatic.quoteText}"</em> -{responses.forismatic.forismatic.quoteAuthor}</p>
    </div>
  }
  var footer = {
    backgroundColor: "#78BC61",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%",
    paddingTop: "5px"
  };
  return (
    <div>
      <footer style={footer} className="footer">
        <div className="container">
          {formAreaContent}
        </div>
      </footer>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state.forismatic);
  const responses = state;
  return {
    responses: responses
  };
};

export default connect(mapStateToProps)(Footer);
