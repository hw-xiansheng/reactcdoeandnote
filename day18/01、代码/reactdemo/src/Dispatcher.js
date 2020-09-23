// 导入仓库实例！
import store from "./store"
// 派发器！！
const Dispatcher = require('flux').Dispatcher;
// 实例化一个派发器
let dispatcher = new Dispatcher();


// 注册派发事件
dispatcher.register(function(action){
    switch(action.type){
        case "ADD":
            console.log("添加事件")
            store.state.rootnum += action.payload
            store.emit('datachange')
            break;
        case "REDUCE":
            console.log("减少事件")
            store.state.rootnum -= action.payload
            store.emit('datachange')
            break;  
        default:
            console.log("默认事件");      
    }
    console.log(store.state);
})


// setTimeout(() => {
//     // 触发派发器
//     dispatcher.dispatch({
//         type:'ADD',
//         payload:10
//     })
// }, 2000);

// setTimeout(() => {
//     // 触发派发器
//     dispatcher.dispatch({
//         type: 'REDUCE',
//         payload: 5
//     })
// }, 4000);


// 实例化一个派发器   let dispatcher = new Dispatcher();
// 两个核心方法：
    // dispatcher.register(function(action){  ...  })
    // dispatcher.dispatch(实参)

// 暴露派发器！！！
export default dispatcher;    