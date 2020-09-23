import React, { Component } from 'react';

import store from "../store"

class Two extends Component {
    render() {
        return (
            <div className="two">
                仓库里面的数据：{store.state.rootnum}
            </div>
        );
    }
    componentDidMount(){
        store.on('datachange',()=>{
            this.setState({})
        })
    }
}

export default Two;
