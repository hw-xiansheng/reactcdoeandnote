import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class UserInfo extends Component {
    render() {
        return (
            <div>
                我是用户资料
            </div>
        );
    }
}

export default withRouter(UserInfo);
