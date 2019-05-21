import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom"

import './assets/css/base.css';//基础样式引入
import './library/font';

import App from './layouts/App'

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,
    document.querySelector('#root')
);