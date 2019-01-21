// react
import React from "react";
import ReactDOM from "react-dom";

// redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

// router根路由容器
import Layout from "./component/Layout/Layout";

// reducer
//import * as reducers from "./reducer";
const allReducer = combineReducers({
  //  ...reducers,
    routing: routerReducer,  // react-router所需要的reducer
});

// redux store
const store = createStore(
    allReducer,
    applyMiddleware(
        thunk,
    ),
);

// global css
import "./global.css";

// 渲染
ReactDOM.render(
    (
        <Provider store={store}>
            <Layout/>
        </Provider>
    ),
    document.getElementById('react-router-container')
);
