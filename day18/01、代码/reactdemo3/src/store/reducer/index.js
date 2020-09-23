import { combineReducers } from "redux";


import app from "./app"
import student from "./student"

// combineReducers合并reducer函数！
let reudcer = combineReducers({
    app: app,
    student: student
})

export default reudcer;