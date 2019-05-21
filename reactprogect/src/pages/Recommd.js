import React,{Component} from "react";
import '../assets/css/Recommd.css'
import axios from 'axios'
import Swiper from "../components/Swiper";
import {Link} from "react-router-dom";

class Recommd extends Component {
    state={recommd:[]}
    render() {
        let dataName="Sort"
        // console.log(this.state.recommd)
        return (
            <div className="bbb">
                <Swiper/>

                <div id="recommd">
                    <ul>
                        <li>
                            <b className="ba"><img src="../img/faxian.png"/></b>
                            <span>免费</span>
                        </li>
                        <li>
                            <b className="ba"><img src="../img/deng.png"/></b>
                            <span>包月</span>
                        </li>
                        <li>
                            <b className="ba"><img src="../img/qizhi.png"/></b>
                            <span>榜单</span>
                        </li>
                        <li>
                            <b className="ba"><img src="../img/remen.png"/></b>
                            <span>经典</span>
                        </li>
                        <li>
                            <b className="ba"><img src="../img/biaoqian.png"/></b>
                            <span>完结</span>
                        </li>
                    </ul>
                    <div id="shurecommd">
                        <dl>
                            {this.state.recommd && this.state.recommd.map(item=>(
                                <Link
                                    key={item.id}
                                    to={{
                                        pathname:'/details/' + item.id,
                                        search:"?dataName=" + dataName
                                    }}
                                >
                                <dd>
                                    <img src={item.banner}/>
                                    <p>{item.title}</p>
                                    <span>{item.detail.auth}</span>
                                </dd>
                                </Link>
                                ))
                            }

                        </dl>
                        <dl>
                            {this.state.recommd && this.state.recommd.map(item=>(
                                <Link
                                    key={item.id}
                                    to={{
                                        pathname:'/details/' + item.id,
                                        search:"?dataName=" + dataName
                                    }}
                                >
                                <dd key={item.id}>
                                    <img src={item.banner}/>
                                    <p>{item.title}</p>
                                    <span>{item.detail.auth}</span>
                                </dd>
                                </Link>
                            ))
                            }

                        </dl>
                        <dl>
                            {this.state.recommd&&this.state.recommd.map(item=>(
                                <Link
                                    key={item.id}
                                    to={{
                                        pathname:'/details/' + item.id,
                                        search:"?dataName=" + dataName
                                    }}
                                >
                                <dd key={item.id}>
                                    <img src={item.banner}/>
                                    <p>{item.title}</p>
                                    <span>{item.detail.auth}</span>
                                </dd>
                                </Link>
                            ))
                            }
                        </dl>
                    </div>
                </div>
            </div>
        );
    }
    async componentDidMount() {
        let resrecommd = await axios({url:'/mock/banner',params:{_limit:4}});
        this.setState({
            recommd:resrecommd.data.page_data
        })
    }
}

export default Recommd;