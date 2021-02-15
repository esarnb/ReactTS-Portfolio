import React from 'react';
import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducer from "./store/reducers";

import App from './App';
// import './index.css';

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
