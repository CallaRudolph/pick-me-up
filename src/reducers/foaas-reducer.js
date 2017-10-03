import constants from './../constants';
const { defaultState, types } = constants;

const foaas = (state = defaultState, action) => {
  let newFoaas;
  let newState;
  switch (action.type) {
    case types.REQUEST_FOAAS:
      newFoaas = {
        isFetching: true,
        issue: action.issue,
        name: action.name,
        foaasId: action.foaasId
      };
      newState = Object.assign({}, state, {
        [action.foaasId]: newFoaas
      });
      return newState;
    case types.DISPLAY_FOAAS:
      newFoaas = Object.assign({}, {
        isFetching: false,
        name: action.name,
        message: action.message,
        subtitle: action.subtitle,
        foaasId: action.foaasId
      });
      newState = Object.assign({}, {
        ["foaas"]: newFoaas
      });
      return newState;
    default:
      return state;
  }
}
export default foaas;
