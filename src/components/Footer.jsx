import React from 'react';
import { connect } from 'react-redux';

const Footer = ({ dispatch, responses }) => {
  let formAreaContent;
  if (responses.forismaticId === 0) {
    formAreaContent = null
  } else {
    formAreaContent =
    <div>
      <p><em>"{responses.forismatic.quoteText}"</em> -{responses.forismatic.quoteAuthor}</p>
    </div>
  }
  var footer = {
    background: "rgba(20, 200, 54, .1)",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%",
    paddingTop: "5px",
    color: "white"
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
  const responses = state.forismatic;
  return {
    responses: responses
  };
};

export default connect(mapStateToProps)(Footer);
