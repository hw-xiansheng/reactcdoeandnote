import React, { Component } from 'react';

import  "./index.css"

class Item extends Component {
    render() {
        return (
            <div className="item">
                <h3>
                    <span>标题</span>
                </h3>
                <div className="content">
                    <p>这是一个段落</p>
                </div>
            </div>
        );
    }
}


export default Item;
