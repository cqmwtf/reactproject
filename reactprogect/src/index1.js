import React from 'react';
import ReactDom from 'react-dom';
import TestStore from "./testApp-store/teststore"
import {Provider} from 'react-redux'
import store from './store'
ReactDom.render(
    //通过provider将store传给组件
    <Provider store={store}>
        <TestStore/>
    </Provider>
    ,
    document.querySelector('#root')
);