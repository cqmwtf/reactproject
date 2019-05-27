import React,{Component} from "react";
import '../assets/css/Details.css';
import querystring from 'query-string'
import axios from 'axios'
import Loading from "../components/Loading";
import {action1} from "../store/actions";
import connect from "react-redux/es/connect/connect";

// import Cell from "../components/Cell";

class Details extends Component {
    state={
        data:{}
    }
    render() {
        let {details,bLoading}=this.props
        let data = this.state.data;
        // console.log(this.state.data)
        return (
            <div className="Details">
                {bLoading && <Loading/>}
                {/* {bLoading && <bLoading/>} */}
                <div className="nav">
                    <ul>
                        <li className="l-btn" onClick={()=>this.props.history.go(-1)}></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="header clear"><h2><img src={details.title && details.detail.auth_icon} alt=""/></h2><p>{details&&details.title}</p>
                    </div>
                    <div className="cont">
                        <div className="h3">内容简介</div>

                        <div className="text-box">{details.title && details.detail.content}
                        </div>
                    </div>
                </div>
                <div className="foot-btn">
                    <ul>
                        <li className="say"><a href="javascript:;">
                            <i></i><span>0</span>
                        </a></li>
                        <li className="zan"><a href="javascript:;">
                            <i></i><span>0</span>
                        </a></li>
                        <li className="xing"><a href="javascript:;">
                            <i></i>
                        </a></li>
                        <li className="fx"><a href="javascript:;">
                            <i></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        );
    }
    // async componentDidMount(){
    //     let id = this.props.match.params.id;

    //     let dataName = querystring.parse(this.props.location.search).dataName;
    //     console.log(querystring.parse(this.props.location.search))
    //     let res = await axios({url:`/mock/${dataName}/${id}`});
    //     // console.log(res.data.page_data.datail);
    //     this.setState({data:res.data.page_data})
    // }
    componentDidMount(){
        let id = this.props.match.params.id;
        let dataName = querystring.parse(this.props.location.search).dataName;
        this.props.get({url:`/mock/${dataName}/${id}`,typename:'UPDATA_DETAILS'})
    }
}

const State = state=>({
    details:state.details,
    bLoading:state.bLoading
})
const Dispatch = dispatch=>({
    get:({url,params,typename})=>dispatch(action1({
        dispatch,url,params,typename
    }))
})

  
  export default connect(State,Dispatch)(Details)