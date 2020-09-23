import * as all from "redux";
import { createStore } from "redux";



console.log(all);


// combineReducers 合并reducer！
// createStore 创建仓库！
// createStore(reducer函数、初始状态、中间件等)

// reducer函数有两个形参，形参1是初始state值！ 形参2是action！

let initState ={
    rootnum:10
}

let reudcer = function (state = initState, action) {
    switch(action.type){
        case "ADD":
            console.log("添加事件");
            state.rootnum += action.payload
            return state;
        default:
            return state;    
    }
}
let store = createStore(reudcer);
// console.log(store);

// setInterval(() => {
//     store.dispatch({
//         type:"ADD",
//         payload:20
//     });
// }, 2000);

window.store = store;

// store.dispatch()    // 触发action！！！修改state!
// store.getState()    // 获取state里面的数据！！！
// store.subscribe()   // 监听变化，只要state数据发生了变化，subscribe会自动调用！


export default store;