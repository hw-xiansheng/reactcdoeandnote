import React, { Component } from 'react';

let defaultItem = {
    username:"",
    password:"",
    sex:"1",
    ah:[],
    isagree:true,
    city:"",
    notes:""
}

class App extends Component {
    constructor(){
        super();
        this.state = {
            forminfo:{...defaultItem}
        }
    }
    // 单选、单行文本框
    singleChange(attr,type,ev){
        let newval = ev.target[type];
        console.log(newval)
        this.setState(state=>({
            forminfo:{
                ...state.forminfo,
                [attr]: newval
            }
        }))
    }
    // 多选框
    multipleChange(attr,ev){
        let newval = ev.target.value;
        let arr = this.state.forminfo[attr];
        let idx = arr.indexOf(newval);  // 找到所在的下标，没有找到就返回-1，找到了就得到对应的下标了
        if(idx===-1){
            arr.push(newval)
        }else{
            arr.splice(idx,1)
        }
        this.setState(state => ({
            forminfo: {
                ...state.forminfo,
                [attr]: arr
            }
        }))
    }
    submit= ()=>{
        console.log(this.state.forminfo)
    }
    reset = ()=>{
        this.setState(state => ({
            forminfo: {
               ...defaultItem
            }
        }))
    }
    render() {
        let { username, password, sex, ah, isagree, city, notes } = this.state.forminfo
        return (
            <div style={{padding:"30px"}}>
                <h3>注册信息</h3>
                <p>
                    用户名：<input type="text" value={username} onChange={this.singleChange.bind(this,'username','value')} />{username}
                </p>
                <p>
                    密码：<input type="password" value={password} onChange={this.singleChange.bind(this, 'password', 'value')} />{password}
                </p>
                <p>
                    性别：
                    <label><input type="radio" value="1" checked={sex === "1"} onChange={this.singleChange.bind(this, 'sex', 'value')} />男</label>
                    <label><input type="radio" value="0" checked={sex === "0"} onChange={this.singleChange.bind(this, 'sex', 'value')}  />女</label>
                    {sex}
                </p>
                <p>
                    爱好：
                    <label><input type="checkbox" value="wjj" checked={ah.includes('wjj')} onChange={this.multipleChange.bind(this, 'ah')} />挖掘机</label>
                    <label><input type="checkbox" value="ttj" checked={ah.includes('ttj')} onChange={this.multipleChange.bind(this, 'ah')} />推土机</label>
                    <label><input type="checkbox" value="jbj" checked={ah.includes('jbj')} onChange={this.multipleChange.bind(this, 'ah')} />搅拌机</label>
                    <label><input type="checkbox" value="ssc" checked={ah.includes('ssc')} onChange={this.multipleChange.bind(this, 'ah')} />洒水车</label>
                    <label><input type="checkbox" value="dj" checked={ah.includes('dj')} onChange={this.multipleChange.bind(this, 'ah')} />吊机</label>
                    <label><input type="checkbox" value="xfc" checked={ah.includes('xfc')} onChange={this.multipleChange.bind(this, 'ah')} />消防车</label>
                    {JSON.stringify(ah)}
                </p>
                <p>
                    是否成年
                    <label><input type="checkbox" checked={isagree} onChange={this.singleChange.bind(this, 'isagree', 'checked')} />男</label>
                    {isagree ? "true":"false" }
                </p>
                <p>
                    家乡：
                    <select value={city} onChange={this.singleChange.bind(this,'city','value')}>
                        <option value="">==请选择==</option>
                        <option value="bj">==北京==</option>
                        <option value="tj">==天津==</option>
                        <option value="nj">==南京==</option>
                    </select>
                    {city}
                </p>
                <p>
                    留言：
                    <textarea value={notes} onChange={this.singleChange.bind(this,'notes','value')}></textarea>
                    {notes}
                </p>
                <p>
                    <button onClick={ this.submit }>提交</button>
                    <button onClick={this.reset}>重置</button>
                </p>
            </div>
        );
    }
}

// vue表单： v-model 核心指令！
        // <input type="text" :value="变量" @input="变量=$event.target.value" />
// React表单，不是双向数据绑定的！单向数据流！
    // 表单控件：
        // 受控组件：  要改变数据  value={变量}  checked={变量}  onChange 事件！  
        // 非受控组件： 不改变数据  defaultValue={变量}  defaultChecked={变量}   v或者value和checked的同时加上readyOnly属性，变成一个只读控件！

let x = 'sex';
let obj = {
    name:"张飞",
    [x]:'123123123'
}
console.log(obj)


export default App;

