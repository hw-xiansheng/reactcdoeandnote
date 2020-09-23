import React, { Component } from 'react';

// import store from "../store"
import { del } from "../action/student"

class Two extends Component {
    constructor() {
        super();
        // let state = store.getState();
        let state = this.$store.getState();
        this.state = {
            list: state.student.list
        }
    }
    render() {
        return (
            <div className="two">
                <h1>列表</h1>
                <ul>
                    {this.state.list.map((val,idx)=>{
                        // return (<li key={idx}>标题：{val.title} ==== 内容：{val.content}  <button onClick={() => store.dispatch({ type: "DEL", payload: idx })}>删除</button></li>)
                        return (<li key={idx}>标题：{val.title} ==== 内容：{val.content}  <button onClick={() => del(idx) }>删除</button></li>)
                    })}
                </ul>
            </div>
        );
    }
    componentDidMount(){
        // this.unsubscribe = store.subscribe(() => {
        this.unsubscribe = this.$store.subscribe(() => {
            let state = this.$store.getState();  // 获取新的仓库数据
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
