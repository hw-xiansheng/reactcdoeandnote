// import React, { Component } from 'react';

// class AlertBox extends Component {
//     render() {
//         console.log(this)
//         let { title,isshow,content} = this.props; 
//         let htmlstr;
//         if(isshow){
//             htmlstr = <div className="alert">
//                 <div className="title">{title}</div>
//                 <div className="content">{content}</div >
//                 <div className="bot">
//                     <button onClick={this.props.toggleshow}>确定</button>
//                 </div>
//             </div>
//         }else{
//             htmlstr =''
//         }
//         return htmlstr;
//     }
// }

// export default AlertBox;

import React from 'react';

const AlertBox = ({ title, content, toggleshow, isshow}) => {

        let htmlstr;
        if(isshow){
            htmlstr = <div className="alert">
                <div className="title">{title}</div>
                <div className="content">{content}</div >
                <div className="bot">
                    <button onClick={toggleshow}>确定</button>
                </div>
            </div>
        }else{
            htmlstr =''
        }

    return htmlstr;
}

export default AlertBox;
