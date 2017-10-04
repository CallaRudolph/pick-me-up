import React from "react";
import ReactDOM from "react-dom";
import App from  "./components/App";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { HashRouter } from 'react-router-dom';
import reducer from './reducers';
import './images/favicon.ico';
import persistDataLocally from './middleware/persist-local-storage-data';
import { defaultState } from './constants/DefaultState';

const loggerMiddleware = createLogger();

let retrievedNote;
try {
    retrievedNote = localStorage.getItem("reduxStore");
  if (retrievedNote === null){
    retrievedNote = [];
  }
  retrievedNote = JSON.parse(retrievedNote);
} catch (err){
  retrievedNote = [];
}

defaultState.notes = retrievedNote;

const store = createStore(
  reducer,
  defaultState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    persistDataLocally
  )
);

ReactDOM.render(
 <Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>
 </Provider>,
 document.getElementById('react-app-root')
);
