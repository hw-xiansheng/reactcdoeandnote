import {  Redirect, Route, Switch } from "react-router-dom"
import React, { Component } from 'react';

// BrowserRouter  history模式
// HashRouter     hash模式
// Route          路由映射组件
    // path
    // component
    // exact 严格模式
// Switch     匹配到第一个匹配就跳出！
// NavLink    导航链接，有激活class，默认为active！
    // exact
    // to
// Link       普通链接   
    // to
// Redirect 
    // to     重定向



import Index from "../pages/Index"
import About from "../pages/About"
import News from "../pages/News"
import Info from "../pages/Info"
import User from "../pages/User"
import Notfound from "../pages/Notfound"
import Login from "../pages/Login"    


let userinfo = localStorage.getItem("userinfo")
class MyRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Index} ></Route>
                <Route path="/about" component={About} ></Route>
                <Route path="/news" exact >
                    <News />
                </Route>
                <Route path="/news/:id" component={Info} ></Route>
                {/* <Route path="/user" component={User} ></Route> */}
                <Route path="/user">
                    {userinfo ? <User/>:<Redirect to='/login' /> }
                </Route>
                <Route path="/login" component={Login} ></Route>
                <Route path="/404">
                    <Notfound />
                </Route>
                {/* 404的配置，一定要放在最下方！！！ */}
                <Route path="/*">
                    <Redirect to='/404' />
                </Route>
            </Switch>
        );
    }
}

export default MyRouter;

