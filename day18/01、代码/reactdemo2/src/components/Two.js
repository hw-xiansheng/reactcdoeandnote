import React, { Component } from 'react';

import store from "../store"

class Two extends Component {
    constructor() {
        super();
        let state = store.getState();
        this.state = {
            rootnum: state.rootnum
        }
    }
    render() {
        return (
            <div className="two">
                仓库里面的数据：{this.state.rootnum}
            </div>
        );
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
            let state = store.getState();  // 获取新的仓库数据
            this.setState({
                rootnum: state.rootnum
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribe(); // 注销监听！！
    }
}

export default Two;
