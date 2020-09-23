import React, { Component } from 'react';

import { add } from "../action/student"

let defaultItem = {
    title: "",
    content: ""
}

class One extends Component {
    constructor(){
        super();
        this.state = {
            forminfo:{
                ...defaultItem
            }
        }
    }
    submit = () => {
        console.log(this.state.forminfo);
        if(this.state.forminfo.title && this.state.forminfo.content){
            // store.dispatch({
            //     type:"ADD",
            //     payload: this.state.forminfo
            // })
            add(this.state.forminfo)
            this.reset();
        }else{
            alert('请输入完整内容')
        }
    }
    reset = () => {
        this.setState({
            forminfo:{
                ...defaultItem
            }
        })
    }
    singleChange(event,attr){
        let newval = event.target.value
        this.setState(state=>({
            forminfo:{
                ...state.forminfo,
                [attr]:newval
            }
        }))
    }
    render() {
        let { title,content } = this.state.forminfo;
        return (
            <div className="one">
                <h1>表单！！</h1>
                <p>
                    标题：<input type="text" value={title}  onChange={(ev)=>this.singleChange(ev,'title')} />
                </p>
                <p>
                    内容：<input type="text" value={content} onChange={(ev)=>this.singleChange(ev,'content')} />
                </p>
                <p>
                    <button onClick={this.submit}>提交</button>
                    <button onClick={this.reset}>重置</button>
                </p>
            </div>
        );
    }
   
}

export default One;
