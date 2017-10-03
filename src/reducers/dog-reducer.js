import constants from './../constants';
const { defaultState, types } = constants;

const dog = (state = defaultState, action) => {
  let newDog;
  let newState;
  switch (action.type) {
    case types.REQUEST_DOG:
      newDog = {
        isFetching: true,
        dogId: action.dogId
      };
      newState = Object.assign({}, state, {
        [action.dogId]: newDog
      });
      return newState;
    // case types.DISPLAY_FORISMATIC:
    //   newForismatic = Object.assign({}, {
    //     isFetching: false,
    //     quoteText: action.quoteText,
    //     quoteAuthor: action.quoteAuthor,
    //     forismaticId: action.forismaticId
    //   });
    //   newState = Object.assign({}, {
    //     ["forismatic"]: newForismatic
    //   });
    //   return newState;
    default:
      return state;
  }
}
export default dog;
