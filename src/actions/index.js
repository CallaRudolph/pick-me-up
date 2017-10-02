import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestForismatic = (forismaticId) => ({
  type: types.REQUEST_FORISMATIC,
  forismaticId: forismaticId
});

export function fetchForismatic() {
  return function (dispatch) {
    const forismaticId = v4();
    dispatch(requestForismatic(forismaticId));
    return fetch("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en"
    ).then(
      response => response.json(),
      error => console.log("A Forismatic error occurred.", error)
    ).then(function(json) {
      console.log(json)
    });
  };
}
