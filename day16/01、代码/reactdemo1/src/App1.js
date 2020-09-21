import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        // state属性就是组件的数据中心，类似于vue里面的组件的data!
        this.state = {
            msg:"你好！React！",
            person:{
                name:"张飞",
                age:20
            }
        }
    }
    changemsg = ()=>{
        // this.state.msg = '我是新的msg!!!'  // 直接修改是错误的！ 虽然改了数据，但是页面不会更新，并不说数据驱动！
        console.log(this.state.msg)
        this.setState({
            msg: '我是新的msg!!!' 
        },()=>{
            console.log(this.state.msg)
        })
        // setState被执行了，render函数就会执行一次！
        // console.log(this)
        console.log(this.state.msg)
    }
    changeperson = ()=>{
        // let person = this.state.person;
        // this.setState({
        //    person:{
        //       ...person,
        //         age: ++person.age
        //    }  
        // })
        // this.setState(function(state){
        //     return {
        //         person:{
        //             ...state.person,
        //             age:++state.person.age
        //         }
        //     }
        // })
        this.setState(state=>({
            person:{
                ...state.person,
                age:++state.person.age
            }
        }))
    }
    render() {
        console.log("render函数被执行了！")
        return (
            <div>
                我是脚手架！！！
                {this.state.msg}
                <button onClick={this.changemsg}>修改msg!</button>
                <br/>
                {JSON.stringify(this.state.person)}
                <button onClick={this.changeperson}>修改person</button>
            </div>
        );
    }
}

/*
this.setState({修改对象})
this.setState(state=>({修改对象}))
this.setState(修改[对象、函数]，回调函数)


// 在哪里定义state!!!
    constructor 里面定义state!
    {this.state.xxx}
// 如何修改state!
    setState的修改是异步的！ setState会让render函数重新执行！
    
    this.setState({修改对象})
    this.setState(state=>({修改对象}))
    this.setState(修改[对象、函数]，回调函数)

*/

export default App;
