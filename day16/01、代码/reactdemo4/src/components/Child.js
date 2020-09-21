import React, { Component } from 'react';

class Child extends Component {
    constructor(){ // 初始化阶段！
        console.log("初始化阶段！")
        super();
        this.state ={ msg:"我是msg!!" }
    }
    UNSAFE_componentWillMount() {  // 组件将要被挂载！
        console.log("组件将要被挂载！UNSAFE_componentWillMount")
    }
    changemsg = ()=>{
        this.setState(state=>({
            msg:state.msg+'新的！'
        }))
    }
    UNSAFE_componentWillReceiveProps(){
        console.log("组件将要接收新的props:UNSAFE_componentWillReceiveProps")
    }
    shouldComponentUpdate(newProps,newState){
        // console.log(newProps)  // 新的props!   this.props! 老的
        // console.log(newState)  // 新的state!   this.state! 老的
        console.log("组件是否应该被更新：shouldComponentUpdate")
        // 该方法需要返回一个布尔值，true表示要更新，false表示不能更新！
        return true;
    }
    UNSAFE_componentWillUpdate(){
        console.log("组件将要更新：UNSAFE_componentWillUpdate")
    }
    render() {
        console.log("render函数执行了，正在渲染组件！")
        return (
            <div style={{padding:"30px"}}>
                {this.props.num}
                <button onClick={this.changemsg}>修改msg!{this.state.msg}</button>
            </div>
        );
    }
    componentDidUpdate(prevProps,prevState){
        // console.log(prevProps)   // 老的props    this.props 新的！
        // console.log(prevState)   // 老的state    this.state 新的！
        console.log("组件更新完成：componentDidUpdate")
        // this.setState({})  // 切记不能再任何一个更新函数里面去调用setState会更新死循环！
    }
    componentDidMount() {   // 组件挂载完成：
        // 发送ajax请求！！！
        console.log("组件挂载完成：componentDidMount")
    }
    componentWillUnmount(){
        console.log("组件将要被卸载！！！componentWillUnmount")
    }
}

export default Child;
