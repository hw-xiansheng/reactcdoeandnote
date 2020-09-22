import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Index extends Component {
    render() {
        return (
            <div>
                首页
                <Link to="/user">去用户中心！！！</Link>
                <br/>
                <Link to={{ pathname: "/news" }}>去新闻中心</Link>
                <br />
                <Link to={{ pathname: "/news",params:{id:222}}}>去新闻详情</Link>
            </div>
        );
    }
}

export default Index;
