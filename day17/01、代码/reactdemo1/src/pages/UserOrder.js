import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class UserOrder extends Component {
    render() {
        return (
            <div>
                我是订单
            </div>
        );
    }
}

export default withRouter(UserOrder);
