import React, { Component } from 'react';

import { HashRouter} from "react-router-dom"
import Header from "./components/Header"
import MyRouter from "./router"


// import * as all from "react-router-dom";
// console.log(all)

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Header/>
                <div className="container">
                    <MyRouter/>
                </div>
            </HashRouter>
        );
    }
}

// 使用Route组件建立映射关系，如果component属性指定了对应的组件！那么该组件的props里面将会包含路由相关信息！
        // 如何解决一个组件里面没有路由信息！
        // 方法: 使用withRouter函数，处理一下组件！  withRouter(组件)
export default App;


// 配置插件：https://www.jianshu.com/p/174861ad3dc0