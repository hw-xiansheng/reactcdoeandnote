import React, { Component } from 'react';

import One from "./components/One"
import Two from "./components/Two"
import Child from "./components/Child"
import AlertBox from "./components/AlertBox"



class App extends Component {
    constructor(){
        super();
        this.state ={
            haha:2000,
            hehe:"🙃🙃🙃🙃",
            info:{
                title:"提示框",
                content:"",
                isshow:false
            }
        }
    }
    aiyouwei = (str)=>{
        console.log(str)
        console.log(this)
        console.log("我是哎呦喂函数！")
    }
    toggleshow = ()=>{
        this.setState(state=>({
            info:{
                ...state.info,
                isshow:!state.info.isshow
            }
        }))
    }
    render() {
        return (
            <div className="app">
                我是脚手架！！！
                <hr/>
                <button onClick={this.toggleshow}  >打开！</button>
                <AlertBox {...this.state.info} toggleshow={this.toggleshow} />
                {/* <AlertBox title={this.state.info.title} content={this.state.info.content}  isshow={this.state.info.isshow} /> */}
                <Child txt="我是一个很长的txt！"  msg={this.aiyouwei} hehe={this.state.hehe} ok={this.state.haha} />
                <div className='main'>
                    <One />
                    <Two />
                </div>
            </div>
        );
    }
}

export default App;
