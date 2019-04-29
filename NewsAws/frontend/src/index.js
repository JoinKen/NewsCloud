import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware,compose } from 'redux';
import appReducers from "./Reducer/index";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// middware:thunk

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* redux hỗ trợ thêm một function là createStore,
với những combined reducer đã tạo trc để tạo ra một store
redux store dc khai báo là middleware, thành phần này có nhiệm vụ giữa khoảnh khắc dispath action 
và payload đến dc vs reducer
*/
const store = createStore(
    appReducers,
    composeEnhancers(
      applyMiddleware(thunk),
    )
  );
  
ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();

export default store;
