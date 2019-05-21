import React,{Component} from "react";
import '../assets/css/Reg.css'
import {NavLink} from "react-router-dom";
import axios from 'axios'
// import Cell from "../components/Cell";

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
        let formData = new FormData();
        formData.append("username", this.state.username);
        formData.append("password", this.state.password);
         let res = await axios({url:"/api/reg",data:formData,method:"POST"})
        if(res.data.error===0){
            localStorage.setItem('url',JSON.stringify(res.data));
            this.props.history.push("/login");
        }else {
            alert("注册重名")
        }
    }


}

export default Reg;