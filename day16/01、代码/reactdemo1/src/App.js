import React, { Component } from 'react';

let userdata = [
    {
        name: "铁蛋",
        age: 20,
        sex: 1,
        score: [
            { type: "语文", num: 90 },
            { type: "数学", num: 100 },
            { type: "英语", num: 60 }
        ]
    },
    {
        name: "翠花",
        age: 19,
        sex: 2,
        score: [
            { type: "语文", num: 10 },
            { type: "数学", num: 10 },
            { type: "英语", num: 90 }
        ]
    },
    {
        name: "二狗子",
        age: 30,
        sex: 1,
        score: [
            { type: "语文", num: 80 },
            { type: "数学", num: 30 },
            { type: "英语", num: 60 }
        ]
    },
    {
        name: "狗剩儿",
        age: 25,
        sex: 1,
        score: [
            { type: "语文", num: 70 },
            { type: "数学", num: 30 },
            { type: "英语", num: 20 }
        ]
    }
]

class App extends Component {
    constructor(){
        super();
        this.state ={
            list:[]
        }
        // 模拟ajax!
        setTimeout(()=>{
            this.setState({
                list: userdata
            })
        },1000)
    }
    delRow(index){
        // alert(index)
        this.setState(state=>{
            state.list.splice(index, 1);
            return {
                list:state.list
            }
        })
    }
    delSingle(index,idx){
        console.log(index,idx)
        this.setState(state=>{
            state.list[index].score.splice(idx,1)
            return {
                list: state.list
            }
        })
    }
    render() {
        return (
            <div>
                <h3>用户信息</h3>
                <ul>
                    {this.state.list.map((val, idx) => (
                        <li key={idx}>
                            <h4>
                                姓名：{val.name},
                                年龄：{val.age},
                                性别：{val.sex===1 ? '男':'女'}
                                ===<button onClick={() => this.delRow(idx) }>删除</button>
                            </h4>
                            <ul>
                                {val.score.map((v,i)=>(
                                    <li key={i}>
                                        学科：{v.type}==&gt;分数：{v.num}
                                         ===<button onClick={()=>this.delSingle(idx,i)}>删除</button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
