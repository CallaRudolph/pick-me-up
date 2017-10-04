const persistDataLocally = store => next => action => {
  // console.log(store.getState().note);
  next(action);
  localStorage["reduxStore"] = JSON.stringify(store.getState());
  console.log("Local Storage:", localStorage["reduxStore"]);
}

export default persistDataLocally;
