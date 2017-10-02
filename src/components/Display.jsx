import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';

const Display = ({ dispatch, responses }) => {
  let formAreaContent;
  if (responses.forismatic === undefined) {
    formAreaContent =
    <Input/>
  } else {
    formAreaContent =
    <div>
      <h3><em>"{responses.forismatic.quoteText}"</em></h3>
      <p>-{responses.forismatic.quoteAuthor}</p>
    </div>
  }
  return (
    <div>
      {formAreaContent}
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

export default connect(mapStateToProps)(Display);

// if ({responses.length} < 1) {
//   formAreaContent =
//     <div>
//       <Input/>
//     </div>
// } else {
//   formAreaContent =
//   <div>
//     <p><em>""</em></p>
//   </div>
// }
