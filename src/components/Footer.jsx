import React from 'react';

function Footer(props) {
  var footer = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%",
    paddingTop: "5px"
  };
  return (
    <div>
      <footer style={footer} className="footer">
        <div className="container">
          <p><em>Feet</em></p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
