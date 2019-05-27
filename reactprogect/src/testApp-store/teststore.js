import React,{Component} from 'react';
import {connect} from 'react-redux';

class TestStore extends Component{
    render(){
        let {add,list} =this.props;
        console.log(list)
        return(
            <div>
               <h3>测试状态管理</h3>
               <input type="text" ref='t1'/>
               <input type="button" value="提交" onClick={()=>add(this.refs.t1.value)}/>
               {
                   list.map((val,index)=>(
                       <li key={index}>{val}</li>
                   ))
               }
            </div>
        )
    }
}
//获取方法的函数
let mapDispatchToProps=(dispatch)=>{ 
    return {
        add:(val)=>dispatch({type:'ADD_NUMBER',payload:val})
    }
}
//获取公共state的函数
let mapStateToProps=(state)=>{
    console.log('mapStateToProps',state)
    return{
        list:state.list
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TestStore)
