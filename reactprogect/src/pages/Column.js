import React,{Component} from "react";
import '../assets/css/Column.css'
import {Link} from "react-router-dom";

class Column extends Component {
    render() {
        let {cloumn, dataName} = this.props;
      return (
            <div className="aaa">

                <div className="Column">
                    <ul>
                        {
                            cloumn && cloumn.map(item=>(
                                <Link
                                    key={item.id}
                                    to={{
                                        pathname:'/details/' + item.id,
                                        search:"?dataName=" + dataName
                                    }}
                                >
                                    <li >
                                        <div className="shu">
                                            <div className="shu-left">
                                                <img src={item.banner}/>
                                            </div>
                                            <div className="shu-right">
                                                <p className="title">{item.title}</p>
                                                <p className="auth">{item.auth}</p>
                                            </div>
                                            <div className="time">{item.time}</div>
                                        </div>
                                    </li>
                                </Link>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Column;