import {  Redirect, Route, Switch } from "react-router-dom"
import React, { Component } from 'react';


import Loadable from 'react-loadable';
import Loading from '../components/Loading'; 


const Index = Loadable({ loader: () => import("../pages/Index"), loading: Loading })
const Menu = Loadable({ loader: () => import("../pages/Menu"), loading: Loading })
const Role = Loadable({ loader: () => import("../pages/Role"), loading: Loading })
const User = Loadable({ loader: () => import("../pages/User"), loading: Loading })




const routeConfig = [
    { path: "/admin/", exact: true, component: <Index />, title: "后台首页" },
    {path:"/admin/menu",exact:false, component:<Menu/>,title:"菜单管理"},
    { path: "/admin/role", exact: true, component:<Role/>,title:"角色管理"},
    { path: "/admin/user", exact: false, component: <User />, title: "用户管理" },
]


class MyRouter extends Component {
    renderCom=(val)=>{
        document.title = val.title
        if(val.redirect){
            return <Redirect to={val.redirect} />
        }else{
            // 这里要权限访问判断！！！！
            return val.component;
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

