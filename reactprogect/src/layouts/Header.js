import React,{Component} from "react";
import '../assets/css/Header.css'
import Swiper from "../components/Swiper";
import {withRouter} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <div className="nav">
                <div className="form">
                    <input type="text" placeholder="公子有疾我有药"/>
                </div>
                <div className="search">搜索</div>
            </div>
        );
    }
}

export default withRouter(Header);