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

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
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
                <Footer/>
            </div>
        );
    }
}

export default App;