import React, { Component } from 'react';

// 既要传参又要获取事件对象！

class Abox extends Component {
    constructor(){
        super();  // this之前调用super函数！
    }
    fn2(str,ev) {  // 形参的最后一位就是事件对象！
        console.log(ev.target)
        console.log(str)
        alert('fn2')
        console.log(this)
    }
    fn4(ev,num) {  // 可以传参！又可以使用this！ 【重要！！】
        console.log(ev.target)
        console.log(num)
        alert('fn4')
        console.log(this)
    }
    render() {
        return (
            <div className="abox box">
                <button onClick={this.fn2.bind(this,'哈哈哈，我是种子选手2号！')}>方法2</button>
                {/* 方法4， 按钮的事件函数本质是这个箭头函数！ */}
                {/* 事件对象在箭头函数那里，传给调用的函数！ */}
                <button onClick={(event) =>this.fn4(event,111111) }>方法4</button>
            </div>
        );
    }
}
// 函数.bind(对象)

export default Abox;
