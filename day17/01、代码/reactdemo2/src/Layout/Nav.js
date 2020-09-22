import React, { Component } from 'react';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

class Nav extends Component {
    render() {
        return (
            <Menu
                style={{ width: 200 }}
                mode="inline"
            >
                <SubMenu key="1"
                    title={
                        <span>
                            <span>系统设置</span>
                        </span>
                    }
                >
                    <Menu.Item key="5"><Link to='/admin/menu'>菜单管理</Link></Menu.Item>
                    <Menu.Item key="6"><Link to='/admin/role'>角色管理</Link></Menu.Item>
                    <Menu.Item key="7"><Link to='/admin/user'>管理员管理</Link></Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default Nav;
