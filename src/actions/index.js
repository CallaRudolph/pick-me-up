import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const requestForismatic = (forismaticId) => ({
  type: types.REQUEST_FORISMATIC,
  forismaticId: forismaticId
});

export const displayForismatic = (quoteText, quoteAuthor, forismaticId) => ({
  type: types.DISPLAY_FORISMATIC,
  quoteText,
  quoteAuthor,
  forismaticId
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
      if (json.quoteAuthor !== "") {
        const quoteText = json.quoteText.trim();
        const quoteAuthor = json.quoteAuthor.trim();
        dispatch(displayForismatic(quoteText, quoteAuthor, forismaticId));
      } else {
        console.log("error")
      }
    });
  };
}

export const requestRon = (rank, ronId) => ({
  type: types.REQUEST_RON,
  rank: rank,
  ronId: ronId
});

export function fetchRon(rank) {
  return function (dispatch) {
    const ronId = v4();
    dispatch(requestRon(rank, ronId));
    return fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes/" + rank
    ).then(
      response => response.json(),
      error => console.log("A Ron error occurred.", error)
    ).then(function(json) {
      console.log(json);
    });
  };
}
