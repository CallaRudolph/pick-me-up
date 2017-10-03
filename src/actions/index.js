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
        console.log("forismatic error");
      }
    });
  };
}

export const requestRon = (rank, ronId) => ({
  type: types.REQUEST_RON,
  rank: rank,
  ronId: ronId
});

export const displayRon = (ronQuotes, ronId) => ({
  type: types.DISPLAY_RON,
  ronQuotes,
  ronId
});

export function fetchRon(rank) {
  return function (dispatch) {
    const ronQuotes = [];
    const ronId = v4();
    dispatch(requestRon(rank, ronId));
    return fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes/" + rank
    ).then(
      response => response.json(),
      error => console.log("A Ron error occurred.", error)
    ).then(function(json) {
      if (json[0] != "0") {
        ronQuotes.push(json);
        dispatch(displayRon(ronQuotes, ronId));
      } else {
        ronQuotes.push(["A zero? Yr not really sad then..."]);
        dispatch(displayRon(ronQuotes, ronId));
      }
    });
  };
}

export const requestFoaas = (issue, name, foaasId) => ({
  type: types.REQUEST_FOAAS,
  issue: issue,
  name: name,
  foaasId: foaasId
});

export const displayFoaas = (name, message, subtitle, foaasId) => ({
  type: types.DISPLAY_FOAAS,
  name,
  message,
  subtitle,
  foaasId
});

export function fetchFoaas(issue, name) {
  return function (dispatch) {
    let messagePeriod;
    let message;
    let subtitle;
    const foaasId = v4();
    dispatch(requestFoaas(issue, name, foaasId));
    return fetch("http://foaas.com/nugget/" + issue + "/" + name, {
      headers : {
        'Accept': 'application/json'
      }}).then(
      response => response.json(),
      error => console.log("A Foaas error occurred.", error)
    ).then(function(json) {
      if (json.message != []) {
        messagePeriod = json.message;
        message = messagePeriod.replace(/\./g, "?");
        subtitle = json.subtitle;
        dispatch(displayFoaas(name, message, subtitle, foaasId));
      } else {
        console.log("foaas error");
      }
    });
  };
}
