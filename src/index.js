import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/Store"
import createSagaMiddleware from "redux-saga"
import configureStore, { MiddlewareArray } from "@reduxjs/toolkit"

const saga= createSagaMiddleware()
const store= configureStore({
  reducer:{},
  Middleware:[saga]
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);