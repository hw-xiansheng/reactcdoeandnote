import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class UserClass extends Component {
    render() {
        return (
            <div>
                我是课程!
            </div>
        );
    }
}

export default withRouter(UserClass);
