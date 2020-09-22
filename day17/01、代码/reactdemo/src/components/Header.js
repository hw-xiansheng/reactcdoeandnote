import React, { Component } from 'react';

import { NavLink,withRouter } from "react-router-dom"

class Header extends Component {
    render() {
        console.log(this)
        return (
            <div className="header">
               <ul>
                    <li><NavLink activeClassName="on"  exact to="/">首页</NavLink></li>
                    <li><NavLink activeClassName="on"  to="/about">关于我们</NavLink></li>
                    <li><NavLink activeClassName="on"  to="/news">新闻中心</NavLink></li>
                    <li><NavLink activeClassName="on"  to="/user">用户中心</NavLink></li>
               </ul>
            </div >
        );
    }
}

export default withRouter(Header);
