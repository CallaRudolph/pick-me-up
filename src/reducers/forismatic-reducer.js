import constants from './../constants';
const { defaultState, types } = constants;

const forismatic = (state = defaultState, action) => {
  let newForismatic;
  let newState;
  switch (action.type) {
    case types.REQUEST_FORISMATIC:
      newForismatic = {
        isFetching: true,
        forismaticId: action.forismaticId
      };
      newState = Object.assign({}, state, {
        [action.forismaticId]: newForismatic
      });
      return newState;
    case types.DISPLAY_FORISMATIC:
      newForismatic = Object.assign({}, {
        isFetching: false,
        quoteText: action.quoteText,
        quoteAuthor: action.quoteAuthor,
        forismaticId: action.forismaticId
      });
      newState = Object.assign({}, {
        ["forismatic"]: newForismatic
      });
      return newState;
    default:
      return state;
  }
}
export default forismatic;
