import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "./assets/css/style.css"


ReactDOM.render(<App/>,document.getElementById('root'));


// src/index.js入口文件！
// 所有的import语句必须放在常规代码上面！
// 图的问题：
    // 引入外链图片没问题！
    // 引入本地图片不行！
        // 解决思路：
            // 用import 
            // 使用require