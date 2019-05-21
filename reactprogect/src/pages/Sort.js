import React,{Component} from "react";
import '../assets/css/Sort.css'
import axios from 'axios'
// import Cell from "../components/Cell";
import Swiper from "../components/Swiper";
import {Link} from "react-router-dom";
class Sort extends Component {
    state={sort:[]}
    render(){
        let dataName="Sort"
        return (
            <div className="Sort">
                <Swiper/>
                <div className="tuijian">
                    <ul>
                        {
                            this.state.sort&&this.state.sort.map(item=>(
                                <Link
                                    key={item.id}
                                    to={{
                                        pathname:'/details/' + item.id,
                                        search:"?dataName=" + dataName
                                    }}
                                >
                                    <li key={item.id}>
                                        <img src={item.banner}/>
                                        <span>{item.title}</span>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
    async componentDidMount() {
        let ressort = await axios({url:'/mock/banner',params:{_limit:18}})
        this.setState({
            sort:ressort.data.page_data
        })
    }
}
export default Sort;