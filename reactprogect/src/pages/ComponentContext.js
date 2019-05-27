import React,{Component} from "react";
// import '../assets/css/Error.css'
import propTypes from 'prop-types'
class conextcompt extends Component {
    state={
        msg:'hahah'
    }

    setMsg=(data)=>{
        this.setState({msg:data})
    }

    static childContextTypes={
      msg: propTypes.string,
      setMsg : propTypes.func
    };
    getChildContext(){//返回上下文对象
        return {
          msg:this.state.msg,
          setMsg:this.setMsg
        }
      }
    render() {
        return (
            <div className="Contextcomponent">
                <h3>Contextcomponent</h3>
                <h3>Contextcomponent</h3>
                <Aaaa/>
            </div>
        );
    }
}
class Aaaa extends Component {
    
    render() {
        return (
            <div className="a">
                <h3>a</h3>
                <h3>a</h3>
                <Baaa/>
            </div>
        );
    }
}

class Baaa extends Component {
    static contextTypes = {
        msg: propTypes.string,
        setMsg: propTypes.func
      };
    render() {
        return (
            <div className="a">
                <h3>b</h3>
                <h3>{this.context.msg}</h3>
                <h3>b</h3>
                <input type="button" value="点击改变" onClick={()=>{this.context.setMsg("111")}}/>
            </div>
        );
    }
}
export default conextcompt;