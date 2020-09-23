import React, { Component } from 'react';

import One from "./components/One"
import Two from "./components/Two"

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>我是根组件</h1>
                <div className="main">
                    <One />
                    <Two />
                </div>
            </div>
        );
    }
}

export default App;
