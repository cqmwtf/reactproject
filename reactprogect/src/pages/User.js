import React,{Component} from "react";
import '../assets/css/User.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

class User extends Component {
    render() {
        return (
            <div id="content">
                <div id="header">
                    <h2><img src="../img/headimg.png" alt=""/></h2>
                    <div className="user-box">
                        <NavLink to="/Login">登录</NavLink>
                        <NavLink to="/Reg">注册</NavLink>
                        <input type="button" value="注销" onClick={this.remove}/>
                    </div>
                    <ul className="clear">
                        <li>
                            <span>0</span>
                            <p>书币</p>
                        </li>
                        <li>
                            <span>0</span>
                            <p>书劵</p>
                        </li>
                        <li>
                            <span>0</span>
                            <p className="end">花币</p>
                        </li>
                    </ul>
                </div>
                <div className="active_myself">
                    <ul>
                        <li>
                            <div className="active_box">
                                <b id="b1"></b>
                                <NavLink to="/Home">主页</NavLink>
                            </div>
                        </li>
                        <li>
                            <div className="active_box">
                                <b id="b2"></b>
                                <a href="javacript:;">账户</a>
                            </div>
                        </li>
                        <li>
                            <div className="active_box">
                                <b id="b3"></b>
                                <a href="javacript:;">充值</a>
                            </div>
                        </li>
                        <li>
                            <div className="active_box">
                                <b id="b4"></b>
                                <a href="javacript:;">消息</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="docList">
                    <ul>
                        <li className="gk-text">
                            <i></i>
                            <p>今日任务</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className="mm-text">
                            <i></i>
                            <p>活动专区</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className="cg-text">
                            <i></i>
                            <p>激活码兑换</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className="sc-text">
                            <i></i>
                            <p>收藏夹</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className="my_cz">
                            <i></i>
                            <p>我的超值包</p>
                        </li>
                        <li className="sc-text">
                            <i></i>
                            <p>我的收藏</p>

                        </li>
                    </ul>
                </div>
            </div>
        );
    }
    remove=async()=>{
        let res = await axios({url:"/api/logout",method:"PUT"})
        if(res.data.error===0){
            // console.log(1)
            localStorage.removeItem("user")
            this.props.history.push("/home");
        }else {
            alert("注销失败")
        }
    }
}

export default User;