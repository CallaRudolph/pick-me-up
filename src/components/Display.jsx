import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';

const Display = ({ dispatch, responses }) => {
  return (
    <div>
      <p>Display</p>
      <Input/>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state.length);
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
