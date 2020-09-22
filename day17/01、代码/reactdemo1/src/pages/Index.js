import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Index extends Component {
    render() {
        console.log(this);
        return (
            <div>
                首页
                <Link to="/user">去用户中心！！！</Link>
                <br/>
                <Link to={{ pathname: "/news" }}>去新闻中心</Link>
                <br />
                {/* 写法错误！！！ */}
                {/* <Link to={{ pathname: "/news", params: { id: 222 } }}>去新闻详情</Link> */}
                {/* 动态参数拼接在地址后面 */}
                <Link to={{ pathname: "/news/222"}}>去新闻详情</Link>
            </div>
        );
    }
}

export default withRouter(Index);
