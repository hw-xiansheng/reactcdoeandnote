import React, { Component } from 'react';

import Top from "./Top"
import Nav from "./Nav"
import { withRouter } from 'react-router-dom';

import MyRouter from "../router"
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

class LayoutBox extends Component {

    render() {
        return (
            <Layout className="page">
                <Sider className="left">
                    <Nav/>
                </Sider>
                <Content className="right">
                    <Header className="top">
                        <Top/>
                    </Header>
                    <Content className="main">
                        {/* 配置管理系统的所有子级路由！ */}
                        <MyRouter/>
                    </Content>
                </Content>
            </Layout>
        );
    }
}

export default withRouter(LayoutBox);
