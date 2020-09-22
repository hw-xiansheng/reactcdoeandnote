import React, { Component } from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';

import { createHashHistory } from "history"

import UserIndex from "./UserIndex"
import UserClass from "./UserClass"
import UserOrder from "./UserOrder"
import UserInfo from "./UserInfo"

let history = createHashHistory();

class User extends Component {
    quit=()=>{
        // this.props.history.push('/')
        history.push('/')
    }
    render() {
        return (
            <div className="main">
                <div className="nav">
                    <ul>
                        <li><NavLink activeClassName="on" to='/user/class'>我的课程</NavLink></li>
                        <li><NavLink activeClassName="on" to='/user/order'>我的订单</NavLink></li>
                        <li><NavLink activeClassName="on" to='/user/info'>我的资料</NavLink></li>
                    </ul>
                </div>
                <div className="box">
                    <div>
                        <div>欢迎您:<button onClick={this.quit}>退出</button></div>
                        <hr/>
                        {/* 主体内容 */}
                        <Switch>
                            <Route path="/user/" exact component={UserIndex}></Route>
                            <Route path="/user/order" component={UserOrder}></Route>
                            <Route path="/user/class" component={UserClass}></Route>
                            <Route path="/user/info" component={UserInfo}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

// 嵌套路由：
    // 嵌套路由的配置是写在对应的嵌套页面组件里面，而不是顶级！
    // 嵌套路由的上级路由不能是严格模式！

export default withRouter(User);
