import React, { Component } from 'react';

import { HashRouter,Switch,Route, Redirect } from "react-router-dom"
import Login from "./pages/Login"
import LayoutBox from "./Layout"

let userinfo = localStorage.getItem('userinfo')

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/admin' />
                    </Route>
                    {/* 所有的管理系统路由都要过 /admin, 所以可以在这里进行登录拦截！ */}
                    <Route path='/admin'>
                        {userinfo ? <LayoutBox/>:<Redirect to='/login'/> }
                    </Route>
                    <Route path='/login' component={Login}></Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
