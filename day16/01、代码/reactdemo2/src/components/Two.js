import React, { Component } from 'react';

import bus from "../bus"

class Two extends Component {
    constructor(){
        super();
        this.state ={
            msg:""
        }
        bus.on('kaixin',(val)=>{
            alert('开心被触发了,传入了'+val)
            this.setState({
                msg:val
            })
        })
    }
    render() {
        return (
            <div className="two">
                {this.state.msg}
            </div>
        );
    }
}

export default Two;
