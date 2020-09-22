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


import Loadable from 'react-loadable';
import Loading from '../components/Loading'; 

// import Index from "../pages/Index"
// import About from "../pages/About"
// import News from "../pages/News"
// import Info from "../pages/Info"
// import User from "../pages/User"
// import Notfound from "../pages/Notfound"
// import Login from "../pages/Login"    

const Index = Loadable({ loader: () => import("../pages/Index"), loading: Loading })
const About = Loadable({ loader: () => import("../pages/About"), loading: Loading })
const News = Loadable({ loader: () => import("../pages/News"), loading: Loading })
const User = Loadable({ loader: () => import("../pages/User"), loading: Loading })
const Notfound = Loadable({ loader: () => import("../pages/Notfound"), loading: Loading })
const Login = Loadable({ loader: () => import("../pages/Login"), loading: Loading })
const Info = Loadable({ loader: () => import("../pages/Info"), loading: Loading})




const routeConfig = [
    { path: "/", exact: true, component: <Index />, title: "首页" },
    {path:"/about",exact:false, component:<About/>,title:"关于我们"},
    { path: "/news", exact: true, component:<News/>,title:"新闻列表"},
    { path: "/news/:id", exact: false, component: <Info />, title: "新闻详情" },
    { path: "/user", exact: false, component: <User />, title: "用户中心",needLogin:true },
    { path: "/login", exact: false, component: <Login />, title: "登录" },
    { path: "/404", exact: false, component: <Notfound />, title: "404页面" },
    { path: "/*", exact: false,redirect:"/404"}
]


class MyRouter extends Component {
    renderCom=(val)=>{
        document.title = val.title
        if(val.redirect){
            return <Redirect to={val.redirect} />
        }else{
            // 这里！！！ 要做判断！登录判断，权限判断！！！
            if (val.needLogin){
                if (localStorage.getItem('userinfo')) {
                    return val.component;
                } else {
                    return <Redirect to="/login" />
                }
            }else{
                return val.component;
            }
        }
    }
    render() {
        return (
            <Switch>
                {/* <Route path="/" exact render={() =>this.renderCom(<Index/>)} ></Route>
                <Route path="/about"  render={() =>this.renderCom(<About/>)} ></Route>
                <Route path="/news"   render={() =>this.renderCom(<News/>)} ></Route> */}
                {routeConfig.map((val,idx)=>{
                    return <Route key={idx} path={val.path} exact={val.exact} render={() => this.renderCom(val)} ></Route>
                })}
            </Switch>
        );
    }
}

export default MyRouter;

