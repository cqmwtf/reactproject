import React,{Component} from "react";
// import '../assets/css/App.css'
import Header from "./Header";
import Footer from "./Footer";

import { Switch, Route, Redirect} from 'react-router-dom'
import Home from "../pages/Home";
import Recommd from "../pages/Recommd";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Details from "../pages/Details";
import Sort from "../pages/Sort";
import Error from "../pages/Error";
import AuthRoute from "../guard/Auth";
import Loading from "../components/Loading";


class App extends Component {
    constructor(props){
        super();
        this.state = {
            bLoading: false,
            bNav:true,
            bFooter:true
          }
    }
    componentWillReceiveProps(nextprops){
        // console.log(nextprops)
        let path = nextprops.location.pathname;
        this.changepath(path)
    }
    componentDidMount(){
        let path = this.props.location.pathname;
        this.changepath(path)
    }
    changepath=(path)=>{
        if(/home|recommd|Sort/.test(path)){
            this.setState({bNav:true,bFooter:true})
        }
        if(/details|Login|reg/.test(path)){
            this.setState({bNav:false,bFooter:false})
        }
        if(/User/.test(path)){
            this.setState({bNav:false,bFooter:true})
        }
    }
    render() {
        return (
            <>
             {this.state.bLoading && <Loading/>}
                {this.state.bNav && <Header/>}
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/follow" component={Recommd}/>
                    <Route path="/sort" component={Sort}/>
                    <Route path="/column" component={Column}/>
                    <AuthRoute path="/user" component={User}/>
                    <Route path="/Recommd" component={Recommd}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/details/:id" component={Details}/>
                    <Redirect exact from="/" to="/home"/>
                    <Route component={Error}/>
                </Switch>
                {this.state.bFooter && <Footer/>}
            </>
        );
    }
}

export default App;