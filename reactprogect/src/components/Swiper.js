import React,{Component} from "react";
import '../assets/css/Swiper.css'
import $ from 'jquery';
import Swipe from '../library/swipe';
import axios from "axios";
import {action1} from "../store/actions"
import connect from 'react-redux/es/connect/connect'
class Swiper extends Component {
    state={
        banners:[]
    }
    render() {
        let {banner} = this.props;
        return (
            <div className="Swiper">

                <div className="banner">
                    <ul className="clearfix">
                        {
                            banner[0] && banner.map(item=>(
                                <li
                                    key={item.id}
                                >
                                    <img src={item.banner} />
                                    <div className="text-box">
                                        <h2>{item.title}</h2>
                                        <p>{item.sub_title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        );
    }
    // componentDidMount() {
    //     axios({
    //         url:"/mock/banner"
    //     }).then((res)=>{
    //         this.setState({
    //             banners:res.data.page_data
    //         })
    //     })
    // }
    componentDidMount(){
        this.props.get({url:"/mock/banner",typename:'UPDATA_BANNER'})
    }
    componentDidUpdate(){
        let mySwipe=new Swipe($('.banner')[0],{
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function (index,element){
                $('.banner ol li').removeClass('active');
                $('.banner ol li').eq(index).addClass('active');
            }
        })
    }
}

const State = state=>({
    banner:state.banner,
    // bLoading:state.bLoading
})
const Dispatch = dispatch=>({
    get:({url,params,typename})=>dispatch(action1({
        dispatch,url,params,typename
    }))
})

  
  export default connect(State,Dispatch)(Swiper)