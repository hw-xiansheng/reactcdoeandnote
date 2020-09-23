import store  from "../store"


export function add(data){
    store.dispatch({
        type:"ADD",
        payload:data
    })
}

export function del(idx) {
    store.dispatch({
        type: "DEL",
        payload: idx
    })
}