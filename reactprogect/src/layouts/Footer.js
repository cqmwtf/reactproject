import React,{Component} from "react";
import '../assets/css/Footer.css'
import {NavLink} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="foot-btn">
                    <ul>
                        <li className="bookshelf">
                            <NavLink to="/Home"><span className="span">书架</span></NavLink>
                        </li>
                        <li className="Recommend">
                            <NavLink to="/Recommd"><span className="span">推荐</span></NavLink>
                        </li>
                        <li className="sort">
                            <NavLink to="/Sort"><span className="span">分类</span></NavLink>
                        </li>
                        <li className="my">
                            <NavLink to="/User"><span className="span">我的</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;