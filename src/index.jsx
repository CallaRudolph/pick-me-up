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

const loggerMiddleware = createLogger();

let retrievedState;
try {
    retrievedState = localStorage.getItem("reduxStore");
  if (retrievedState === null){
    retrievedState = [];
  }
  retrievedState = JSON.parse(retrievedState);
} catch (err){
  retrievedState = [];
}

const store = createStore(
  reducer,
  retrievedState,
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
