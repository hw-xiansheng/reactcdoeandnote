import React, { Component } from 'react';

import store from "../store"
import Dispatcher from "../Dispatcher"

class One extends Component {
    change =()=>{
        Dispatcher.dispatch({
            type:"ADD",
            payload:5
        })
    }
    render() {
        return (
            <div className="one">
                <button onClick={this.change}>修改仓库里面的rootnum</button>
                仓库里面的数据：{store.state.rootnum}
            </div>
        );
    }
    componentDidMount() {
        store.on('datachange', () => {
            this.setState({})
        })
    }
}

export default One;
