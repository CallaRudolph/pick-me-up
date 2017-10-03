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
    case types.DISPLAY_RON:
      newRon = Object.assign({}, {
        isFetching: false,
        ronQuotes: action.ronQuotes,
        ronId: action.ronId
      });
      newState = Object.assign({}, {
        ["ron"]: newRon
      });
      return newState;
    default:
      return state;
  }
}
export default ron;
