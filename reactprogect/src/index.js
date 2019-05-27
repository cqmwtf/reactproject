import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Route} from "react-router-dom"

import './assets/css/base.css';//基础样式引入
import './library/font';
import {Provider} from 'react-redux';
import store from "./store";

import App from './layouts/App'

ReactDom.render(
    <Provider store={store}>
    <BrowserRouter>
        <Route component={App}/>
    </BrowserRouter>
    </Provider>
    ,
    document.querySelector('#root')
);