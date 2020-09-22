import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class News extends Component {
    render() {
        return (
            <div>
                新闻列表
                <ul>
                    <li><Link to='/news/111'>新闻111</Link></li>
                    <li><Link to='/news/222'>新闻222</Link></li>
                    <li><Link to='/news/333'>新闻333</Link></li>
                    <li><Link to='/news/444'>新闻444</Link></li>
                </ul>
            </div>
        );
    }
}

export default withRouter(News);
