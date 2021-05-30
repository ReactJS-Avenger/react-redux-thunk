import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { fetchGithubData } from "./actions";
import  thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

store.dispatch(fetchGithubData())

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
