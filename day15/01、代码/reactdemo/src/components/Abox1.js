import React, { Component } from 'react';
// 事件绑定和传参！

class Abox extends Component {
    constructor(){
        super();  // this之前调用super函数！
        this.fn3 = this.fn3.bind(this)  // 绑定this指向！ 构造函数里面绑定一次即可！
    }
    fn1(){  // 不能传参！不能使用this！
        alert('fn1')
        console.log(this)
    }
    fn2(str) {  // 可以传参！又可以使用this！ 【重要！！】
        alert('fn2')
        alert(str)
        console.log(this)
    }
    fn3() {  // 不能传参！可以使用this！
        alert('fn3')
        console.log(this)
    }
    fn4(str) {  // 可以传参！又可以使用this！ 【重要！！】
        alert('fn4')
        alert(str)
        console.log(this)
    }
    fn5 = () => {   // 不能传参！可以使用this！
        alert('fn5')
        console.log(this)
    }
    render() {
        return (
            <div className="abox box">
                <button onClick={this.fn1}>方法1</button>
                <button onClick={this.fn2.bind(this, '哈哈哈')}>方法2</button>
                <button onClick={this.fn3}>方法3</button>
                {/* 方法4， 按钮的事件函数本质是这个箭头函数！ */}
                {/* <button onClick={() => { console.log(this); console.log(1111) }}>方法4</button> */}
                {/* <button onClick={() => { this.fn4('开心的四号选手！') }}>方法4</button> */}
                <button onClick={() =>this.fn4('开心的四号选手！') }>方法4</button>
                <button onClick={this.fn5}>方法5</button>
            </div>
        );
    }
}
// 函数.bind(对象)

export default Abox;
