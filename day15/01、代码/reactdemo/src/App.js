import React, { Component } from 'react';

// 方式1
import dva from "./assets/img/dva.jpg"

// 引入组件
import Item from "./components/Item"
import Abox from "./components/Abox"
import Bbox from "./components/Bbox"

class App extends Component {
    render() {
        return (
            <div>
                <div className='cotbox'>
                    <Abox/><Bbox/>
                </div>
                <hr/>
                我是脚手架！！！
                {/* 不能直接引用本地图片，不会转义！ */}
                {/* <img src="./assets/img/dva.jpg" alt="123123" /> */}
                {/* 解决！ */}
                <img src={dva} alt="dva" />
                {/*推荐：方式2 */}
                <img src={ require("./assets/img/dva.jpg") } alt="dva" />
                <hr/>
                <Item/>
            </div>
        );
    }
}

export default App;
