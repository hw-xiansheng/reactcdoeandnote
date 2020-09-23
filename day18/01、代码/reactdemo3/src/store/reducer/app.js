// 公共模块！
let initState = {
    title:"app模块测试标题"
};

function app(state=initState,action){
    switch(action.type){
        default:
            return state
    }
}

export default app