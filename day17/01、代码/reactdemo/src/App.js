import React, { Component } from 'react';

import { HashRouter,Redirect,Route,Switch } from "react-router-dom"

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
    


import Header from "./components/Header"

import Index from "./pages/Index"
import About from "./pages/About"
import News from "./pages/News"
import Info from "./pages/Info"
import User from "./pages/User"
import Notfound from "./pages/Notfound"    




// import * as all from "react-router-dom";
// console.log(all)

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={Index} ></Route>
                        <Route path="/about" component={About} ></Route>
                        <Route path="/news" exact >
                            <News />
                        </Route>
                        <Route path="/news/:id" component={Info} ></Route>
                        <Route path="/user"  component={User} ></Route>
                        <Route path="/404">
                            <Notfound />
                        </Route>
                        {/* 404的配置，一定要放在最下方！！！ */}
                        <Route path="/*">
                            <Redirect to='/404' />
                        </Route>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

// 使用Route组件建立映射关系，如果component属性指定了对应的组件！那么该组件的props里面将会包含路由相关信息！
        // 如何解决一个组件里面没有路由信息！
        // 方法: 使用withRouter函数，处理一下组件！  withRouter(组件)
export default App;
