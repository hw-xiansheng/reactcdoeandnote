import React from 'react';

function run(ev){
    console.log(ev.target)
    console.log(ev.target.dataset.str)
    console.log(ev.target.dataset.haha)
    console.log(ev.target.getAttribute('data-str'))
    console.log(ev.target.getAttribute('data-haha'))
    alert('run')
}

const Bbox = () => {
    console.log(this)  // undefined!!! 
    return (
        <div className="bbox box">
            <button data-str='我是数据啊！' data-haha='我是数据啊2222' onClick={run}>点击一下！</button>
        </div>
    );
}

export default Bbox;
