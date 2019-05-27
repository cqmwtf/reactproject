import React,{Component} from "react";
import Loading from "../components/Loading";
import Column from "../pages/Column";

import axios from 'axios';
import Swiper from "../components/Swiper";
import connect from 'react-redux/es/connect/connect'
import { action1 } from '../store/actions'
class Home extends Component {
    render(){
        let {home,bLoading}=this.props
        return (
            <div className="Home">
                {bLoading && <Loading/>}
                <Swiper/>
                <Column cloumn={home} dataName="Home"></Column>
            </div>
        );
    }
    componentDidMount(){
        this.props.get({url:'/mock/banner',params:{_limit:10},typename:'UPDATE_HOME'})
    }
}

const State = state=>({
    home:state.home,
    bLoading:state.bLoading
})
const Dispatch = dispatch=>({
    get:({url,params,typename})=>dispatch(action1({
        dispatch,url,params,typename
    }))
})

  
  export default connect(State,Dispatch)(Home)
  