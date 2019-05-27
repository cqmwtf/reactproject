import React,{Component} from "react";
import '../assets/css/Reg.css'
import {NavLink} from "react-router-dom";
import axios from 'axios'
import { action3 } from '../store/actions'
import connect from 'react-redux/es/connect/connect'


class Reg extends Component {
    state={
        username:"",
        password:""
    }
    render() {
        return (
            <div id="Reg">
                <p className="fhbtn">
                    <NavLink to="/User"></NavLink></p>
                <h1></h1>
                <div className="login-box">
                    <p className="lsolid"></p>
                    <div className="login">
                        <NavLink to="/Login">登录</NavLink>
                        <span></span>
                        <NavLink to="/Reg">注册</NavLink>
                    </div>
                    <p className="rsolid"></p>
                </div>
                <ul>
                    <li className="lifirst">
                        <input type="text" value={this.state.username} name="username" onChange={this.changeipt}/>
                        <span>帐号</span>
                    </li>
                    <li>
                        <input type="password" value={this.state.password} name="password" onChange={this.changeipt}/>
                        <span>密码</span>
                    </li>
                </ul>
                <div className="footbox">
                    <input type="button" value="注 册" className="login-btn" onClick={this.submit}/>
                    <a href="javascript:;" className="tishi">忘记密码？</a>
                </div>
            </div>
        );
    }
    changeipt=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }

    submit=async()=>{
        // let res = await axios({
        //     url:'/mock/reg',
        //     params:{
        //       username:this.state.username,
        //       password:this.state.password
        //     }
        //   });
      
        //   // console.log(res)
        //   if (res.data.error===0){
        //     //写入local && 跳转user
        //     localStorage.setItem('rc_user',JSON.stringify(res.data.page_data))
        //     this.props.history.push('/user')
        //   } else {
        //     alert('失败')
        //   }
        this.props.get({
            url:'/mock/reg',
            params: {
              username:this.state.username,
              password:this.state.password
            },
            typename:'UPDATE_USER'
          }).then(
            error => {
            //   console.log(error);
            if(error === 0){
                alert('注册成功，跳转登录页面')
                this.props.history.push('/login')
            }else{
                alert("注册失败，请重试")
            }
            }
          )


    }


}

const State = (state)=>({
    user:state.user
})

const Dispatch = (dispatch)=>({
    get:({url,method,data,typename})=>dispatch(action3({url,method,data,typename}))
})


export default connect(State,Dispatch)(Reg)