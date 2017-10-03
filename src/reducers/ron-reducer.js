import constants from './../constants';
const { defaultState, types } = constants;

const ron = (state = defaultState, action) => {
  let newRon;
  let newState;
  switch (action.type) {
    case types.REQUEST_RON:
      newRon = {
        isFetching: true,
        rank: action.rank,
        ronId: action.ronId
      };
      newState = Object.assign({}, state, {
        [action.ronId]: newRon
      });
      return newState;
    default:
      return state;
  }
}
export default ron;
