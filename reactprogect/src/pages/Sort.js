import React,{Component} from "react";
import '../assets/css/Sort.css'
import axios from 'axios'
// import Cell from "../components/Cell";
import Swiper from "../components/Swiper";
import {Link} from "react-router-dom";
import {action1} from "../store/actions"
import Loading from "../components/Loading";
import connect from 'react-redux/es/connect/connect'
class Sort extends Component {
    state={sort:[]}
    render(){
        let {bLoading,sort} =this.props
        let dataName="Sort"
        return (
            <div className="Sort">
                {bLoading && <Loading/>}
                <Swiper/>
                <div className="tuijian">
                    <ul>
                        {
                            sort && sort.map(item=>(
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
    // async componentDidMount() {
    //     let ressort = await axios({url:'/mock/banner',params:{_limit:18}})
    //     this.setState({
    //         sort:ressort.data.page_data
    //     })
    // }
    componentDidMount(){
        this.props.get({url:'/mock/banner',params:{_limit:18},typename:'UPDATA_SORT'})
    }
}

const State = state=>({
    sort:state.sort,
    bLoading:state.bLoading
})
const Dispatch = dispatch=>({
    get:({url,params,typename})=>dispatch(action1({
        dispatch,url,params,typename
    }))
})

  
  export default connect(State,Dispatch)(Sort)