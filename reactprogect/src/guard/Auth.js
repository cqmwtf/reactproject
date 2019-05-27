import React from 'react';
import {Redirect,Route} from 'react-router-dom';


//路由守卫 条件 同步    应用场景 本地存储|文本存储|
//流程: user里面 取localStorage 取不到 去向login->取数据->存取localStorage->跳转到user
let AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>
    localStorage.getItem('rc_user') ?
      <Component {...props} data={JSON.parse(localStorage.getItem('rc_user'))} />
      : <Redirect to="/login" />
  }
  />
);




export default AuthRoute