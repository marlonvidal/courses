import React from "react";
import { Provider, applyMiddleware } from "react-redux";
import { createStore } from "redux";
//import reduxPromise from "redux-promise";
import reducers from "reducers";
import async from 'middlewares/async'

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async)
  );
  
  return <Provider store={store}>{children}</Provider>;
};
