import React,{Component} from "react";
// import Swiper from "../components/Swiper";
import Column from "../pages/Column";

import axios from 'axios';
import Swiper from "../components/Swiper";
class Home extends Component {
    state={
        column:[],
        banners:[]
    };

    render() {
        return (
            <div className="Home">
                <Swiper/>
                <Column cloumn={this.state.column} dataName="Home"></Column>
            </div>
        );
    }
    async componentDidMount(){

        let resHome = await axios({url:'/mock/banner',params:{_limit:10}});
        this.setState({column:resHome.data.page_data,})

    }
}

export default Home;