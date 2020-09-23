import React, { Component } from 'react';

import store from "../store"

class One extends Component {
    constructor(){
        super();
        let state = store.getState();
        this.state = {
            rootnum:state.rootnum
        }
    }
    change =()=>{
        store.dispatch({
            type:"ADD",
            payload:5
        })
    }
    render() {
        return (
            <div className="one">
                <button onClick={this.change}>修改仓库里面的rootnum</button>
                仓库里面的数据：{this.state.rootnum}
            </div>
        );
    }
    componentDidMount() {
        // 添加监听！
        // store.subscribe(callback) 一旦state里面的数据发生了变化就会自动更新！
        this.unsubscribe = store.subscribe(()=>{
            console.log("仓库里面的数据发生了变化！");
            let state = store.getState();  // 获取新的仓库数据
            this.setState({
                rootnum: state.rootnum
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe(); // 注销监听！！
    }
}

export default One;
