import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Notfound extends Component {
    render() {
        console.log(this)
        return (
            <div>
                404页面
            </div>
        );
    }
}

export default withRouter(Notfound);
