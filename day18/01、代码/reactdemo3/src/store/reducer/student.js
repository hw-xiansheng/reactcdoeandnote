// 学生信息模块
let initState = {
    list:[]
};

function student(state = initState, action) {
    switch (action.type) {
        case 'ADD':
            state.list.push(action.payload)
            return state;
        case 'DEL':
            state.list.splice(action.payload,1)
            return state;    
        default:
            return state
    }
}

export default student