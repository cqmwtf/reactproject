import React,{Component} from "react";
import '../assets/css/Login.css'
import axios from 'axios'
import {NavLink} from "react-router-dom";

class Login extends Component {
    state={username:"",password:""}
    render() {
        return (
            <div id="Login">
                <p className="fhbtn"><NavLink to="/User"></NavLink></p>
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
                        <input type="text" value={this.state.username} name="username" onChange={this.change}/>
                        <span>帐号</span>
                    </li>
                    <li>
                        <input type="text" value={this.state.password} name="password" onChange={this.change}/>
                        <span>密码</span>
                    </li>
                </ul>
                <div className="footbox">
                    <input type="button" value="登 录" className="login-btn" onClick={this.submit}/>
                    <a href="javascript:;" className="tishi">忘记密码？</a>
                </div>
            </div>

        );
    }
    change=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    submit = async ()=>{
        let res = await axios({url:"/api/login",
            params:{
            "username":this.state.username,
            "password":this.state.password
                }
             }
            )
        if(res.data.error===0){
            localStorage.setItem('user',JSON.stringify(res.data))
            this.props.history.push('/User')
        }else {
            // alert("error")
            alert("登录失败")
        }
    }

}

export default Login;