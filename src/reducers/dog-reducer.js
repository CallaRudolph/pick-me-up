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
    case types.DISPLAY_DOG:
      newDog = Object.assign({}, {
        isFetching: false,
        dogImage: action.dogImage,
        dogId: action.dogId
      });
      newState = Object.assign({}, {
        ["dog"]: newDog
      });
      return newState;
    default:
      return state;
  }
}
export default dog;
