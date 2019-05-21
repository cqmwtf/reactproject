import React,{Component} from "react";
import '../assets/css/Swiper.css'
import $ from 'jquery';
import Swipe from '../library/swipe';
import axios from "axios";
class Swiper extends Component {
    state={
        banners:[]
    }
    render() {
        // let {banners} = this.props;
        return (
            <div className="Swiper">

                <div className="banner">
                    <ul className="clearfix">
                        {
                            this.state.banners[0] && this.state.banners.map(item=>(
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
    componentDidMount() {
        axios({
            url:"/mock/banner"
        }).then((res)=>{
            this.setState({
                banners:res.data.page_data
            })
        })
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

export default Swiper;