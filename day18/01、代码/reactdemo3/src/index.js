import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from "./App"

import "./assets/style.css"

import store from  "./store"
Component.prototype.$store = store; // 让所有的类组件里面this里面都会有了$store

ReactDOM.render(<App/>,document.getElementById('root'));

