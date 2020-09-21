import React, { Component } from 'react';

import bus from "../bus"

class One extends Component {
    say(){
        bus.emit('kaixin',1000)
    }
    render() {
        return (
            <div className="one">
                <button onClick={this.say}>告诉Two组件！</button>
            </div>
        );
    }
}

export default One;
